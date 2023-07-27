import { Col, IColProps, Row } from "components/layout/Grid";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { FunctionComponent } from "react";
import { PersonTeaser } from "../../components/teaser/PersonTeaser";
import { GetTeamQuery, useGetTeamQuery } from "./team.generated";
import { TeamSkeleton } from "../home/Team.teaser";
import styled from "styled-components";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { spacing } from "lib/theme/design-tokens/spacing";
import { ListFilters } from "components/filter/ListFilter";
import { useBlogFilter } from "./useTeamFilter";

interface ITeamListProps {
  limit?: number;
  className?: string;
  variant?: "detailed" | "poster";
  withFilter?: boolean;
}

export const TeamList: FunctionComponent<ITeamListProps> = ({
  className,
  limit,
  variant = "detailed",
  withFilter = false,
}) => {
  const localizationId = useLocalizationId();
  const { data } = useGetTeamQuery(
    { localizationId: [localizationId], limit: limit || null },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const { filters, activeFilter, setActiveFilter } = useBlogFilter();

  // TODO: Make me more beautyful
  if (!data?.entries?.length) {
    return <TeamSkeleton />;
  }

  return (
    <>
      {withFilter && (
        <FilterRow>
          <Col xs={0} sm={1} />
          <Col xs={12} md={7} xl={5}>
            <ListFilters
              filters={filters}
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
            />
          </Col>
        </FilterRow>
      )}
      <Row>
        <TeamListView
          entries={data.entries.filter((entry) => {
            if (!withFilter || activeFilter.id === null) {
              return true;
            }

            return entry.__typename === "team_default_Entry"
              ? entry.employeeLocations.includes(activeFilter.id)
              : false;
          })}
          variant={variant}
          className={className}
        />
      </Row>
    </>
  );
};

const FilterRow = styled(Row)`
  grid-gap: 0 0;
`;

interface ITeamListViewProps {
  entries: GetTeamQuery["entries"];
  variant?: ITeamListProps["variant"];
  options?: {
    colProps: IColProps;
  };
  className?: string;
}

export const TeamListView: FunctionComponent<ITeamListViewProps> = ({
  entries,
  variant,
  options = { colProps: {} },
  className,
}) => (
  <>
    {entries.map((entry) => {
      if (entry.__typename !== "team_default_Entry") {
        return null;
      }

      switch (variant) {
        case "poster": {
          return (
            <Col
              key={entry.slug}
              {...{ xs: 12, md: 6, lg: 4, ...options?.colProps }}
              className={className}
            >
              <PersonTeaser person={entry} variant={variant} />
            </Col>
          );
        }
        case "detailed":
        default: {
          return (
            <Col
              key={entry.slug}
              {...{ xs: 12, md: 6, lg: 4, xl: 3, ...options?.colProps }}
              className={className}
            >
              <StyledPersonTeaser person={entry} variant={variant} />
            </Col>
          );
        }
      }
    })}
  </>
);

const StyledPersonTeaser = styled(PersonTeaser)`
  padding-bottom: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    padding-bottom: ${spacing.huge};
  }
`;
