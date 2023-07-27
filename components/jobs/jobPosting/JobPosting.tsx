import { CircularProgress } from "@material-ui/core";
import { Col, Grid, Row } from "components/layout/Grid";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { useTranslations } from "lib/i18n/translations";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { getSocialMetaTags } from "lib/seo/meta/social";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useGetJobPostingQuery } from "./jobPosting.generated";
import { getJsonLD } from "./jsonLD";

interface IJobPostingProps {
  id: string;
  children?: ReactNode;
  isSlimVariant?: boolean;
  referrer?: string;
}

export const JobPosting: FunctionComponent<IJobPostingProps> = ({
  id,
  children,
  isSlimVariant,
  referrer,
}) => {
  const { data, isFetching } = useGetJobPostingQuery(
    { jobPostingId: [id] },
    { refetchOnWindowFocus: true, refetchOnMount: "always" }
  );
  const translations = useTranslations(["seo_job_description"]);

  if (isFetching && !data) {
    return (
      <Content>
        <StyledCircularProgress color="primary" />
      </Content>
    );
  }

  if (data?.entry?.__typename !== "jobs_default_Entry") {
    return (
      <Content>
        <Grid>
          <Row>
            <Col xs={12} md={6} centered>
              <h2>Wir konnten die Stelle nicht mehr finden.</h2>
              <br />
              <Link href={`/jobs`} passHref>
                <ButtonLink variant="contained">
                  Andere Jobs von Stellenwerk
                </ButtonLink>
              </Link>
            </Col>
          </Row>
        </Grid>
      </Content>
    );
  }

  const {
    title,
    jobPostingDescription,
    jobPostingArea,
    jobPostingLocation,
    jobPostingWorkload,
    jobPostingLogo,
  } = data.entry;

  return (
    <>
      <Head>
        <title>Stellenwerk Jobs - {title}</title>
        <meta
          name="description"
          content={`${translations["seo_job_description"]
            .replace("[0]", title)
            .replace("[1]", jobPostingArea[0].title)
            .replace("[2]", jobPostingWorkload)
            .replace("[3]", jobPostingLocation[0].title)}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getJsonLD(data.entry)),
          }}
        />
        {getSocialMetaTags(
          `Stellenwerk Jobs - ${title}`,
          translations["seo_job_description"]
        )}
      </Head>
      <Content>
        {/* <TitleArea>
          <Title>{title}</Title>
        </TitleArea> */}
        <StickyActions>
          <Link
            href={`/jobs/apply/${id}${referrer ? `?ref=${referrer}` : ""}`}
            passHref
            rel="nofollow"
          >
            <ButtonLink
              variant="contained"
              target={isSlimVariant ? "_blank" : "_self"}
            >
              Jetzt Bewerben
            </ButtonLink>
          </Link>
        </StickyActions>
        <StyledGrid>
          <Row>
            <Col centered xs={12} md={8}>
              {jobPostingLogo.length > 0 ? (
                <ImageArea>
                  <ImageContainer>
                    <Image
                      src={jobPostingLogo[0].url}
                      layout="fixed"
                      objectFit="scale-down"
                      alt={`${data.entry.title} JobPosting Logo`}
                      width={220}
                      height={160}
                    />
                  </ImageContainer>
                </ImageArea>
              ) : null}

              <JobDescription html={jobPostingDescription} />
            </Col>
          </Row>
        </StyledGrid>
        {children}
      </Content>
    </>
  );
};

const TitleArea = styled.div`
  padding: 0 141px 40px;
  border-bottom: 1px solid ${colors.default.primaryColor};
  max-width: 500px;
  width: 100%;
  margin-bottom: 40px;
`;
const Title = styled.h1`
  color: ${colors.default.primaryColor};
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

const ImageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 160px;
  max-height: 160px;
`;

const Content = styled.div`
  padding-bottom: ${spacing.giant};
  color: ${colors.default.primaryColor};
  min-height: 100vh;

  ${breakpointQuery.mdUp} {
    padding: ${spacing.giant} 0;
  }
`;

const StyledGrid = styled(Grid)`
  overflow: hidden;
`;

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  left: calc(50% - 25px);
  top: ${spacing.giant};

  ${breakpointQuery.mdUp} {
    top: 180px;
  }
`;

const JobDescription = styled(SanitizedHtml)`
  margin-bottom: 100px;
  font-size: 24px;
  letter-spacing: 0.17px;
  line-height: 34px;

  li,
  p,
  span {
    font-size: 24px;
    letter-spacing: 0.17px;
    line-height: 34px;

    ${breakpointQuery.smDown} {
      font-size: 18px !important;
      line-height: 26px !important;
      letter-spacing: 0.13px !important;
    }
  }

  i:first-of-type,
  em:first-of-type {
    display: block;
    background-color: ${colors.default.primaryColor};
    color: #ffffff;
    margin: 0 -50px;
    padding: 32px 48px;
    font-style: normal;

    font-size: 40px;
    letter-spacing: 0.28px;
    line-height: 50px;
    font-weight: 600;

    ${breakpointQuery.smDown} {
      font-size: 30px !important;
      line-height: 45px !important;
      letter-spacing: 0.21px !important;
    }
  }

  ${breakpointQuery.smDown} {
    ul {
      margin-left: ${spacing.big};
    }
  }
`;

const StickyActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: calc(100vh - 80px);
  z-index: 1;

  ${breakpointQuery.mdUp} {
    top: calc(100vh - 200px);
    justify-content: flex-end;
    padding-right: ${spacing.medium};
  }
`;
