import { Col, Row } from "components/layout/Grid";
import { ServicesDefaultEntry } from "lib/graphql/types/generated";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface IServiceProceduresProps {
  serviceProcedures: ServicesDefaultEntry["serviceProcedures"];
}

export const ServiceProcedures: FunctionComponent<IServiceProceduresProps> = ({
  serviceProcedures,
}) => {
  const translations = useTranslations(["procedure_with_stellenwerk"]);
  const titleTranslationFragments =
    translations["procedure_with_stellenwerk"].split(" ");
  if (!serviceProcedures.length) {
    return null;
  }
  return (
    <Section>
      <Row>
        <Col sm={12} md={10} centered>
          <Row>
            <Col xs={0} sm={1} />
            <Col sm={10}>
              <Title>
                {titleTranslationFragments[0]} {titleTranslationFragments[1]}
                <br />
                Stellenwerk
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <ProceduresCol sm={12} md={10} centered>
          {serviceProcedures.map((procedure, index) => {
            return (
              <ListItem key={`${procedure.title}-${index}`}>
                <ListItemRow>
                  <Col sm={1}>
                    <Number>{index + 1}</Number>
                  </Col>
                  <Col sm={4}>
                    <h3>{procedure.procedureTitle}</h3>
                  </Col>
                  <Col sm={5}>
                    <h4>{procedure.subtitle}</h4>
                    <p>{procedure.description}</p>
                  </Col>
                </ListItemRow>
              </ListItem>
            );
          })}
        </ProceduresCol>
      </Row>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 200px;

  ${breakpointQuery.smDown} {
    margin-bottom: ${spacing.giant};
  }
`;

const Title = styled.h2`
  margin-bottom: ${spacing.big};
  color: ${colors.default.primaryColor};
  font-size: 40px;
  line-height: 50px;
  font-weight: 400;
`;

const ProceduresCol = styled(Col)`
  border-top: 1px solid ${colors.default.primaryColor};
`;

const ListItemRow = styled(Row)`
  align-items: center;
`;

const Number = styled.div`
  font-size: 40px;
  line-height: 50px;
  font-weight: 600;
`;

const ListItem = styled.div`
  padding: ${spacing.big} 0;
  color: ${colors.default.primaryColor};
  border-bottom: 1px solid ${colors.default.primaryColor};

  h3 {
    font-size: 40px;
    line-height: 50px;
    font-weight: 600;
    margin: 0;

    ${breakpointQuery.smUp} {
      word-spacing: 2000px;
    }
  }

  h4 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    margin: 0 0 ${spacing.smallerBaseVertical};
  }

  p {
    margin: 0;
  }
`;
