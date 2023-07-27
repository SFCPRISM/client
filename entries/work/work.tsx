import { Grid, Col, Row } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { Typography } from "components/typography/Typography";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { BenefitsList } from "./benefitsList";
import { useGetWorkQuery } from "./work.generated";
import { IJobListItem, JobTeaserView } from "entries/home/Jobs.teaser";
import Link from "next/link";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { CallToActionBanner } from "components/callToAction/CallToAction";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { ContentLayout } from "components/layout/Layout";
import { FunctionComponent } from "react";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { PersonTeaser } from "components/teaser/PersonTeaser";

interface IWorkAtStellenwerkProps {
  type: "benefits" | "jobs" | "learn";
}

export const WorkAtStellenwerk: FunctionComponent<IWorkAtStellenwerkProps> = ({
  type,
}) => {
  const localizationId = useLocalizationId();
  const { data } = useGetWorkQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const translations = useTranslations([
    "spontaneous_application_teaser_SW:title",
    "spontaneous_application_teaser_SW:description",
    "convince_us",
    "work_at_stellenwerk:jobs:title",
    "work_at_stellenwerk:jobs:description",
    "work_at_stellenwerk:benefits:title",
    "work_at_stellenwerk:learn:title",
    "work_at_stellenwerk:benefits:description",
  ]);

  if (data?.entry.__typename !== "work_work_Entry") {
    return null;
  }

  const learnTitleFragments =
    translations["work_at_stellenwerk:learn:title"].split("–");

  if (type === "learn") {
    return (
      <>
        <PageIntro
          title={
            <strong>
              {learnTitleFragments[0]}
              {" –"}
              <br />
              {learnTitleFragments[1]}
            </strong>
          }
        />
        <Grid>
          <Row>
            <Col>
              <LearnText>
                <SanitizedHtml html={data?.entry.simpleRedactor} />
              </LearnText>
            </Col>
          </Row>
          <ContactRow>
            <Col xs={12} sm={6} md={4}>
              {data.entry.contactPersons[1]?.__typename ===
                "team_default_Entry" && (
                <PersonTeaser
                  person={data.entry.contactPersons[1]}
                  variant={"detailed"}
                />
              )}
            </Col>
          </ContactRow>
        </Grid>
      </>
    );
  }

  return (
    <>
      {type === "benefits" ? (
        <PageIntro
          title={
            <strong>
              {translations["work_at_stellenwerk:benefits:title"]}
            </strong>
          }
          description={translations["work_at_stellenwerk:benefits:description"]}
        />
      ) : (
        <PageIntro
          title={
            <strong>{translations["work_at_stellenwerk:jobs:title"]}</strong>
          }
          description={
            data.entry.topJobs.length
              ? translations["work_at_stellenwerk:jobs:description"]
              : null
          }
        />
      )}

      {data?.entry.benefits && type === "benefits" && (
        <BenefitsRow>
          <Col xs={12}>
            <BenefitsList data={data.entry.benefits} />
          </Col>
        </BenefitsRow>
      )}

      {data.entry.topJobs.length ? (
        <JobsGrid>
          <Row>
            <Col xs={12} lg={10} centered>
              {type === "benefits" && (
                <Typography variant="h3" color={colors.default.primaryColor}>
                  Offene Stellenwerk Vakanzen
                </Typography>
              )}
              <JobTeaserView
                title={null}
                jobs={data.entry.topJobs as IJobListItem[]}
              />
            </Col>
          </Row>
        </JobsGrid>
      ) : null}

      {type === "jobs" && (
        <ContentLayout>
          {data.entry.topJobs.length ? null : (
            <Grid>
              <Row>
                <Col xs={12} sm={10}>
                  <Typography variant="p" color={colors.default.primaryColor}>
                    Momentan ist unser Team komplett. Wir sind aber immer offen
                    für motivierte Menschen, welche Freude an der Kommunikation,
                    dem Verkauf von Dienstleistungen und am Kontakt mit
                    Kandidierenden und Kunden haben.
                  </Typography>
                  <Typography variant="p" color={colors.default.primaryColor}>
                    Melde dich für einen persönlichen Austausch gerne
                    telefonisch.
                  </Typography>
                </Col>
              </Row>
              <ContactRow>
                <Col xs={12} sm={6} md={4}>
                  {data.entry.contactPersons[0]?.__typename ===
                    "team_default_Entry" && (
                    <div>
                      <PersonTeaser
                        person={data.entry.contactPersons[0]}
                        variant={"detailed"}
                      />
                    </div>
                  )}
                </Col>
              </ContactRow>
            </Grid>
          )}
          <StyledCallToActionBanner
            title={translations["spontaneous_application_teaser_SW:title"]}
            description={
              translations["spontaneous_application_teaser_SW:description"]
            }
            actions={[
              <Link key="action1" href="mailto:info@stellenwerk.ch" passHref>
                <ButtonLink variant="default">
                  {translations["convince_us"]}
                </ButtonLink>
              </Link>,
            ]}
            image={{ src: "/static/images/cta-1.jpeg", alt: "CTA" }}
          />
        </ContentLayout>
      )}
    </>
  );
};

const BenefitsRow = styled(Row)`
  margin-bottom: ${spacing.giant};
  ${breakpointQuery.mdUp} {
    padding-bottom: ${spacing.giant};
  }
`;
const JobsGrid = styled(Grid)`
  margin-bottom: ${spacing.giant};
`;

const StyledCallToActionBanner = styled(CallToActionBanner)`
  margin-top: 100px;
  border-bottom: 1px solid white;

  ${breakpointQuery.xlUp} {
    border-bottom: none;
    margin-bottom: ${spacing.giant};
  }
`;

const LearnText = styled.section`
  color: ${colors.default.primaryColor};
  h3 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;

    margin-bottom: ${spacing.base};
    margin-top: ${spacing.giant};
  }
`;

const ContactRow = styled(Row)`
  margin-bottom: ${spacing.giant};
`;
