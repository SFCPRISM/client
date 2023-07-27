import { LinearProgress } from "@material-ui/core";
import { ContentLayout, SlimLayout } from "components/layout/Layout";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

function JobUpdate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 0.5);
      } else {
        clearInterval(timer);
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <StyledLinearProgress
        value={progress}
        variant="determinate"
        style={{ marginTop: "-80px", height: "6px" }}
      />
      <UpdateInfoArea>
        <Typography variant="h1" color={colors.default.primaryColor}>
          Stellen werden aktualisiert
        </Typography>
        <p>
          <span
            style={{
              textDecoration: progress >= 100 ? "line-through" : "unset",
            }}
          >
            Bitte warte ungefähr eine Minute und
          </span>{" "}
          prüfe dann deine Änderungen.
        </p>
        <ButtonArea>
          <Link href={`/jobs`} passHref>
            <ButtonLink variant="contained">Zur Stellensuche</ButtonLink>
          </Link>
        </ButtonArea>
      </UpdateInfoArea>
    </>
  );
}

const StyledLinearProgress = styled(LinearProgress)`
  background-color: ${colors.default.lightBackgroundColor} !important;
  & div {
    background-color: ${({ value }) =>
      value >= 100
        ? "#4AC15F"
        : colors.default.primaryColorLighten8} !important;
  }
`;

const UpdateInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  min-height: 600px;
  margin: 0 auto;
  padding: ${spacing.giant} ${spacing.base};
  color: ${colors.default.primaryColor};
`;

const ButtonArea = styled.div`
  margin-top: ${spacing.medium};
`;

JobUpdate.getLayout = function getLayout(page: ReactElement) {
  return <SlimLayout withLogo={false}>{page}</SlimLayout>;
};

export default JobUpdate;
