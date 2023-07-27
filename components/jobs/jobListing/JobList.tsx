import { CircularProgress } from "@material-ui/core";
import { Col, Grid, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { Button } from "components/ui/button/Button";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { useEffect } from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { JobFilters } from "../jobFilter/JobFilters";
import { useJobFilters } from "../jobFilter/useJobFilters";
import { JobListItem } from "./JobListItem";
import { useGetJobPostingsQuery } from "./jobPostings.generated";

export const JobList: FunctionComponent = () => {
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const {
    filters,
    filterState: { location, area, employment },
    filter,
  } = useJobFilters();

  const translations = useTranslations([
    "jobs",
    "role",
    "region",
    "workload",
    "no_jobs_found",
    "temporary_positions",
  ]);

  const [queryVariables, setQueryVariables] = useState({});

  const { data, isFetching } = useGetJobPostingsQuery(queryVariables, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !isMobileFilterVisible,
  });

  useEffect(() => {
    const tagRelations = [location, area, employment]
      .map((tag) => tag && { title: tag })
      .filter((tag) => tag !== null);

    const newQueryVariables = tagRelations.length
      ? {
          relatedToTags: tagRelations,
        }
      : {};
    setQueryVariables(newQueryVariables);
  }, [location, area, employment]);

  useEffect(() => {
    data?.entries.map((entry) => {
      if (entry.__typename !== "jobs_default_Entry") {
        return;
      }
    });
  }, [data]);

  return (
    <>
      <JobListArea>
        <FilterAreaMobile isOpen={isMobileFilterVisible}>
          <JobFilters
            filters={filters}
            filterState={{ location, area, employment }}
            filter={filter}
            callback={() => setIsMobileFilterVisible(false)}
          />
          <ShowJobsButtonArea>
            <Button
              variant="contained"
              onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
            >
              Stellen anzeigen
            </Button>
          </ShowJobsButtonArea>
        </FilterAreaMobile>
        <Grid>
          <StyledRow>
            <Col lg={4} xl={3}>
              <FilterAreaDesktop>
                <JobFilters
                  filters={filters}
                  filterState={{ location, area, employment }}
                  filter={filter}
                />
              </FilterAreaDesktop>
            </Col>
            <Col xs={12} lg={8} xl={9}>
              <Header>
                <Typography variant="h2" color={colors.default.primaryColor}>
                  {data?.entries?.length ?? data?.entries.length}{" "}
                  {translations["jobs"]}
                </Typography>
                <WorkloadInfo>
                  ⦿ {translations["temporary_positions"]}
                </WorkloadInfo>
                <ShowMobileFilterButtonArea>
                  <Button
                    variant="contained"
                    onClick={() =>
                      setIsMobileFilterVisible(!isMobileFilterVisible)
                    }
                  >
                    Filter anzeigen
                  </Button>
                </ShowMobileFilterButtonArea>
              </Header>
              {isFetching && !data && (
                <LoadingStateArea>
                  <StyledCircularProgress color="primary" />
                </LoadingStateArea>
              )}
              {!data ? (
                <></>
              ) : (
                data.entries.map((entry) => {
                  if (entry.__typename !== "jobs_default_Entry") {
                    return null;
                  }

                  return (
                    <Link
                      key={entry.jobId}
                      href={`jobs/${entry.jobId}`}
                      passHref
                    >
                      <a aria-label={`Job Details: ${entry.title}`}>
                        <StyledJobListItem
                          id={entry.jobId}
                          title={entry.title}
                          location={entry.jobPostingLocation[0].title}
                          workload={entry.jobPostingWorkload}
                          employment={entry.jobPostingEmployment[0].title}
                          area={entry.jobPostingArea[0].title}
                        />
                      </a>
                    </Link>
                  );
                })
              )}
              {data?.entries?.length === 0 && (
                <EmptyStateArea>
                  <Typography variant="h2" component="h3">
                    {translations["no_jobs_found"]}
                  </Typography>
                </EmptyStateArea>
              )}
            </Col>
          </StyledRow>
        </Grid>
      </JobListArea>
    </>
  );
};

const StyledRow = styled(Row)`
  grid-gap: ${spacing.grande} 0;
`;

const JobListArea = styled.div`
  padding: 24px 0;
  margin-bottom: ${spacing.giant};
  background-color: ${colors.default.primaryColorLighten96};
  padding-top: ${spacing.grande};

  ${breakpointQuery.mdDown} {
    padding-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${spacing.medium};

  ${breakpointQuery.mdDown} {
    position: sticky;
    top: ${spacing.grande};
    z-index: 2;
    background-color: ${colors.default.primaryColorLighten96};

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: ${spacing.grande};
      background-color: ${colors.default.primaryColorLighten96};
      z-index: 2;
      top: ${spacing.grandeNegative};
    }
  }
`;

const FilterAreaDesktop = styled.div`
  position: sticky;
  top: ${spacing.grande};
  margin-right: ${spacing.big};

  ${breakpointQuery.mdDown} {
    display: none;
  }
`;

const FilterAreaMobile = styled.div<{ isOpen: boolean }>`
  display: none;
  ${breakpointQuery.mdDown} {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: sticky;
    height: 100vh;
    width: 100%;
    z-index: 300;
    background-color: ${colors.default.white};
    padding: ${spacing.grande} ${spacing.medium};
    top: 0;
    left: 0;
  }
`;

const ShowJobsButtonArea = styled.div`
  margin-top: ${spacing.medium};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
  }
`;

const ShowMobileFilterButtonArea = styled.div`
  ${breakpointQuery.lgUp} {
    display: none;
  }
`;

const StyledJobListItem = styled(JobListItem)`
  margin-bottom: ${spacing.base};
`;

const LoadingStateArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
  height: 1200px;
  width: 100%;
`;

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: ${spacing.giant};
  left: calc(50% - 25px);
`;

const EmptyStateArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${colors.default.primaryColor};
  margin-top: ${spacing.giant};
`;

const WorkloadInfo = styled.div`
  color: ${colors.default.primaryColor};
  ${breakpointQuery.xs} {
    position: absolute;
    right: 0;
    top: ${spacing.hugeNegative};
    z-index: 2;
  }
`;
