import { FunctionComponent } from "react";
import {
  Carousel,
  CarouselButtonNext,
  CarouselButtonPrev,
  CarouselStage,
} from "components/carousel";
import styled, { css } from "styled-components";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { spacing } from "lib/theme/design-tokens/spacing";
import { colors } from "lib/theme/design-tokens/colors";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import Link from "next/link";
import { useTranslations } from "lib/i18n/translations";
import { useGetServicesQuery } from "entries/services/services.generated";
import { getServiceIconLinkById } from "./getServiceIconLink";

export const ServicesCarousel: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const translations = useTranslations(["go_to_the_services"]);
  const { data } = useGetServicesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const carouselSlides = data?.entries?.length
    ? data.entries.map((entry) => {
        const Icon = getServiceIconLinkById(entry.id, {
          width: 64,
          height: 64,
        });
        return (
          <Link href={`/services/${entry.slug}`} key={entry.slug} passHref>
            <CarouselItem key={entry.slug}>
              {Icon && Icon}
              <ItemTitle
                variant="h1"
                component="h3"
                color={colors.default.primaryColor}
              >
                {entry.title}
              </ItemTitle>
            </CarouselItem>
          </Link>
        );
      })
    : [<Skeleton key="service-carousel-skeleton" />];

  return (
    <Carousel slides={carouselSlides}>
      <CarouselStage smoothScroll={true}></CarouselStage>
      <CarouselActions>
        <StyledServicesCarouselButtonPrev
          iconProps={{ width: 56, height: 36 }}
        />
        <div>
          <Link href={`team`} passHref>
            <ButtonLink variant="contained">
              {translations["go_to_the_services"]}
            </ButtonLink>
          </Link>
        </div>
        <StyledServicesCarouselButtonNext
          iconProps={{ width: 56, height: 36 }}
        />
      </CarouselActions>
    </Carousel>
  );
};

const CarouselItem = styled.div`
  width: 100%;
  min-height: 300px;
  padding: ${spacing.big} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ItemTitle = styled(Typography)`
  margin-top: ${spacing.base};
  font-weight: 600 !important;
  text-align: center;
`;

const CarouselActions = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledServicesCarouselButtonPrev = styled(CarouselButtonPrev)`
  margin-right: ${spacing.base};
`;

const StyledServicesCarouselButtonNext = styled(CarouselButtonNext)`
  margin-left: ${spacing.base};
`;

const Skeleton = styled.div`
  height: 300px;
  width: 100%;
`;
