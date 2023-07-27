import { useGetApiJobPostingsQuery } from "components/jobs/jobListing/jobPostings.generated";
import { NextApiRequest, NextApiResponse } from "next";

interface IJobsApiResponse {
  items: Array<{
    job_id: string;
    title: string;
    description: string;
    url: string;
    application_link: string;
    employment: string;
    workload: string;
    area: string[];
    locations: string[];
    date_published: string;
  }>;
}

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { crawler } = request.query;
  if (!crawler) {
    return response.status(404).send("Not found");
  }

  const data = await useGetApiJobPostingsQuery.fetcher()();
  const jobs: IJobsApiResponse = { items: [] };

  data.entries.forEach((entry) => {
    if (entry.__typename === "jobs_default_Entry") {
      jobs.items.push({
        job_id: entry.jobId,
        title: entry.title,
        description: entry.jobPostingDescription,
        url: `https://www.stellenwerk.ch/jobs/${entry.jobId}?&utm_source=${crawler}&utm_medium=crawler&utm_content=jobPosting`,
        application_link: `https://www.stellenwerk.ch/jobs/apply/${entry.jobId}?&utm_source=${crawler}&utm_medium=crawler&utm_content=jobApplication`,
        employment: entry.jobPostingEmployment[0]?.title,
        workload: entry.jobPostingWorkload,
        area: entry.jobPostingArea.map((a) => a.title),
        locations: entry.jobPostingLocation.map((l) => l.title),
        date_published: entry.dateUpdated,
      });
    }
  });

  return response.json({ jobs: jobs.items });
}

export default handler;
