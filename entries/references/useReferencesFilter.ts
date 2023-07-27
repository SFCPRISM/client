// import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { useTranslations } from "lib/i18n/translations";
import { useState } from "react";

export const useReferencesFilter = () => {
  const translations = useTranslations(["all", "employers", "candidates"]);
  const defaultFilter = {
    title: translations["all"],
    id: null,
    selected: true,
  };
  const personFilter = {
    title: translations["employers"],
    id: "references_company_Entry",
    selected: false,
  };
  const companyFilter = {
    title: translations["candidates"],
    id: "references_person_Entry",
    selected: false,
  };
  const filters = [defaultFilter, personFilter, companyFilter];
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  return { filters, activeFilter, setActiveFilter };
};
