import { Typography } from "components/typography/Typography";
import { colors } from "lib/theme/design-tokens/colors";
import { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { useTranslations } from "lib/i18n/translations";

export const ReferencesTeaser: FunctionComponent = () => {
  const translations = useTranslations([
    "references_intro_with_success_and_numbers",
    "find_out_more",
  ]);

  return (
    <Container>
      <Inner>
        <TeaserImageContainer>
          <Image
            src="/static/images/people-1.png"
            alt="Referenzen Mood Bild"
            layout="fill"
            objectFit="cover"
          />
        </TeaserImageContainer>
        <Description>
          <TeaserTitle variant="h2">
            {translations["references_intro_with_success_and_numbers"]}
          </TeaserTitle>
          <CallToAction>
            <Link href={`references`} passHref>
              <ButtonLink variant="contained">
                {translations["find_out_more"]}
              </ButtonLink>
            </Link>
          </CallToAction>
        </Description>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.default.primaryColor};
  margin-left: calc(24px * -1);
  margin-right: calc(24px * -1);
  padding-left: calc(24px);
  padding-right: calc(24px);
`;

const TeaserImageContainer = styled.div`
  position: relative;
  height: 400px;
  margin-bottom: ${spacing.big};
  margin-left: calc(24px * -1);
  margin-right: calc(24px * -1);

  ${breakpointQuery.mdUp} {
    height: 500px;
    margin-top: ${spacing.medium};
    margin-left: 0;
    margin-right: 0;
  }
`;

const TeaserTitle = styled(Typography)`
  font-weight: 300;
`;

const CallToAction = styled.div`
  margin-top: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    margin-top: ${spacing.giant};
  }
`;

const Description = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;

  ${breakpointQuery.mdUp} {
    // TODO: Use grid variable
    padding-left: 134px;
  }
`;
