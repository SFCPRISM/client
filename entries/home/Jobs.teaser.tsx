import { Typography } from "components/typography/Typography";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { GetTopJobsQuery, useGetTopJobsQuery } from "./home.generated";

interface IJobsTeaserProps {
  title: ReactNode;
  className?: string;
}

export const JobsTeaser: FunctionComponent<IJobsTeaserProps> = ({
  title,
  className,
}) => {
  const { data } = useGetTopJobsQuery(
    {},
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const topJobs = extractTopJobs(data);

  return <JobTeaserView title={title} jobs={topJobs} className={className} />;
};

interface IJobTeaserViewProps {
  title: ReactNode;
  jobs: IJobListItem[];
  className?: string;
}

export const JobTeaserView: FunctionComponent<IJobTeaserViewProps> = ({
  title,
  jobs,
  className,
}) => {
  return (
    <Container className={className}>
      {title}
      <JobList>
        {jobs
          ? jobs.map((item) => {
              return (
                <JobListItem key={item.jobId} item={item as IJobListItem} />
              );
            })
          : Array.from(Array(3).keys()).map((key) => (
              <JobListItem
                key={key}
                item={{
                  jobId: String(key),
                  title: " ",
                  jobPostingWorkload: " ",
                }}
              />
            ))}
      </JobList>
    </Container>
  );
};

export interface IJobListItem {
  jobId: string;
  title: string;
  jobPostingWorkload: string;
  jobPostingLocation?: Array<{
    title: string;
  }>;
}

const JobListItem = ({ item }: { item: IJobListItem }) => {
  return (
    <JobListItemContainer>
      <Link href={`/jobs/${item.jobId}`} passHref>
        <a>
          <JobListItemInner>
            <JobListItemTitle variant="h2">{item.title}</JobListItemTitle>
            <Typography variant="h3">
              {item.jobPostingLocation?.length
                ? `${item.jobPostingLocation?.[0].title} | `
                : null}
              {item.jobPostingWorkload}
            </Typography>
          </JobListItemInner>
        </a>
      </Link>
    </JobListItemContainer>
  );
};
const extractTopJobs = (data?: GetTopJobsQuery) => {
  if (!data) {
    return null;
  }

  let topJobs = [];

  const { entry, entries: fallbackEntries } = data as any;

  if (entry?.topJobs?.length) {
    topJobs = entry.topJobs;
  }

  if (topJobs.length < 3) {
    topJobs.push(...fallbackEntries.slice(0, 3 - topJobs.length));
  }

  return topJobs;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobList = styled.ul`
  list-style: none;
  color: ${colors.default.primaryColor};
  margin: 0;
  margin-top: ${spacing.base};
  padding: 0;
  border-top: 1px solid ${colors.default.primaryColor};
  min-height: 450px;

  ${breakpointQuery.smDown} {
    min-height: 350px;
  }
`;

const JobListItemContainer = styled.li`
  cursor: pointer;
  margin-left: 0;

  border-bottom: 1px solid ${colors.default.primaryColor};

  &::before {
    content: "";
  }

  ${breakpointQuery.smDown} {
    padding: ${spacing.small} 0;
  }
`;

const JobListItemInner = styled.div`
  padding: ${spacing.small} 0;
  transition: transform 200ms ease-in-out;

  ${breakpointQuery.mdUp} {
    // TODO: Use grid gap variable
    padding: ${spacing.medium} 0;
    &:hover {
      transform: translateX(-32px);
      color: ${colors.default.primaryColorLighten8};
    }
  }
`;

const JobListItemTitle = styled(Typography)`
  margin-bottom: 0;
`;
