import { FunctionComponent } from "react";
import {
  Carousel,
  CarouselButtonNext,
  CarouselButtonPrev,
  CarouselStage,
} from "components/carousel";
import styled from "styled-components";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { useGetTeamQuery } from "entries/team/team.generated";
import { spacing } from "lib/theme/design-tokens/spacing";
import { colors } from "lib/theme/design-tokens/colors";
import Image from "next/image";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import Link from "next/link";
import { TeamSkeleton } from "./Team.teaser";
import { useTranslations } from "lib/i18n/translations";
import { PersonTeaserGradientOverlay } from "components/teaser/PersonTeaser";

export const TeamCarousel: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const translations = useTranslations(["view_entire_team"]);
  const { data } = useGetTeamQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const buttonLinkTextFragments = translations["view_entire_team"].split(" ");

  const carouselSlides = data?.entries?.length
    ? data.entries.map((entry) => {
        if (
          entry.__typename !== "team_default_Entry" ||
          !entry.employeeImage[0].url
        ) {
          return null;
        }

        return (
          <CarouselItem key={entry.slug}>
            <Image
              src={entry.employeeImage[0].url}
              alt="Referenzen Mood Bild"
              layout="fill"
              objectFit="cover"
            />
            <PersonTeaserGradientOverlay />
            <ItemTitle variant="h1" component="h3">
              {entry.employeeFirstName} {entry.employeeSurname}
            </ItemTitle>
          </CarouselItem>
        );
      })
    : [<TeamSkeleton key="team-skeleton" />];

  return (
    <Carousel slides={carouselSlides}>
      <CarouselStage smoothScroll={true}></CarouselStage>
      <CarouselActions>
        <StyledTeamCarouselButtonPrev iconProps={{ width: 56, height: 36 }} />
        <div>
          <Link href={`team`} passHref>
            <ButtonLink variant="contained">
              {buttonLinkTextFragments[1]} {buttonLinkTextFragments[2]}
            </ButtonLink>
          </Link>
        </div>
        <StyledTeamCarouselButtonNext iconProps={{ width: 56, height: 36 }} />
      </CarouselActions>
    </Carousel>
  );
};

const CarouselItem = styled.div`
  width: 100%;
  height: 340px;
  position: relative;
  background-color: ${colors.default.lightBackgroundColor};
`;

const ItemTitle = styled(Typography)`
  position: absolute;
  font-weight: 600 !important;
  color: ${colors.default.white};
  bottom: ${spacing.big};
  left: ${spacing.big};
`;

const CarouselActions = styled.div`
  background-color: ${colors.default.lightBackgroundColor};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.massive} 0;
`;

const StyledTeamCarouselButtonPrev = styled(CarouselButtonPrev)`
  margin-left: ${spacing.base};
`;

const StyledTeamCarouselButtonNext = styled(CarouselButtonNext)`
  margin-right: ${spacing.base};
`;
