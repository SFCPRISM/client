/* eslint-disable @next/next/no-img-element */
import { Col, Grid, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { IconArrowRight } from "icons/general/generalIcons";
import { WorkWorkEntry } from "lib/graphql/types/generated";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

export const BenefitsList: FunctionComponent<{
  data: WorkWorkEntry["benefits"];
}> = ({ data }) => {
  return (
    <StyledGrid>
      <Row>
        {data.map((benefit, index) => (
          <Col xs={12} md={6} key={index}>
            <BenefitCard>
              <Typography variant="h2" color={colors.default.primaryColor}>
                {benefit.benefitTitle}
              </Typography>
              <List>
                {benefit.items.map((item, index) => {
                  const link = item.benefit.match(/\[(.*?)\]\((.+?)\)/);
                  const icon = benefit.icons[index]?.url ? (
                    <BenefitIconContainer>
                      <img
                        width={32}
                        height={32}
                        src={benefit.icons[index].url}
                        alt={benefit.icons[index].title}
                      />
                    </BenefitIconContainer>
                  ) : null;
                  return (
                    <li key={index}>
                      {link ? (
                        <Link href={link[2]}>
                          <a
                            target="_blank"
                            style={{
                              color: "#465fff",
                            }}
                          >
                            <p>
                              {icon}
                              {item.benefit.replace(link[0], link[1])}{" "}
                              <LinkIconContainer>
                                <IconArrowRight width={20} height={12} />
                              </LinkIconContainer>
                            </p>
                          </a>
                        </Link>
                      ) : (
                        <p>
                          {icon}
                          {item.benefit}
                        </p>
                      )}
                    </li>
                  );
                })}
              </List>
            </BenefitCard>
          </Col>
        ))}
      </Row>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  ${breakpointQuery.smDown} {
    background-color: ${colors.default.primaryColorLighten96};
  }
`;

const List = styled.ul`
  list-style: none;
  & li {
    ::before {
      content: "";
    }
    color: ${colors.default.primaryColor};
  }
`;

const BenefitCard = styled.div`
  background-color: ${colors.default.primaryColorLighten96};
  border-radius: 8px;
  height: 100%;
  ${breakpointQuery.smDown} {
    padding: 16px 24px 8px;
  }
  padding: 48px 64px 24px;
  h2 {
    margin-bottom: 32px;
  }
`;

const LinkIconContainer = styled.span`
  margin-left: ${spacing.smallerBaseVertical};
  line,
  path {
    stroke-width: 3;
    stroke: #465fff;
  }
`;

const BenefitIconContainer = styled.span`
  display: inline-block;
  height: 32px;
  width: 32px;
  margin-right: ${spacing.smallerBaseVertical};
  margin-left: -44px;
  vertical-align: top;
`;
