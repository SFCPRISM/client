import { Col, Grid, Row } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { AccordeonTeaser } from "components/teaser/AccordeonTeaser";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { colors } from "lib/theme/design-tokens/colors";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useGetPartnerQuery } from "./partner.generated";

export const Partner: FunctionComponent = () => {
  const translations = useTranslations([
    "our_network",
    "partners_we_trust",
    "view_website",
  ]);
  const pageTitle = (
    <>
      <strong>
        <>{translations["our_network"]}</>
      </strong>
      <br />
      {translations["partners_we_trust"]}
    </>
  );

  const localizationId = useLocalizationId();
  const { data } = useGetPartnerQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (!data?.entries?.length) {
    return null;
  }

  return (
    <BlueBackground>
      <StyledPageIntro inverted title={pageTitle} />
      <Grid>
        <Row>
          {data.entries.map((entry) => {
            if (entry.__typename !== "partner_default_Entry") {
              return null;
            }

            return (
              <Col key={entry.title} xs={12} md={6} lg={4} xl={3}>
                <AccordeonTeaser
                  inverted
                  title={entry.title}
                  description={entry.description}
                  image={{
                    src: entry.image[0].url,
                    alt: entry.title,
                    layout: "intrinsic",
                    objectFit: "contain",
                  }}
                  // TODO: Translate me
                  link={{
                    url: entry.webUrl,
                    text: translations["view_website"],
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </BlueBackground>
  );
};

const StyledPageIntro = styled(PageIntro)`
  margin-bottom: 120px;
`;

const BlueBackground = styled.div`
  background-color: ${colors.default.primaryColor};
  color: ${colors.default.white};
  padding-bottom: 200px;
`;
