import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";

interface IFilter {
  title: string;
  id: any;
  selected: boolean;
}

interface IListFiltersProps {
  filters: IFilter[];
  activeFilter: IFilter;
  setActiveFilter: Dispatch<SetStateAction<IFilter>>;
}

export const ListFilters: FunctionComponent<IListFiltersProps> = ({
  setActiveFilter,
  filters,
  activeFilter,
}) => {
  return (
    <FilterArea>
      {filters.map((filter) => (
        <ListFilter
          key={filter.id}
          isActive={activeFilter.id === filter.id}
          onClick={(event) => {
            setActiveFilter(filter);
            event.currentTarget.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          {filter.title}
        </ListFilter>
      ))}
    </FilterArea>
  );
};

const FilterArea = styled.ul`
  display: flex;
  list-style: none;
  margin: ${spacing.base} 0 ${spacing.giant};

  ${breakpointQuery.smDown} {
    margin-bottom: ${spacing.big};
    padding: 4px 0 ${spacing.base};
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ListFilter = styled.li<{ isActive?: boolean }>`
  display: inline;
  cursor: pointer;
  font-size: 24px;
  font-weight: ${({ isActive }) => (isActive ? 600 : 300)};
  color: ${colors.default.primaryColor};
  &:hover {
    color: ${colors.default.primaryColorLighten8};
  }

  &:not(:last-of-type) {
    margin-right: ${spacing.big};
  }

  ${breakpointQuery.smDown} {
    border: 1px solid ${colors.default.primaryColor};
    border-radius: 4px;
    padding: 2px 12px;
    font-size: 18px;
    border-width: ${({ isActive }) => (isActive ? "2px" : "1px")};
    background-color: ${({ isActive }) =>
      isActive ? colors.default.primaryColorLighten96 : "transparent"};

    &:not(:last-of-type) {
      margin-right: ${spacing.smallerBaseVertical};
    }
  }

  &::before {
    content: "";
  }
`;
