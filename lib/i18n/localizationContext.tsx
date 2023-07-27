import { createContext, useContext } from "react";
import { Translations } from "./translations";
import { Locale } from "./useLocalizationId";

interface ILocalizationContext {
  translations: Translations;
  localizationId: number;
  locale: Locale;
}

export const LocalizationContext = createContext<ILocalizationContext | null>(
  null
);
LocalizationContext.displayName = "LocalizationContext";

export const useLocalizationContext = (): ILocalizationContext => {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error(
      `useLocalizationContext must be inside a Provider with a value`
    );
  }

  return context;
};
