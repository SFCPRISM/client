import { Col, Grid, Row } from "components/layout/Grid";
import { colors } from "lib/theme/design-tokens/colors";
import { Fragment, FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGetTeamMemberBySlugQuery } from "./team.generated";
import { spacing } from "lib/theme/design-tokens/spacing";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { Accordion } from "components/ui/accordion/Accordion";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { getPhoneByLocation, useLocationTranslations } from "./helpers";
import Head from "next/head";
import { useFooterQuery } from "components/footer/footer.generated";
import { Typography } from "components/typography/Typography";

interface IPersonTeaserProps {
  slug: string;
}

export const PersonDetail: FunctionComponent<IPersonTeaserProps> = ({
  slug,
}) => {
  const localizationId = useLocalizationId();
  const locationTranslations = useLocationTranslations();
  const translations = useTranslations([
    "career_path",
    "professional_experience",
    "education",
    "close_in_love_with_solutions_and_authentic",
  ]);
  const { data } = useGetTeamMemberBySlugQuery(
    { slug: [slug], localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const { data: globalDataSet } = useFooterQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (data?.entry?.__typename !== "team_default_Entry") {
    return null;
  }

  const {
    employeeFirstName,
    employeeSurname,
    employeeFunction,
    employeeImage,
    employeeEmail,
    contactCategories,
    employeeLocations,
    employeeBackground,
    employeeWorkExperiences,
    employeeEducations,
  } = data.entry;

  return (
    <>
      <Head>
        <title>
          Stellenwerk Team - {employeeFirstName} {employeeSurname}
        </title>
        <meta
          name="description"
          content={`${translations["close_in_love_with_solutions_and_authentic"]}.`}
        />
      </Head>
      <Header>
        <LightBlue />
        <Blue />
        <Intro>
          <ImageArea>
            <Image
              src={employeeImage[0].url}
              layout="fill"
              objectFit="cover"
              alt={`Portrait ${employeeFirstName} ${employeeSurname}`}
            />
          </ImageArea>
          <TextArea>
            <Typography variant="h1">
              {employeeFirstName} {employeeSurname}
            </Typography>
            <p>{employeeFunction}</p>
            {contactCategories.length ? (
              <ul>
                {contactCategories.map((category) => (
                  <li key={category.title}>{category.title}</li>
                ))}
              </ul>
            ) : null}
            <p>
              <a href={`mailto:${employeeEmail}`}>{employeeEmail}</a>
              <br />
              <br />
              {employeeLocations.length
                ? employeeLocations.map((location) => {
                    const phoneNumber = getPhoneByLocation(
                      locationTranslations[location],
                      globalDataSet?.globalSet
                    );
                    return (
                      <Fragment key={location}>
                        {locationTranslations[location]}:{" "}
                        {globalDataSet && phoneNumber && (
                          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        )}
                        <br />
                      </Fragment>
                    );
                  })
                : null}
            </p>
          </TextArea>
        </Intro>
      </Header>
      <StyledGrid>
        <Row>
          <StyledCol md={8} centered>
            {employeeBackground && <Title>{translations["career_path"]}</Title>}
            <Background>{employeeBackground}</Background>
            {employeeWorkExperiences.length ? (
              <StyledAccordeon
                title={<Title>{translations["professional_experience"]}</Title>}
              >
                {employeeWorkExperiences.map((exp, index) => (
                  <TimeLineItem key={`exp-${index}`}>
                    <p>
                      <small>{exp.year}</small>
                      <br />
                      <strong>{exp.experienceTitle}</strong>
                      <br />
                      {exp.description}
                    </p>
                  </TimeLineItem>
                ))}
              </StyledAccordeon>
            ) : null}
            {employeeEducations.length ? (
              <StyledAccordeon
                title={<Title>{translations["education"]}</Title>}
              >
                {employeeEducations.map((edu, index) => (
                  <TimeLineItem key={`edu-${index}`}>
                    <p>
                      <small>{edu.year}</small>
                      <br />
                      <strong>{edu.educationTitle}</strong>
                      <br />
                      {edu.description}
                    </p>
                  </TimeLineItem>
                ))}
              </StyledAccordeon>
            ) : null}
          </StyledCol>
        </Row>
      </StyledGrid>
    </>
  );
};

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 720px;
`;

const Blue = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 50%;
  background-color: ${colors.default.primaryColor};

  ${breakpointQuery.smDown} {
    height: 185px;
    display: none;
  }
`;

const LightBlue = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.default.lightBackgroundColor};
  ${breakpointQuery.smDown} {
    display: none;
  }
`;

const Intro = styled.div`
  display: flex;
  width: 100%;
  max-width: 1642px;
  margin: 0 auto;

  ${breakpointQuery.smDown} {
    flex-direction: column;
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: 45%;
  min-height: 500px;

  ${breakpointQuery.smDown} {
    width: 100%;
    min-height: 320px;
  }
`;

const TextArea = styled.div`
  padding: ${spacing.giant};
  color: ${colors.default.primaryColor};
  background-color: ${colors.default.white};
  width: 55%;

  h1 {
    font-weight: 600;
    margin-bottom: ${spacing.base};
  }

  ${breakpointQuery.smDown} {
    width: calc(100% - 48px);
    margin: 0 auto ${spacing.huge};
    padding: ${spacing.medium} 0;

    ul {
      padding-left: ${spacing.big};
    }
  }
`;

const StyledGrid = styled(Grid)`
  margin-bottom: ${spacing.giant};
`;

const StyledCol = styled(Col)`
  margin-top: 132px;
  div &:last-child {
    margin-bottom: ${spacing.giant};
  }

  ${breakpointQuery.smDown} {
    margin-top: ${spacing.base};
  }
`;

const Title = styled.h2`
  color: ${colors.default.primaryColor};
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;

  ${breakpointQuery.smDown} {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
  }

  margin-bottom: ${spacing.medium};
`;

const StyledAccordeon = styled(Accordion)`
  margin-bottom: ${spacing.huge};
  border-bottom: 1px solid ${colors.default.primaryColor};
  padding-right: ${spacing.medium};
`;

const Background = styled.p`
  color: ${colors.default.primaryColor};
  margin-bottom: 120px;
`;

const TimeLineItem = styled.div`
  color: ${colors.default.primaryColor};
  margin-bottom: ${spacing.base};
  border-bottom: 1px solid ${colors.default.primaryColor};

  &:last-of-type {
    border-bottom: none;
  }
`;
