import {
  FooterQuery,
  useFooterQuery,
} from "components/footer/footer.generated";
import { useLocalizationId } from "lib/i18n/useLocalizationId";

export const useLocationTranslations = () => {
  const localizationId = useLocalizationId();
  return {
    ["zurich"]: [1, 3].includes(localizationId) ? "Zürich" : "Zurich",
    ["chur"]: "Chur",
    ["schaan"]: "Schaan",
  };
};

export const getPhoneByLocation = (
  location: string,
  globalData?: FooterQuery["globalSet"]
) => {
  return (
    globalData?.locations.find((entry) => {
      if (entry.__typename !== "locations_location_BlockType") {
        return false;
      }
      return entry.city.startsWith(location.split("")[0]) ? true : false;
    })?.phone || ""
  );
};

export const usePhoneNumbers = () => {
  const localizationId = useLocalizationId();
  const { data: globalDataSet } = useFooterQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const phoneNumbers: Array<{ city: string; phone: string }> = [];
  globalDataSet?.globalSet?.locations.forEach((entry) => {
    if (entry.__typename === "locations_location_BlockType") {
      phoneNumbers.push({ city: entry.city, phone: entry.phone });
    }
  });

  return phoneNumbers;
};
