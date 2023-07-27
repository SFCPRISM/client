import { useGetJobPostingsQuery } from "components/jobs/jobListing/jobPostings.generated";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

export const JobsCounter: FunctionComponent = () => {
  const translations = useTranslations([
    "job_count_teaser:p1",
    "job_count_teaser:p2",
    "view_all_jobs",
  ]);
  const { data } = useGetJobPostingsQuery(
    {},
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const jobCount = Math.floor(data?.entries?.length / 5) * 5 || null;

  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        color={colors.default.primaryColor}
      >
        {translations["job_count_teaser:p1"].replace("[0]", jobCount || "...")}
        <LineBreak />
        {translations["job_count_teaser:p2"]}
      </Typography>
      <br />
      <Link href={`jobs`} passHref>
        <ButtonLink variant="contained">
          {translations["view_all_jobs"]}
        </ButtonLink>
      </Link>
    </>
  );
};

const LineBreak = styled.br`
  display: none;

  ${breakpointQuery.lgUp} {
    display: unset;
  }
`;
