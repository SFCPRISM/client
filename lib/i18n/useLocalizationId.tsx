import { useLocalizationContext } from "./localizationContext";

export const useLocalizationId = () => useLocalizationContext().localizationId;
export const getLocalizationIdByLocale = (locale: string) => {
  switch (locale) {
    case "en-ch":
      return 2;
    case "de-li":
      return 3;
    case "en-li":
      return 4;
    case "de-ch":
    default:
      return 1;
  }
};

export type Locale = "en-ch" | "de-li" | "en-li" | "de-ch";
export const getLocaleByLocalizationId = (localizationId: number): Locale => {
  switch (localizationId) {
    case 2:
      return "en-ch";
    case 3:
      return "de-li";
    case 4:
      return "en-li";
    case 1:
    default:
      return "de-ch";
  }
};

export const getCountryCodeByHost = (host?: string): "ch" | "li" => {
  let countryCode = host?.split(".").pop() ?? "ch";
  if (!["li", "ch"].includes(countryCode)) {
    countryCode = "ch";
  }
  return countryCode as "ch" | "li";
};

export const useIsLiechtenstein = (): boolean => {
  const localizationId = useLocalizationId();
  return [3, 4].includes(localizationId);
};
