import { useTranslations } from "lib/i18n/translations";

export const useNavigationItems = () => {
  const translations = useTranslations([
    "job_search",
    "services",
    "services_for_employers:nav",
    "contact_persons",
    "references",
    "our_partners",
  ]);
  return [
    {
      link: "/jobs",
      title: translations["job_search"],
      items: [],
    },
    {
      link: "/services",
      title: translations["services"],
      items: [
        {
          title: translations["services_for_employers:nav"], // "Leistungen für Arbeitgebende"
          link: "/services",
        },
        {
          title: translations["contact_persons"], // "Ansprechpersonen"
          link: "/services#contact",
        },
      ],
    },
    {
      link: "/team",
      title: "Stellenwerk",
      items: [
        {
          title: "Team",
          link: "/team",
        },
        {
          title: "Blog",
          link: "/blog",
        },
        {
          title: translations["references"], // "Referenzen"
          link: "/references",
        },
        {
          title: translations["our_partners"], // "Unsere Partner"
          link: "/partner",
        },
        {
          title: "work@stellenwerk",
          link: "/stellenwerk/jobs",
        },
      ],
    },
  ];
};
