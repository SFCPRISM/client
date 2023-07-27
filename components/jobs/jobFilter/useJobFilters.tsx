import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { useReducer } from "react";
import { useGetJobPostingTagsQuery } from "./tagFiltering.generated";

interface IFilterState {
  area: string | null;
  employment: string | null;
  location: string | null;
}

interface IFilterAction {
  type: "area" | "employment" | "location" | "reset";
  payload?: string | null;
}

export const useJobFilters = () => {
  const localizationId = useLocalizationId();
  const filters = useJobFilterData();
  const initialState: IFilterState = {
    area: null,
    employment: null,
    location: localizationId > 2 ? "Liechtenstein" : null,
  };

  const [state, dispatch] = useReducer(
    (state: IFilterState, action: IFilterAction) => {
      const change = action.payload || null;
      switch (action.type) {
        case "area": {
          return { ...state, area: change };
        }
        case "employment": {
          return { ...state, employment: change };
        }
        case "location": {
          return { ...state, location: change };
        }
        case "reset": {
          return initialState;
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
    },
    initialState
  );

  return { filters, filterState: state, filter: dispatch };
};

const useJobFilterData = () => {
  const localizationId = useLocalizationId();
  const { data } = useGetJobPostingTagsQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const filters = {
    areas: [],
    employments: [],
    locations: [],
  };

  if (!data) {
    return filters;
  }

  const { areas, employments, locations } = data;

  filters.areas = areas.map((area) => area.title);
  filters.employments = employments.map((employment) => employment.title);
  filters.locations = locations.map((location) => location.title);

  return filters;
};
