import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { spacing } from "lib/theme/design-tokens/spacing";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { Translations, useTranslations } from "lib/i18n/translations";
import { IconArrowLeft } from "icons/general/generalIcons";

export const HeroBanner: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const translations = useTranslations([
    "slogan:p1",
    "slogan:p2",
    "search_jobs",
    "services",
  ]);

  return (
    <HeroContainer>
      <Image
        priority
        alt="Stellenwerk"
        src={
          localizationId > 2
            ? "/static/images/home-fl.png"
            : "/static/images/home-ch.png"
        }
        layout="fill"
        objectFit="cover"
      />
      <HeroInner>
        <HeroContent>
          <Slogan>{getSlogan(localizationId, translations)}</Slogan>
          <Actions>
            <Link href={`/jobs`} passHref>
              <ButtonLink variant="contained_contrasting">
                {translations["search_jobs"]}
              </ButtonLink>
            </Link>
            <Link href={`/services`} passHref>
              <ButtonLink variant="contained_contrasting">
                {translations["services"]}
              </ButtonLink>
            </Link>
          </Actions>
        </HeroContent>
      </HeroInner>
      <ShowMoreIconArea>
        <IconArrowLeft width={100} height={40} />
      </ShowMoreIconArea>
    </HeroContainer>
  );
};

const getSlogan = (localizationId: number, translations: Translations) => {
  switch (localizationId) {
    case 3:
    case 4:
      // "de-li"
      // "en-li"
      return (
        <>
          {translations["slogan:p1"]}
          <br />
          <small>
            <>{translations["slogan:p2"]}</>
          </small>
        </>
      );
    case 2:
    default:
      // "de-ch"
      // "en-ch"
      return (
        <>
          <small>
            <>{translations["slogan:p1"]}</>
          </small>
          <br />
          {translations["slogan:p2"]}
        </>
      );
  }
};

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: ${colors.default.secondaryColor};
  height: calc(100vh - 190px);

  ${breakpointQuery.xlUp} {
    height: calc(100vh - 194px);
  }
`;

const HeroInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  height: 100%;
`;

const ShowMoreIconArea = styled.div`
  position: absolute;
  left: ${spacing.giant};
  bottom: ${spacing.giant};
  transform: rotate(-90deg);
  svg g line,
  svg g path {
    stroke: #ffffff;
  }

  ${breakpointQuery.smDown} {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  right: 10%;
  bottom: 25%;

  ${breakpointQuery.smDown} {
    max-width: 400px;
    right: unset;
    width: 100%;
    padding: 0 ${spacing.medium};
    bottom: ${spacing.grande};
  }
`;

const Slogan = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-size: 60px;
  line-height: 65px;
  small {
    font-size: 40px;
    line-height: 50px;
    font-weight: 300;
  }

  ${breakpointQuery.smDown} {
    font-size: 40px;
    line-height: 50px;
    small {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: ${spacing.big};
  & > * {
    &:first-child {
      margin-right: ${spacing.base};
    }
  }

  ${breakpointQuery.smDown} {
    justify-content: space-between;
    width: 100%;
  }
`;
