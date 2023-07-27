import { JobApplicationForm } from "applicationForm/App";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "applicationForm/theme";
import styled from "styled-components";
import { colors } from "lib/theme/design-tokens/colors";
import { PageIntro } from "components/layout/PageIntro";
import { HeroImage } from "components/hero/HeroImage";
import { spacing } from "lib/theme/design-tokens/spacing";
import { useJobPostingData } from "components/jobs/jobPosting/useJobPosting";
import { useTranslations } from "lib/i18n/translations";
import { FunctionComponent, useEffect, useRef } from "react";
import { trackGoal } from "fathom-client";
import Head from "next/head";
import { useIsLiechtenstein } from "lib/i18n/useLocalizationId";

const Apply: FunctionComponent = () => {
  const {
    query: { id },
  } = useRouter();
  const isGoalTracked = useRef(false);
  const isLiechtenstein = useIsLiechtenstein();
  const translations = useTranslations([
    "application_form",
    "application_form_intro",
  ]);

  useEffect(() => {
    if (isGoalTracked.current === false) {
      if (isLiechtenstein) {
        // Application Process Started LI
        trackGoal("RH9NWHFC", null);
      } else {
        // Application Process Started CH
        trackGoal("EBDHHJTT", null);
      }
    }
    isGoalTracked.current = true;
  }, []);

  const posting = useJobPostingData(id as string);

  return (
    <>
      <Head>
        <title>Stellenwerk - Bewerbungsformular</title>
        <meta
          name="description"
          content={`Bewerbungsformular für ${
            posting.title && posting.title.replace(/\([^)]*\)/, "")
          }`}
        />
      </Head>
      <HeroImage src="/static/images/hero-2.png" />
      <StyledPageIntro
        title={
          <>
            {translations["application_form"]}
            <br />
            <strong>
              {posting.title && posting.title.replace(/\([^)]*\)/, "")}
            </strong>
          </>
        }
        description={translations["application_form_intro"]}
      />
      <Section>
        <ThemeProvider theme={theme}>
          <JobApplicationForm jobOfferId={id as string} />
        </ThemeProvider>
      </Section>
    </>
  );
};

const StyledPageIntro = styled(PageIntro)`
  padding: 0 ${spacing.base};
`;

const Section = styled.div`
  margin-bottom: 120px;
  color: ${colors.default.primaryColor};
`;

export default Apply;
