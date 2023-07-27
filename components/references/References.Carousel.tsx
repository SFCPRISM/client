import { FunctionComponent } from "react";
import {
  Carousel,
  CarouselButtonNext,
  CarouselButtonPrev,
  CarouselPagination,
  CarouselStage,
} from "components/carousel";
import { ButtonLink } from "components/ui/button/ButtonLink";
import Link from "next/link";
import { sanitize } from "isomorphic-dompurify";
import styled from "styled-components";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { spacing } from "lib/theme/design-tokens/spacing";
import { colors } from "lib/theme/design-tokens/colors";
import Image from "next/image";
import { useGetReferencesQuery } from "entries/references/references.generated";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { Typography } from "components/typography/Typography";
import { useTranslations } from "lib/i18n/translations";

export const ReferencesCarousel: FunctionComponent = ({
  className,
}: {
  className?: string;
}) => {
  const localizationId = useLocalizationId();
  const translations = useTranslations(["show_all"]);
  const { data } = useGetReferencesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const carouselSlides = data?.entries?.length
    ? data.entries
        .map((entry) => {
          if (
            entry?.__typename === "references_company_Entry" &&
            entry.isEnabledForCarousel
          ) {
            return (
              <CarouselItem
                key={entry.id}
                title={entry.title}
                description={`«${sanitize(entry.description, {
                  ALLOWED_TAGS: [],
                  ALLOWED_ATTR: [],
                })}»`}
                image={{
                  src: entry.image[0].url,
                  alt: entry.title,
                  objectFit: "contain",
                  layout: "fixed",
                }}
              />
            );
          }

          if (
            entry?.__typename === "references_person_Entry" &&
            entry.isEnabledForCarousel
          ) {
            return (
              <CarouselItem
                key={entry.id}
                title={entry.title}
                description={`«${sanitize(entry.description, {
                  ALLOWED_TAGS: [],
                  ALLOWED_ATTR: [],
                })}»`}
                image={{
                  src: entry.image[0].url,
                  alt: entry.title,
                  objectFit: "cover",
                  layout: "fill",
                }}
              />
            );
          }
          return null;
        })
        .filter((entry) => entry !== null)
    : [<Skeleton key="team-skeleton" />];

  return (
    <Carousel slides={carouselSlides} className={className}>
      <StyledCarouselStage smoothScroll={true}></StyledCarouselStage>
      <CarouselActions>
        <StyledReferencesCarouselButtonPrev
          iconProps={{ width: 56, height: 36 }}
        />
        <ShowMoreButton>
          <Link href={`team`} passHref>
            <ButtonLink variant="contained">
              {translations["show_all"]}
            </ButtonLink>
          </Link>
        </ShowMoreButton>
        <StyledReferencesCarouselButtonNext
          iconProps={{ width: 56, height: 36 }}
        />
      </CarouselActions>
      <StyledCarouselPagination />
    </Carousel>
  );
};

const StyledCarouselStage = styled(CarouselStage)`
  ${breakpointQuery.mdDown} {
    margin-right: ${spacing.mediumNegative};
    margin-left: ${spacing.mediumNegative};
  }
`;

const CarouselActions = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpointQuery.smDown} {
    margin-top: ${spacing.huge};
  }
`;

const StyledCarouselPagination = styled(CarouselPagination)`
  margin-top: ${spacing.big};

  ${breakpointQuery.smDown} {
    margin-top: ${spacing.massive};
    justify-content: center;
  }
`;

const StyledReferencesCarouselButtonPrev = styled(CarouselButtonPrev)`
  margin-right: ${spacing.base};

  ${breakpointQuery.mdUp} {
    position: absolute;
    left: -100px;
    top: 40%;
  }
`;

const ShowMoreButton = styled.div`
  ${breakpointQuery.mdUp} {
    display: none;
  }
`;

const StyledReferencesCarouselButtonNext = styled(CarouselButtonNext)`
  margin-left: ${spacing.base};

  ${breakpointQuery.mdUp} {
    position: absolute;
    right: -100px;
    top: 40%;
  }
`;

const Skeleton = styled.div`
  height: 500px;
  width: 100%;
`;

interface ICallToActionBannerProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
    layout: "fixed" | "fill" | "intrinsic" | "responsive";
  };
}

const CarouselItem: FunctionComponent<ICallToActionBannerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      {image && (
        <ImageArea>
          <Image
            src={image.src}
            alt={image.alt}
            layout={image.layout}
            objectFit={image.objectFit}
            width={300}
            height={300}
          />
        </ImageArea>
      )}
      <TextArea>
        {description && (
          <Description variant="p" color={colors.default.white}>
            {description}
          </Description>
        )}
        <Title>{title}</Title>
      </TextArea>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.default.primaryColor};
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding: ${spacing.huge} ${spacing.medium} 0;

  ${breakpointQuery.mdUp} {
    padding: 0;
    flex-direction: row;
    margin-right: 2px;
  }
`;

const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.default.primaryColorLighten96};

  ${breakpointQuery.mdUp} {
    width: 45%;
    min-height: 500px;
  }
`;

const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.medium} 0 ${spacing.huge};
  flex: 1 1 0;

  ${breakpointQuery.mdUp} {
    width: 60%;
    padding: ${spacing.massive} ${spacing.giant};
  }
`;

const Description = styled(Typography)`
  ${breakpointQuery.mdDown} {
    font-size: 20px !important;
    line-height: 30px !important;
  }
`;

const Title = styled.h3`
  font-size: 26px;
  line-height: 36px;
  font-weight: 300;
  color: ${colors.default.white};
  margin-top: ${spacing.base};
`;
