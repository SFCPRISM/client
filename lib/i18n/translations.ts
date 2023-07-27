import { useLocalizationContext } from "./localizationContext";

export type Translations = { [Key: string]: ITranslationEntry };

interface ITranslationEntry {
  "en-ch": string;
  "de-li": string;
  "en-li": string;
  "de-ch": string;
}

export const useTranslations = (keys: string[]) => {
  const { locale } = useLocalizationContext();
  let translated = {};

  keys.forEach((key) => {
    translated = {
      ...translated,
      [key]: translations[key]?.[locale] ?? null,
    };
  });

  return translated;
};

export const translations: Translations = {
  job_search: {
    "de-ch": "Stellensuche",
    "de-li": "Stellensuche",
    "en-li": "Jobs",
    "en-ch": "Jobs",
  },
  services: {
    "de-ch": "Leistungen",
    "de-li": "Leistungen",
    "en-li": "Services",
    "en-ch": "Services",
  },
  "services_for_employers:nav": {
    "de-ch": "Leistungen für Arbeitgebende",
    "de-li": "Leistungen für Arbeitgebende",
    "en-li": "Services for employers",
    "en-ch": "Services for employers",
  },
  contact_persons: {
    "de-ch": "Ansprechpersonen",
    "de-li": "Ansprechpersonen",
    "en-li": "Contact persons",
    "en-ch": "Contact persons",
  },
  references: {
    "de-ch": "Referenzen",
    "de-li": "Referenzen",
    "en-li": "References",
    "en-ch": "References",
  },
  our_partners: {
    "de-ch": "Partner",
    "de-li": "Partner",
    "en-li": "Partners",
    "en-ch": "Partners",
  },
  "slogan:p1": {
    "de-ch": "Ihr beruflicher",
    "de-li": "Weichensteller",
    "en-li": "Paving the way",
    "en-ch": "Your career",
  },
  "slogan:p2": {
    "de-ch": "Weichensteller",
    "de-li": "für Fach- und Führungskräfte",
    "en-li": "for specialists and managers",
    "en-ch": "Pathfinder",
  },
  search_jobs: {
    "de-ch": "Stelle suchen",
    "de-li": "Stelle suchen",
    "en-li": "Search jobs",
    "en-ch": "Search jobs",
  },
  "job_count_teaser:p1": {
    "de-ch": "Über [0] Stellenangebote ",
    "de-li": "Über [0] Stellenangebote ",
    "en-li": "Over [0] vacancies ",
    "en-ch": "Over [0] vacancies ",
  },
  "job_count_teaser:p2": {
    "de-ch": "in der Schweiz und Liechtenstein",
    "de-li": "in der Schweiz und Liechtenstein",
    "en-li": "in Switzerland and Liechtenstein",
    "en-ch": "in Switzerland and Liechtenstein",
  },
  view_all_jobs: {
    "de-ch": "zur Stellensuche",
    "de-li": "zur Stellensuche",
    "en-li": "View all jobs",
    "en-ch": "View all jobs",
  },
  current_top_jobs: {
    "de-ch": "Aktuelle Top-Jobs",
    "de-li": "Aktuelle Top-Jobs",
    "en-li": "Current top jobs",
    "en-ch": "Current top jobs",
  },
  services_for_employers: {
    "de-ch": "Dienstleistungen für Arbeitgebende",
    "de-li": "Dienstleistungen für Arbeitgebende",
    "en-li": "Services for employers",
    "en-ch": "Services for employers",
  },
  our_services_for_employers: {
    "de-ch": "Unsere Dienstleistungen für Arbeitgebende",
    "de-li": "Unsere Dienstleistungen für Arbeitgebende",
    "en-li": "Our services for employers",
    "en-ch": "Our services for employers",
  },
  more_services_for_employers: {
    "de-ch": "Weitere Dienstleistungen für Arbeitgebende",
    "de-li": "Weitere Dienstleistungen für Arbeitgebende",
    "en-li": "More services for employers",
    "en-ch": "More services for employers",
  },
  go_to_the_services: {
    "de-ch": "zu den Leistungen",
    "de-li": "zu den Leistungen",
    "en-li": "go to the services",
    "en-ch": "go to the services",
  },
  references_intro_with_success_and_numbers: {
    "de-ch":
      "Mit über 600 Firmen durften wir bereits zusammenarbeiten. Mehr als 2500 Kandidaten wurden erfolgreich vermittelt.",
    "de-li":
      "Mit über 600 Firmen durften wir bereits zusammenarbeiten. Mehr als 2500 Kandidaten wurden erfolgreich vermittelt.",
    "en-li":
      "We have already had the pleasure of working with over 600 companies. More than 2500 candidates have been successfully placed.",
    "en-ch":
      "We have already had the pleasure of working with over 600 companies. More than 2500 candidates have been successfully placed.",
  },
  find_out_more: {
    "de-ch": "mehr erfahren",
    "de-li": "mehr erfahren",
    "en-li": "find out more",
    "en-ch": "find out more",
  },
  "team_teaser_title:p1": {
    "de-ch": "Ihre Ansprechpersonen –",
    "de-li": "Ihre Ansprechpersonen –",
    "en-li": "Your contact –",
    "en-ch": "Your contact –",
  },
  "team_teaser_title:p2": {
    "de-ch": "für massgeschneiderte Lösungen",
    "de-li": "für massgeschneiderte Lösungen",
    "en-li": "for customized solutions",
    "en-ch": "for customized solutions",
  },
  "specialists_teaser_title:p1": {
    "de-ch": "Ihre Fachpersonen –",
    "de-li": "Ihre Fachpersonen –",
    "en-li": "Your specialists –",
    "en-ch": "Your specialists –",
  },
  "specialists_teaser_title:p2": {
    "de-ch": "fokussiert auf die jeweiligen Branchen",
    "de-li": "fokussiert auf die jeweiligen Branchen",
    "en-li": "focused on the respective industries",
    "en-ch": "focused on the respective industries",
  },
  view_entire_team: {
    "de-ch": "Gesamtes Team ansehen",
    "de-li": "Gesamtes Team ansehen",
    "en-li": "View entire team",
    "en-ch": "View entire team",
  },
  there_for_you_since_years: {
    "de-ch": "seit [0] Jahren für Sie da",
    "de-li": "seit [0] Jahren für Sie da",
    "en-li": "there for you since [0] years",
    "en-ch": "there for you since [0] years",
  },
  more_about_us: {
    "de-ch": "mehr über uns",
    "de-li": "mehr über uns",
    "en-li": "more about us",
    "en-ch": "more about us",
  },
  more_about: {
    "de-ch": "Mehr über",
    "de-li": "Mehr über",
    "en-li": "More about",
    "en-ch": "More about",
  },
  "references_teaser:p1": {
    "de-ch": "Ehrlich gesagt –",
    "de-li": "Ehrlich gesagt –",
    "en-li": "Honestly –",
    "en-ch": "Honestly –",
  },
  "references_teaser:p2": {
    "de-ch": "was andere über uns sagen",
    "de-li": "was andere über uns sagen",
    "en-li": "what others say about us",
    "en-ch": "what others say about us",
  },
  functional_area: {
    "de-ch": "Funktionsbereich",
    "de-li": "Funktionsbereich",
    "en-li": "Functional area",
    "en-ch": "Functional area",
  },
  type_of_employment: {
    "de-ch": "Anstellungsart",
    "de-li": "Anstellungsart",
    "en-li": "Type of employment",
    "en-ch": "Type of employment",
  },
  location_of_employment: {
    "de-ch": "Anstellungsort",
    "de-li": "Anstellungsort",
    "en-li": "Location",
    "en-ch": "Location",
  },
  show_all: {
    "de-ch": "Alle anzeigen",
    "de-li": "Alle anzeigen",
    "en-li": "Show all",
    "en-ch": "Show all",
  },
  jobs: {
    "de-ch": "Stellen",
    "de-li": "Stellen",
    "en-li": "Jobs",
    "en-ch": "Jobs",
  },
  role: {
    "de-ch": "Funktion",
    "de-li": "Funktion",
    "en-li": "Role",
    "en-ch": "Role",
  },
  region: {
    "de-ch": "Region",
    "de-li": "Region",
    "en-li": "Region",
    "en-ch": "Region",
  },
  workload: {
    "de-ch": "Pensum",
    "de-li": "Pensum",
    "en-li": "Workload",
    "en-ch": "Workload",
  },
  temporary_positions: {
    "de-ch": "Temporärstellen",
    "de-li": "Temporärstellen",
    "en-li": "Temporary positions",
    "en-ch": "Temporary positions",
  },
  no_jobs_found: {
    "de-ch": "Keine Stellen gefunden",
    "de-li": "Keine Stellen gefunden",
    "en-li": "No jobs found",
    "en-ch": "No jobs found",
  },
  "spontaneous_application_teaser:title": {
    "de-ch": "Keine passende Stelle gefunden?",
    "de-li": "Keine passende Stelle gefunden?",
    "en-li": "No suitable position found?",
    "en-ch": "No suitable position found?",
  },
  "spontaneous_application_teaser:description": {
    "de-ch":
      "Mit vollständigen Bewerbungsunterlagen benötigst Du nur zwei Minuten für den gesamten Bewerbungsprozess. Sende uns deine Unterlagen und wir prüfen diese.",
    "de-li":
      "Mit vollständigen Bewerbungsunterlagen benötigst Du nur zwei Minuten für den gesamten Bewerbungsprozess. Sende uns deine Unterlagen und wir prüfen diese.",
    "en-li":
      "With complete application documents, you only need two minutes for the entire application process. Send us your documents and we will check them.",
    "en-ch":
      "With complete application documents, you only need two minutes for the entire application process. Send us your documents and we will check them.",
  },
  "spontaneous_application_teaser_SW:title": {
    "de-ch": "Nichts passendes dabei?",
    "de-li": "Nichts passendes dabei?",
    "en-li": "Nothing suitable?",
    "en-ch": "Nothing suitable?",
  },
  "spontaneous_application_teaser_SW:description": {
    "de-ch":
      "Wir sind immer offen dafür, unser Team mit frischen Talenten zu erweitern. Bist du eine neugierige, engagierte und treibende Persönlichkeit auf der Suche nach einer neuen beruflichen Herausforderung im HR-Bereich?",
    "de-li":
      "Wir sind immer offen dafür, unser Team mit frischen Talenten zu erweitern. Bist du eine neugierige, engagierte und treibende Persönlichkeit auf der Suche nach einer neuen beruflichen Herausforderung im HR-Bereich?",
    "en-li":
      "We are always open to adding fresh talent to our team. Are you a curious, committed and driven personality looking for a new professional challenge in the HR field?",
    "en-ch":
      "We are always open to adding fresh talent to our team. Are you a curious, committed and driven personality looking for a new professional challenge in the HR field?",
  },
  apply_spontaneously: {
    "de-ch": "Spontan bewerben",
    "de-li": "Spontan bewerben",
    "en-li": "Apply spontaneously",
    "en-ch": "Apply spontaneously",
  },
  convince_us: {
    "de-ch": "Überzeuge uns",
    "de-li": "Überzeuge uns",
    "en-li": "Convince us",
    "en-ch": "Convince us",
  },
  application_form: {
    "de-ch": "Bewerbungsformular",
    "de-li": "Bewerbungsformular",
    "en-li": "Application form",
    "en-ch": "Application form",
  },
  application_form_intro: {
    "de-ch":
      "Bitte füllen Sie folgendes Formular korrekt und vollständig aus. Ihre Angaben werden vertraulich behandelt und gemäss den geltenden Datenschutzrichtlinien erhoben.",
    "de-li":
      "Bitte füllen Sie folgendes Formular korrekt und vollständig aus. Ihre Angaben werden vertraulich behandelt und gemäss den geltenden Datenschutzrichtlinien erhoben.",
    "en-li":
      "Please fill out the following form correctly and completely. Your information will be treated confidentially and collected in accordance with the applicable data protection guidelines.",
    "en-ch":
      "Please fill out the following form correctly and completely. Your information will be treated confidentially and collected in accordance with the applicable data protection guidelines.",
  },
  data_sharing: {
    "de-ch": "Dateifreigabe –",
    "de-li": "Dateifreigabe –",
    "en-li": "Data Sharing",
    "en-ch": "Data Sharing",
  },
  "data_sharing:addition": {
    "de-ch": "Ihre persönlichen Daten sind uns wichtig.",
    "de-li": "Ihre persönlichen Daten sind uns wichtig.",
    "en-li": "Your personal data is important to us.",
    "en-ch": "Your personal data is important to us.",
  },
  "data_sharing:option1": {
    "de-ch":
      "Ich bin damit einverstanden, dass meine Daten auch über eine konkrete Stellenbesetzung hinaus gespeichert werden und ich auf interessante Stellenangebote hingewiesen werde, einverstanden.",
    "de-li":
      "Ich bin damit einverstanden, dass meine Daten auch über eine konkrete Stellenbesetzung hinaus gespeichert werden und ich auf interessante Stellenangebote hingewiesen werde, einverstanden.",
    "en-li":
      "I agree that my data will be stored beyond a specific job opening and that I will be informed about interesting job offers.",
    "en-ch":
      "I agree that my data will be stored beyond a specific job opening and that I will be informed about interesting job offers.",
  },
  "data_sharing:option2": {
    "de-ch": "Ich bin mit der Datenschutzerklärung einverstanden.",
    "de-li": "Ich bin mit der Datenschutzerklärung einverstanden.",
    "en-li": "I agree with the privacy policy.",
    "en-ch": "I agree with the privacy policy.",
  },
  "application_success:p1": {
    "de-ch":
      "Wir werden Ihre Unterlagen sorgfältig prüfen und uns so bald wie möglich bei Ihnen melden.",
    "de-li":
      "Wir werden Ihre Unterlagen sorgfältig prüfen und uns so bald wie möglich bei Ihnen melden.",
    "en-li":
      "We will carefully review your documents and get back to you as soon as possible.",
    "en-ch":
      "We will carefully review your documents and get back to you as soon as possible.",
  },
  "application_success:p2": {
    "de-ch":
      "Bei Fragen stehen wir Ihnen gerne telefonisch oder per Email zur Verfügung.",
    "de-li":
      "Bei Fragen stehen wir Ihnen gerne telefonisch oder per Email zur Verfügung.",
    "en-li":
      "If you have any questions, please do not hesitate to contact us by phone or email.",
    "en-ch":
      "If you have any questions, please do not hesitate to contact us by phone or email.",
  },
  career_path: {
    "de-ch": "Werdegang",
    "de-li": "Werdegang",
    "en-li": "Career path",
    "en-ch": "Career path",
  },
  professional_experience: {
    "de-ch": "Berufserfahrung",
    "de-li": "Berufserfahrung",
    "en-li": "Professional experience",
    "en-ch": "Professional experience",
  },
  education: {
    "de-ch": "Ausbildungen",
    "de-li": "Ausbildungen",
    "en-li": "Education",
    "en-ch": "Education",
  },
  "blog_title:p1": {
    "de-ch": "Aktuelle Beiträge und",
    "de-li": "Aktuelle Beiträge und",
    "en-li": "Current articles and",
    "en-ch": "Current articles and",
  },
  "blog_title:p2": {
    "de-ch": "Themen von Stellenwerk",
    "de-li": "Themen von Stellenwerk",
    "en-li": "topics from Stellenwerk",
    "en-ch": "topics from Stellenwerk",
  },
  all: {
    "de-ch": "Alle",
    "de-li": "Alle",
    "en-li": "All",
    "en-ch": "All",
  },
  read_more: {
    "de-ch": "Weiterlesen",
    "de-li": "Weiterlesen",
    "en-li": "Read more",
    "en-ch": "Read more",
  },
  more_interesting_articles: {
    "de-ch": "Weitere interessante Beiträge",
    "de-li": "Weitere interessante Beiträge",
    "en-li": "More interesting articles",
    "en-ch": "More interesting articles",
  },
  your_situation: {
    "de-ch": "Ihre Situation",
    "de-li": "Ihre Situation",
    "en-li": "Your situation",
    "en-ch": "Your situation",
  },
  procedure_with_stellenwerk: {
    "de-ch": "Vorgehensweise bei Stellenwerk",
    "de-li": "Vorgehensweise bei Stellenwerk",
    "en-li": "Procedure with Stellenwerk",
    "en-ch": "Procedure with Stellenwerk",
  },
  we_are_stellenwerk: {
    "de-ch": "Wir sind Stellenwerk",
    "de-li": "Wir sind Stellenwerk",
    "en-li": "We are Stellenwerk",
    "en-ch": "We are Stellenwerk",
  },
  close_in_love_with_solutions_and_authentic: {
    "de-ch": "Nahe dran, lösungsverliebt und authentisch",
    "de-li": "Nahe dran, lösungsverliebt und authentisch",
    "en-li": "Up close, in love with solutions and authentic",
    "en-ch": "Up close, in love with solutions and authentic",
  },
  references_title: {
    "de-ch": "Warum zahlreiche Unternehmen und Personen sich auf uns verlassen",
    "de-li": "Warum zahlreiche Unternehmen und Personen sich auf uns verlassen",
    "en-li": "Why numerous companies and individuals rely on us",
    "en-ch": "Why numerous companies and individuals rely on us",
  },
  our_network: {
    "de-ch": "Unser Netzwerk –",
    "de-li": "Unser Netzwerk –",
    "en-li": "Our network –",
    "en-ch": "Our network –",
  },
  partners_we_trust: {
    "de-ch": "Partner auf die wir vertrauen",
    "de-li": "Partner auf die wir vertrauen",
    "en-li": "Partners we trust",
    "en-ch": "Partners we trust",
  },
  employers: {
    "de-ch": "Arbeitgebende",
    "de-li": "Arbeitgebende",
    "en-li": "Employers",
    "en-ch": "Employers",
  },
  candidates: {
    "de-ch": "Kandidat:innen",
    "de-li": "Kandidat:innen",
    "en-li": "Candidates",
    "en-ch": "Candidates",
  },
  "services_cta:title": {
    "de-ch": "Wünschen Sie Unterstützung?",
    "de-li": "Wünschen Sie Unterstützung?",
    "en-li": "Would you like assistance?",
    "en-ch": "Would you like assistance?",
  },
  "services_cta:description": {
    "de-ch":
      "Wir stehen Ihnen gerne zur Verfügung und freuen uns, von Ihnen zu hören.",
    "de-li":
      "Wir stehen Ihnen gerne zur Verfügung und freuen uns, von Ihnen zu hören.",
    "en-li": "We are at your service and look forward to hearing from you.",
    "en-ch": "We are at your service and look forward to hearing from you.",
  },
  contact_us: {
    "de-ch": "Kontakt aufnehmen",
    "de-li": "Kontakt aufnehmen",
    "en-li": "Contact us",
    "en-ch": "Contact us",
  },
  view_website: {
    "de-ch": "Zur Website",
    "de-li": "Zur Website",
    "en-li": "View website",
    "en-ch": "View website",
  },
  terms_of_use: {
    "de-ch": "Nutzungsbedingungen, Einverständniserklärung",
    "de-li": "Nutzungsbedingungen, Einverständniserklärung",
    "en-li": "Terms of use, declaration of consent",
    "en-ch": "Terms of use, declaration of consent",
  },
  data_protection_guidelines: {
    "de-ch": "Datenschutzrichtlinien",
    "de-li": "Datenschutzrichtlinien",
    "en-li": "Data protection guidelines and privacy policy",
    "en-ch": "Data protection guidelines and privacy policy",
  },
  legal_desclosure: {
    "de-ch": "Impressum",
    "de-li": "Impressum",
    "en-li": "Impressum",
    "en-ch": "Impressum",
  },
  seo_home_description: {
    "de-ch":
      "Wir unterstützen Sie auf der Suche nach Ihrem neuen Job. Auch rekrutieren und verleihen wir qualifizierte Fach- und Führungskräfte.",
    "de-li":
      "Wir unterstützen Sie auf der Suche nach Ihrem neuen Job. Auch rekrutieren und verleihen wir qualifizierte Fach- und Führungskräfte.",
    "en-li":
      "We support you in your search for your new job. We recruit and hire out qualified specialists and managers.",
    "en-ch":
      "We support you in your search for your new job. We recruit and hire out qualified specialists and managers.",
  },
  seo_services_title: {
    "de-ch": "Dienstleistungen",
    "de-li": "Dienstleistungen",
    "en-li": "Services",
    "en-ch": "Services",
  },
  seo_services_description: {
    "de-ch":
      "Abdecken temporärer Spitzen, Rekrutierung von Schlüsselpositionen oder Personalbedarf für spezifische Projekte - auf Mandats-, Erfolgs- oder Aufwandsbasis.",
    "de-li":
      "Abdecken temporärer Spitzen, Rekrutierung von Schlüsselpositionen oder Personalbedarf für spezifische Projekte - auf Mandats-, Erfolgs- oder Aufwandsbasis.",
    "en-li":
      "Covering temporary peaks, recruiting key positions or staffing needs for specific projects - on a mandate, contingency or expense basis.",
    "en-ch":
      "Covering temporary peaks, recruiting key positions or staffing needs for specific projects - on a mandate, contingency or expense basis.",
  },
  seo_jobs_description: {
    "de-ch":
      "Aus Stellenangeboten können Sie Ihren Job finden und sich direkt bewerben. Wenn keine Stelle passt, bewerben Sie sich spontan mit Ihren Bewerbungsunterlagen.",
    "de-li":
      "Aus Stellenangeboten können Sie Ihren Job finden und sich direkt bewerben. Wenn keine Stelle passt, bewerben Sie sich spontan mit Ihren Bewerbungsunterlagen.",
    "en-li":
      "You can find your job from job offers and apply directly. If no job fits, apply spontaneously with your application documents.",
    "en-ch":
      "You can find your job from job offers and apply directly. If no job fits, apply spontaneously with your application documents.",
  },
  seo_job_description: {
    "de-ch":
      "Bewerben Sie sich als [0]. Funktionsbereich: [1]. Das Pensum dieses Jobs beträgt [2]. Arbeitsregion: [3]",
    "de-li":
      "Bewerben Sie sich als [0]. Funktionsbereich: [1]. Das Pensum dieses Jobs beträgt [2]. Arbeitsregion: [3]",
    "en-li":
      "Apply as [0]. Functional area: [1]. The workload of this job is [2]. Work region: [3]",
    "en-ch":
      "Apply as [0]. Functional area: [1]. The workload of this job is [2]. Work region: [3]",
  },
  seo_team_description: {
    "de-ch":
      "Stellenwerk steht seit mehr als 15 Jahren für massgeschneiderte Lösungen in der Personaldienstleistung. Nahe dran. Lösungsverliebt. Authentisch.",
    "de-li":
      "Stellenwerk steht seit mehr als 15 Jahren für massgeschneiderte Lösungen in der Personaldienstleistung. Nahe dran. Lösungsverliebt. Authentisch.",
    "en-li":
      "Stellenwerk has stood for customized solutions in personnel services for more than 15 years. Close to you. In love with solutions. Authentic.",
    "en-ch":
      "Stellenwerk has stood for customized solutions in personnel services for more than 15 years. Close to you. In love with solutions. Authentic.",
  },
  seo_blog_description: {
    "de-ch":
      "Hier finden Sie alle Neuigkeiten, Stories, Wissenswertes und spannende Einblicke zum Personaldienstleister Stellenwerk.",
    "de-li":
      "Hier finden Sie alle Neuigkeiten, Stories, Wissenswertes und spannende Einblicke zum Personaldienstleister Stellenwerk.",
    "en-li":
      "Here you will find all the news, stories, interesting facts and exciting insights about the personnel service provider Stellenwerk.",
    "en-ch":
      "Here you will find all the news, stories, interesting facts and exciting insights about the personnel service provider Stellenwerk.",
  },
  seo_data_protection_guidelines_description: {
    "de-ch":
      "Die Stellenwerk AG gewährt dem Schutz von persönlichen Daten höchste Priorität und ist bestrebt, Ihre Privatsphäre jederzeit in höchst möglichem Umfang zu schützen und zu respektieren.",
    "de-li":
      "Die Stellenwerk AG gewährt dem Schutz von persönlichen Daten höchste Priorität und ist bestrebt, Ihre Privatsphäre jederzeit in höchst möglichem Umfang zu schützen und zu respektieren.",
    "en-li":
      "Stellenwerk AG grants the highest priority to the protection of personal data and strives to protect and respect your privacy at all times to the greatest extent possible.",
    "en-ch":
      "Stellenwerk AG grants the highest priority to the protection of personal data and strives to protect and respect your privacy at all times to the greatest extent possible.",
  },
  seo_impressum_description: {
    "de-ch":
      "Kontaktadresse, Zweigniederlassung, Vertretungsberechtigte Personen, Vertretungsberechtigte Personen, Mehrwertsteuernummer und weitere Infos.",
    "de-li":
      "Kontaktadresse, Zweigniederlassung, Vertretungsberechtigte Personen, Vertretungsberechtigte Personen, Mehrwertsteuernummer und weitere Infos.",
    "en-li":
      "Contact address, branch office, authorized representatives, authorized representatives, VAT number and other info.",
    "en-ch":
      "Contact address, branch office, authorized representatives, authorized representatives, VAT number and other info.",
  },
  seo_terms_of_use_description: {
    "de-ch":
      "Die Nutzungsbedingungen enthalten alle Bestimmungen, welche die Nutzung und den Zugriff auf die Website stellenwerk.ch regeln.",
    "de-li":
      "Die Nutzungsbedingungen enthalten alle Bestimmungen, welche die Nutzung und den Zugriff auf die Website stellenwerk.ch regeln.",
    "en-li":
      "The Terms of Use contain all provisions governing the use of and access to the stellenwerk.ch website.",
    "en-ch":
      "The Terms of Use contain all provisions governing the use of and access to the stellenwerk.ch website.",
  },
  "work_at_stellenwerk:jobs:title": {
    "de-ch": "Aktuelle Stellenwerk-Vakanzen",
    "de-li": "Aktuelle Stellenwerk-Vakanzen",
    "en-li": "Current Stellenwerk vacancies",
    "en-ch": "Current Stellenwerk vacancies",
  },
  "work_at_stellenwerk:jobs:description": {
    "de-ch": "Bewirb dich auf eine unserer offenen Stellen.",
    "de-li": "Bewirb dich auf eine unserer offenen Stellen.",
    "en-li": "Apply for one of our open positions.",
    "en-ch": "Apply for one of our open positions.",
  },
  "work_at_stellenwerk:benefits:title": {
    "de-ch": "Mitarbeiter-Benefits",
    "de-li": "Mitarbeiter-Benefits",
    "en-li": "Employee Benefits",
    "en-ch": "Employee Benefits",
  },
  "work_at_stellenwerk:learn:title": {
    "de-ch": "Berufseinstieg ins HR – Lehre und Praktikum",
    "de-li": "Berufseinstieg ins HR – Lehre und Praktikum",
    "en-li": "Career entry into HR – apprenticeship and internship",
    "en-ch": "Career entry into HR – apprenticeship and internship",
  },
  "work_at_stellenwerk:benefits:description": {
    "de-ch":
      "Als “Stellenwerker/in“ darfst du einiges von uns erwarten. Hier sind deine Vorteile:",
    "de-li":
      "Als “Stellenwerker/in“ darfst du einiges von uns erwarten. Hier sind deine Vorteile:",
    "en-li":
      "As a Stellenwerk employee you can expect a lot from us. Here are your advantages:",
    "en-ch":
      "As a Stellenwerk employee you can expect a lot from us. Here are your advantages:",
  },
};

// key: {
// "de-ch": "",
// "de-li": "",
// "en-li": "",
// "en-ch": "",
// },
