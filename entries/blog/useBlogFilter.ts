import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { useState } from "react";
import { useGetBlogCategoriesQuery } from "./blog.generated";

export const useBlogFilter = () => {
  const translations = useTranslations(["all"]);
  const defaultFilter = {
    title: translations["all"],
    id: null,
    selected: true,
  };
  const filters = [defaultFilter];
  const localizationId = useLocalizationId();
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  const { data } = useGetBlogCategoriesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (!data?.categories.length) {
    return { filters, activeFilter, setActiveFilter };
  }

  const categories = [...data.categories];
  categories.forEach((category) => {
    filters.push({ title: category.title, id: category.id, selected: false });
  });

  return { filters, activeFilter, setActiveFilter };
};
