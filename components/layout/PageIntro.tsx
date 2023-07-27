import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Col, Grid, Row } from "./Grid";

interface IPageIntroProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  className?: string;
  inverted?: boolean;
}

export const PageIntro: FunctionComponent<IPageIntroProps> = ({
  title,
  description,
  className,
  inverted = false,
}) => {
  return (
    <Grid className={className}>
      <Row>
        <Col xs={0} sm={1} />
        <Col xs={12} md={7} xl={5}>
          <Title inverted={inverted}>{title}</Title>
        </Col>
      </Row>
      <Row>
        <Border inverted={inverted} xs={12} md={8} xl={6} />
      </Row>
      {description && (
        <Row>
          <Col xs={0} sm={1} />
          <Col xs={12} md={7} xl={5}>
            <Description inverted={inverted}>{description}</Description>
          </Col>
        </Row>
      )}
    </Grid>
  );
};
const Title = styled.h1<{ inverted: boolean }>`
  width: 100%;
  font-size: 40px;
  line-height: 50px;
  margin: ${spacing.giant} 0 0;
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};

  ${breakpointQuery.smDown} {
    margin: 0;
    word-break: break-word;
    font-size: 24px;
    line-height: 34px;
  }
`;

const Description = styled.p<{ inverted: boolean }>`
  font-size: 24px;
  line-height: 34px;
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};
  margin-bottom: ${spacing.grande};
`;

const Border = styled(Col)<{ inverted: boolean }>`
  border-bottom: 1px solid
    ${({ inverted }) =>
      inverted ? colors.default.white : colors.default.primaryColor};
  margin: ${spacing.big} 0;

  ${breakpointQuery.smDown} {
    border: none;
    margin: ${spacing.base} 0;
  }
`;
