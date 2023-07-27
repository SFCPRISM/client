import { useGetJobPostingQuery } from "./jobPosting.generated";

export const useJobPostingData = (id: string) => {
  const { data } = useGetJobPostingQuery(
    { jobPostingId: [id] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (data?.entry.__typename !== "jobs_default_Entry") {
    return { title: null };
  }

  return { ...data.entry };
};
