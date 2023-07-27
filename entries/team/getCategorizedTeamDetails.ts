import { GetTeamQuery } from "./team.generated";

export const getCategorizedTeamDetails = (entries: GetTeamQuery["entries"]) => {
  if (!entries?.length) {
    return null;
  }

  let categorization = {
    byLocation: {
      locations: [],
    },
    byCategory: {
      categories: [],
    },
  };

  entries.forEach((entry) => {
    if (entry.__typename !== "team_default_Entry") {
      return;
    }
    entry.employeeLocations.forEach((location) => {
      if (categorization.byLocation.locations.includes(location)) {
        categorization.byLocation[location].push(entry);
      } else {
        categorization.byLocation.locations.push(location);
        categorization.byLocation[location] = [entry];
      }
    });

    entry.contactCategories.forEach((categoryInfo) => {
      const category = categoryInfo.title;
      if (!category) {
        return;
      }
      if (categorization.byCategory.categories.includes(category)) {
        categorization.byCategory[category].push(entry);
      } else {
        categorization.byCategory.categories.push(category);
        categorization.byCategory[category] = [entry];
      }
    });
  });

  return categorization;
};
