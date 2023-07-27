import { useRouter } from "next/router";
import { ErrorType } from "../types";

interface ITranslations {
  [Key: string]: ITranslation;
}

interface ITranslation {
  ["de"]: string;
  ["en"]: string;
}

export const Translations: ITranslations = {
  [ErrorType.PreselectionFailed]: {
    de: "Wir können Sie für diese Stelle leider nicht berücksichtigen. Vielleicht haben wir jedoch eine andere passende Stelle für Sie.",
    en: "Unfortunately you do not meet the basic requirements for this position. But maybe we have another suitable position for you.",
  },
  [ErrorType.MissingJobOfferId]: {
    de: "Wir konnten das Bewerbungsformular leider nicht ausfindig machen. Vielleicht haben wir jedoch eine andere passende Stelle für Sie.",
    en: "Unfortunately we could not find the desired application form.",
  },
  [ErrorType.MissingFormConfiguration]: {
    de: "Leider ist der Bewerbungsprozess für diese Stelle nicht konfiguriert.",
    en: "Unfortunately the application process for this position is not yet configured.",
  },
  SOMETHING_WENT_WRONG: {
    de: "Etwas ist schief gelaufen.",
    en: `Something wen't wrong.`,
  },
  WE_ARE_SORRY: {
    de: "Es tut uns leid",
    en: "We are sorry",
  },
  FIND_ANOTHER_JOB: {
    de: "Zum Stellenangebot",
    en: "Find another Job",
  },
  TO_START_PAGE: {
    de: "Zur Startseite",
    en: "To the start page",
  },
  APPLY_BY_MAIL_DESCRIPTION: {
    de: "Wir nehmen Ihre vollständigen Bewerbungsunterlagen gerne per E-Mail entgegen. Bitte legen Sie ihre vollständigen Bewerbungsunterlagen bei: Lebenslauf (CV), Diplome/Zertifikate, Arbeitszeugnisse.",
    en: "We will gladly receive your complete application documents by e-mail. Please enclose your complete application documents: Curriculum vitae, diplomas/certificates, job references.",
  },
  APPLY_BY_MAIL: {
    de: "Per E-Mail bewerben",
    en: "Apply by mail",
  },
  SUCCESS_TITLE: {
    de: "Vielen Dank für Ihre Bewerbung",
    en: "Many thanks for your application",
  },
  SUCCESS_DESCRIPTION: {
    de: "Wir werden Ihre Unterlagen prüfen und uns so bald wie möglich bei Ihnen melden.",
    en: "We will check your documents and contact you as soon as possible.",
  },
  CONTACT_US: {
    de: "Gerne stehen wir Ihnen auch während unseren Öffnungszeiten telefonisch zur Verfügung. Die Kontaktdaten finden Sie weiter unten.",
    en: "We are also available by telephone during our opening hours. The contact details can be found below.",
  },
  APPLY_NOW: {
    de: "Jetzt bewerben",
    en: "Apply now",
  },
};

export const getTranslation = (key: string, locale: string) => {
  return Translations[key][locale as "de" | "en"] ?? null;
};
