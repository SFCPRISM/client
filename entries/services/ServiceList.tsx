import { Col, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { GetServicesQuery } from "./services.generated";

interface IServiceListProps {
  data: GetServicesQuery;
  isFetching: boolean;
  variant?: "default" | "relational";
  relationSlug?: string;
}

export const ServiceList: FunctionComponent<IServiceListProps> = ({
  data,
  isFetching,
  variant = "default",
  relationSlug,
}) => {
  const translations = useTranslations([
    "our_services_for_employers",
    "more_services_for_employers",
  ]);
  const isRelationalVariant = variant === "relational";

  return (
    <ListArea>
      <List>
        <StyledServiceListRow>
          {isRelationalVariant && (
            <Col xs={12} sm={6} md={4}>
              <StyledTypography
                variant="h1"
                component="h2"
                color={colors.default.primaryColor}
              >
                {translations["more_services_for_employers"]}
              </StyledTypography>
            </Col>
          )}
          {isFetching
            ? Array.from(Array(9).keys()).map((key) => (
                <SkeletonItem key={key} />
              ))
            : data?.entries?.map((entry) => {
                if (entry.slug === relationSlug) {
                  return null;
                }

                return (
                  <Col key={entry.slug} xs={12} sm={6} md={4}>
                    <Link href={`/services/${entry.slug}`}>
                      <a>
                        <ListItem>
                          {entry.title}
                          <hr />
                        </ListItem>
                      </a>
                    </Link>
                  </Col>
                );
              })}
        </StyledServiceListRow>
      </List>
      {!isRelationalVariant && (
        <Typography variant="h1" color={colors.default.primaryColor}>
          {translations["our_services_for_employers"]}
        </Typography>
      )}
    </ListArea>
  );
};

const SkeletonItem = () => (
  <Col xs={12} sm={6} md={4}>
    <a>
      <ListItem>
        <br />
        <hr />
      </ListItem>
    </a>
  </Col>
);

const StyledTypography = styled(Typography)`
  margin: 0;
`;

const ListIcon = styled.div`
  width: 15px;
  height: 30px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  border: 1px solid white;
  opacity: 1;
`;

const ListArea = styled.div`
  display: flex;
  flex-direction: column-reverse;

  h1 {
    margin-top: ${spacing.grande};
    color: ${colors.default.primaryColor};
    font-weight: 600;
    font-size: 40px;
  }

  ${breakpointQuery.mdUp} {
    flex-direction: column;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledServiceListRow = styled(Row)`
  grid-gap: ${spacing.big} ${spacing.massive};

  ${breakpointQuery.smDown} {
    grid-gap: ${spacing.medium} ${spacing.medium};
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  & hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid;
  }

  &:hover {
    background-color: ${colors.default.white};
    color: ${colors.default.primaryColor};
  }

  cursor: pointer;
  padding: ${spacing.big} ${spacing.huge};
  background-color: ${colors.default.primaryColor};
  color: ${colors.default.white};
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.17px;
  font-weight: 600;

  ${breakpointQuery.smDown} {
    font-size: 20px;
    line-height: 28px;
    padding: ${spacing.base} ${spacing.medium};
  }
`;
