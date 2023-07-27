import { GetJobPostingQuery } from "./jobPosting.generated";

export const getJsonLD = (entry: GetJobPostingQuery["entry"]) => {
  if (entry?.__typename !== "jobs_default_Entry") {
    return null;
  }
  return {
    "@type": "JobPosting",
    description: entry.jobPostingDescription,
    datePosted: entry.postDate,
    employmentType:
      entry.jobPostingEmployment[0] === "Temporär" ? "PART_TIME" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Stellenwerk AG",
      alternateName: "Nahe dran. Lösungsverliebt. Authentisch.",
      description:
        "Der Name Stellenwerk steht seit mehr als 15 Jahren für massgeschneiderte Lösungen in der Personaldienstleitung. An unseren Standorten in Zürich und Chur werden Sie von 15 qualifizierten Beratern betreut. Wir rekrutieren und verleihen qualifizierte Fach- und Führungskräfte auf Mandats- und Erfolgsbasis für die gesamte Deutschschweiz. Zusätzlich bieten wir als Outsourcing-Partner (BPO) weitere HR-Dienstleistungen wie z.B. Outplacement, Direktansprachen und Saläradministration an.",
      url: "https://www.stellenwerk.ch",
      sameAs: [
        "https://www.facebook.com/Stellenwerk",
        "https://www.linkedin.com/company/stellenwerk-ag",
      ],
      telephone: "+41 44 365 77 44 ",
      email: "info@stellenwerk.ch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Stampfenbachstrasse 48",
        addressLocality: "Zürich",
        postalCode: "8006",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.stellenwerk.ch/static/images/stellenwerk.png",
        width: "553",
        height: "138",
      },
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: entry.jobPostingLocation[0].title,
      },
    },
    title: entry.title,
  };
};
