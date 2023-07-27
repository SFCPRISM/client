import { useTranslations } from "lib/i18n/translations";
import { useState } from "react";
import { useLocationTranslations } from "./helpers";

export const useBlogFilter = () => {
  const translations = useTranslations(["all"]);
  const locationTranslations = useLocationTranslations();
  const defaultFilter = {
    title: translations["all"],
    id: null,
    selected: true,
  };
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  const filters = [defaultFilter];
  ["zurich", "schaan", "chur"].forEach((location) =>
    filters.push({
      title: locationTranslations[location],
      id: location,
      selected: false,
    })
  );

  return { filters, activeFilter, setActiveFilter };
};
