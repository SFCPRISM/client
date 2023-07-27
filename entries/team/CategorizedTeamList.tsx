import { Row } from "components/layout/Grid";
import { Accordion } from "components/ui/accordion/Accordion";
import { TeamListView } from "entries/team/Team";
import { GetTeamQuery, useGetTeamQuery } from "entries/team/team.generated";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { getCategorizedTeamDetails } from "./getCategorizedTeamDetails";
import { useLocationTranslations } from "./helpers";

export const CategorizedTeamList = () => {
  const localizationId = useLocalizationId();
  const locationTranslations = useLocationTranslations();
  const { data } = useGetTeamQuery(
    { localizationId: [localizationId], limit: null },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const categorizedTeamDetails = getCategorizedTeamDetails(data?.entries);

  if (!categorizedTeamDetails) {
    return null;
  }

  return (
    <>
      {categorizedTeamDetails.byLocation.locations.map((location) => {
        return (
          <StyledAccordion
            key={location}
            title={locationTranslations[location]}
            boldTitle
          >
            <Row>
              <TeamListView
                entries={categorizedTeamDetails.byLocation[location]}
                options={{ colProps: { xs: 12, sm: 6, md: 6, lg: 6, xl: 4 } }}
              />
            </Row>
          </StyledAccordion>
        );
      })}
      <ByCategories>
        {categorizedTeamDetails.byCategory.categories.map((category) => {
          return (
            <StyledAccordion
              key={category}
              title={category}
              variant="slim"
              boldTitle={false}
            >
              <Row>
                <TeamListView
                  entries={categorizedTeamDetails.byCategory[category]}
                  options={{ colProps: { xs: 12, sm: 6, md: 6, lg: 6, xl: 4 } }}
                />
              </Row>
            </StyledAccordion>
          );
        })}
      </ByCategories>
    </>
  );
};

export const ServiceContactByCategory = () => {};

const StyledAccordion = styled(Accordion)<{
  boldTitle?: boolean;
  variant?: "default" | "slim";
}>`
  color: ${colors.default.primaryColor};
  padding: ${({ variant }) =>
      variant === "slim" ? spacing.medium : spacing.grande}
    0 ${spacing.medium};
  border-bottom: 1px solid ${colors.default.primaryColor};
`;

const ByCategories = styled.div`
  margin-top: 120px;
`;
