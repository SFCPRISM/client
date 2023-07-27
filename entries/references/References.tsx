import { ListFilters } from "components/filter/ListFilter";
import { Col, Grid, Row } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { AccordeonTeaser } from "components/teaser/AccordeonTeaser";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { colors } from "lib/theme/design-tokens/colors";
import styled from "styled-components";
import { useGetReferencesQuery } from "./references.generated";
import { useReferencesFilter } from "./useReferencesFilter";

export const References = () => {
  const translations = useTranslations(["references_title", "view_website"]);
  const pageTitle = (
    <strong>
      <>{translations["references_title"]}</>
    </strong>
  );

  const localizationId = useLocalizationId();
  const { data } = useGetReferencesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const { filters, activeFilter, setActiveFilter } = useReferencesFilter();

  if (!data?.entries?.length) {
    return null;
  }

  return (
    <LightBlueBackground>
      <PageIntro title={pageTitle} />
      <Grid>
        <FilterRow>
          <Col xs={0} sm={1} />
          <Col xs={12} md={7} xl={5}>
            <ListFilters
              filters={filters}
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
            />
          </Col>
        </FilterRow>
        <Row>
          {data.entries
            .filter((entry) => {
              if (activeFilter.id === null) {
                return true;
              }

              if (
                (entry.__typename === "references_company_Entry" ||
                  entry.__typename === "references_person_Entry") &&
                entry.__typename === activeFilter.id
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((entry) => {
              if (entry?.__typename === "references_company_Entry") {
                return (
                  <Col key={entry.title} xs={12} md={6} lg={4} xl={3}>
                    <AccordeonTeaser
                      title={entry.title}
                      description={entry.description}
                      image={{
                        src: entry.image[0].url,
                        alt: entry.title,
                        objectFit: "scale-down",
                        layout: "fixed",
                      }}
                    />
                  </Col>
                );
              }

              if (entry?.__typename === "references_person_Entry") {
                return (
                  <Col key={entry.title} xs={12} md={6} lg={4} xl={3}>
                    <AccordeonTeaser
                      title={entry.title}
                      description={entry.description}
                      image={{
                        src: entry.image[0].url,
                        alt: entry.title,
                        objectFit: "cover",
                        layout: "fill",
                      }}
                    />
                  </Col>
                );
              }
            })}
        </Row>
      </Grid>
    </LightBlueBackground>
  );
};

const LightBlueBackground = styled.div`
  background-color: ${colors.default.lightBackgroundColor};
  color: ${colors.default.white};
  padding-bottom: 200px;
`;

const FilterRow = styled(Row)`
  grid-gap: 0 0;
`;
