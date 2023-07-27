import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useGetCriticalInfoQuery } from "./alert.generated";

export const Alert: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const { data } = useGetCriticalInfoQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (data?.entry.__typename !== "home_home_Entry") {
    return null;
  }
  return data.entry.criticalInfo ? (
    <AltertContainer>{data.entry.criticalInfo}</AltertContainer>
  ) : null;
};

const AltertContainer = styled.div`
  position: absolute;
  top: 214px;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.base} ${spacing.medium};
  color: ${colors.default.primaryColor};
  background: #ffd586;
  background-color: ${colors.default.warningColor};
`;
