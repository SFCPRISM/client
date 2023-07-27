import { HeroImage } from "components/hero/HeroImage";
import { Grid } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { TeamList } from "entries/team/Team";
import { useTranslations } from "lib/i18n/translations";
import { spacing } from "lib/theme/design-tokens/spacing";
import Head from "next/head";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Team: FunctionComponent = () => {
  const translations = useTranslations([
    "we_are_stellenwerk",
    "close_in_love_with_solutions_and_authentic",
  ]);
  const pageIntroTitle = (
    <>
      <strong>
        <>{translations["we_are_stellenwerk"]}</>
      </strong>
      <br />
      {translations["close_in_love_with_solutions_and_authentic"]}
    </>
  );

  return (
    <>
      <Head>
        <title>Stellenwerk - {translations["we_are_stellenwerk"]}</title>
        <meta
          name="description"
          content={`${translations["close_in_love_with_solutions_and_authentic"]}.`}
        />
      </Head>
      <HeroImage src="/static/images/hero-3.png" />
      <PageIntro title={pageIntroTitle} />
      <StyledGrid>
        <TeamList withFilter />
      </StyledGrid>
    </>
  );
};

const StyledGrid = styled(Grid)`
  margin-bottom: ${spacing.giant};
`;

export default Team;
