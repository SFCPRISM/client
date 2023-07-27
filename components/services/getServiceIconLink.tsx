import {
  IconExecutive,
  IconOutplacement,
  IconOutsourcing,
  IconRecrouting,
  IconTryAndHire,
} from "icons/services/serviceIcons";

export const getServiceIconLinkById = (serviceId: string, props?: any) => {
  switch (serviceId) {
    case "702":
      // Personalsuche / Personalrekrutierung
      return <IconRecrouting {...props} />;
    case "865":
      // Outsourcing HR-Aufgaben / BPO Outsourcing
      return <IconOutsourcing {...props} />;
    case "889":
      // Hospitality Service
      return null;
    case "888":
      // Outplacement
      return <IconOutplacement {...props} />;
    case "3108":
      // Executive Search / Kaderselektion
      return <IconExecutive {...props} />;
    case "3271":
      // Personalverleih, Try & Hire
      return <IconTryAndHire {...props} />;
    case "3957":
      // Payroll Services
      return null;
    case "3958":
      // Ad Interim HR Management / Rekrutierung & OnSite Recruitment
      return null;
    case "3959":
      // Active Sourcing / Direktansprachen
      return null;
    case "3960":
      // Schulung in Active Sourcing
      return null;
    default:
      return null;
  }
};
