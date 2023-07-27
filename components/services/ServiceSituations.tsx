import { Col, Row } from "components/layout/Grid";
import { ServicesDefaultEntry } from "lib/graphql/types/generated";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface IServiceSituationsProps {
  serviceSituations: ServicesDefaultEntry["serviceSituations"];
}

export const ServiceSituations: FunctionComponent<IServiceSituationsProps> = ({
  serviceSituations,
}) => {
  const translations = useTranslations(["your_situation"]);
  if (!serviceSituations.length) {
    return null;
  }

  return (
    <Section>
      <SituationsIntro>
        <h2>{translations["your_situation"]}</h2>
      </SituationsIntro>
      <SituationConnections>
        <Col centered md={8}>
          <StyledLineRow>
            <LineConnectorLeft md={6} />
            <LineConnectorRight md={6} />
          </StyledLineRow>
        </Col>
      </SituationConnections>
      <Row>
        {serviceSituations.map((situation, index) => {
          return (
            <SituationCol key={`${situation.situationTitle}-${index}`} md={4}>
              <Situation>
                <h4>{situation.situationTitle}</h4>
                <p>{situation.description}</p>
              </Situation>
            </SituationCol>
          );
        })}
      </Row>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: ${spacing.giant};

  ${breakpointQuery.mdUp} {
    margin-bottom: 200px;
  }
`;

const SituationsIntro = styled.div`
  margin-bottom: ${spacing.huge};
  width: 100%;
  text-align: center;
  color: ${colors.default.primaryColor};
`;

const SituationConnections = styled(Row)`
  ${breakpointQuery.smDown} {
    display: none;
  }
`;

const StyledLineRow = styled(Row)`
  grid-gap: 0 0;
`;

const LineConnectorLeft = styled(Col)`
  border-top: 1px solid ${colors.default.primaryColor};
  border-left: 1px solid ${colors.default.primaryColor};
  border-right: 1px solid ${colors.default.primaryColor};
  height: 60px;
`;
const LineConnectorRight = styled(Col)`
  border-top: 1px solid ${colors.default.primaryColor};
  border-right: 1px solid ${colors.default.primaryColor};
`;

const SituationCol = styled(Col)`
  ${breakpointQuery.smDown} {
    margin-bottom: ${spacing.base};
  }
`;

const Situation = styled.div`
  border: 1px solid ${colors.default.primaryColor};
  height: 100%;
  margin: 0 ${spacing.base};
  padding: ${spacing.big};
  color: ${colors.default.primaryColor};

  h4 {
    margin: 0 0 ${spacing.base};
    font-size: 24px;
    line-height: 34px;
  }

  p {
    margin: 0;
  }
`;
