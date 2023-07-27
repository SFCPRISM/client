import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { FilterSelect } from "./FilterSelect";
import { Tag, TagContainer } from "components/ui/tag/Tag";
import { Typography } from "components/typography/Typography";
import { FunctionComponent } from "react";
import { useJobFilters } from "./useJobFilters";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";

interface JobFiltersProps extends ReturnType<typeof useJobFilters> {
  className?: string;
  callback?: () => void;
}

export const JobFilters: FunctionComponent<JobFiltersProps> = ({
  filters,
  filterState: { area, employment, location },
  filter,
  className,
  callback,
}) => {
  const translations = useTranslations([
    "functional_area",
    "type_of_employment",
    "location_of_employment",
  ]);

  return (
    <div className={className}>
      <FilterHeader>
        <Typography variant="h2" color={colors.default.primaryColor}>
          Filter
        </Typography>
        {area || employment || location ? (
          <FilterReset onClick={() => filter({ type: "reset" })}>
            Zurücksetzen
          </FilterReset>
        ) : callback ? (
          <FilterReset onClick={callback}>✖ Schliessen</FilterReset>
        ) : null}
      </FilterHeader>
      <div>
        <StyledFilterSelect
          title={translations["functional_area"]}
          options={filters.areas}
          selected={area}
          setSelected={(payload: string | null) =>
            filter({ type: "area", payload })
          }
        />
        {area && (
          <TagArea>
            <Tag
              title={area}
              action={{
                handler: () => filter({ type: "area", payload: null }),
                icon: <>✖</>,
              }}
            ></Tag>
          </TagArea>
        )}
        <StyledFilterSelect
          title={translations["type_of_employment"]}
          options={filters.employments}
          selected={employment}
          setSelected={(payload: string | null) =>
            filter({ type: "employment", payload })
          }
        />
        {employment && (
          <TagArea>
            <Tag
              title={employment}
              action={{
                handler: () => filter({ type: "employment", payload: null }),
                icon: <>✖</>,
              }}
            ></Tag>
          </TagArea>
        )}
        <StyledFilterSelect
          title={translations["location_of_employment"]}
          options={filters.locations}
          selected={location}
          setSelected={(payload: string | null) =>
            filter({ type: "location", payload })
          }
        />
        {location && (
          <TagArea>
            <Tag
              title={location}
              action={{
                handler: () => filter({ type: "location", payload: null }),
                icon: <>✖</>,
              }}
            ></Tag>
          </TagArea>
        )}
      </div>
    </div>
  );
};

const StyledFilterSelect = styled(FilterSelect)`
  &:first-of-type {
    margin-top: ${spacing.medium};
  }

  margin-bottom: ${spacing.medium};
  ${breakpointQuery.mdDown} {
    margin-bottom: ${spacing.medium};
  }
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const FilterReset = styled.button`
  background: none;
  border: none;
  color: ${colors.default.primaryColor};
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TagArea = styled.div`
  display: flex;
  width: 100%;
  & ${TagContainer}:not(last-of-type) {
    margin-right: ${spacing.small};
  }
  margin-bottom: ${spacing.medium};
  margin-top: ${spacing.medium};

  ${breakpointQuery.mdDown} {
    & ${TagContainer}:not(last-of-type) {
      margin-bottom: ${spacing.base};
    }
  }

  ${breakpointQuery.mdDown} {
    flex-wrap: wrap;
  }

  ${breakpointQuery.lgUp} {
    margin-top: 0;
  }
`;
