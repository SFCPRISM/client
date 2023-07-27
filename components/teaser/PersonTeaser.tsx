import { TeamDefaultEntry } from "lib/graphql/types/generated";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "lib/theme/design-tokens/colors";
import { DenseButtonLink } from "components/ui/button/ButtonLink";
import { spacing } from "lib/theme/design-tokens/spacing";
import { Typography } from "components/typography/Typography";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { useTranslations } from "lib/i18n/translations";
import { useLocationTranslations, usePhoneNumbers } from "entries/team/helpers";

interface IPersonTeaserProps {
  person: TeamDefaultEntry;
  variant?: "detailed" | "poster";
  className?: string;
}

export const PersonTeaser: FunctionComponent<IPersonTeaserProps> = ({
  person,
  variant,
  className,
}) => {
  switch (variant) {
    case "poster": {
      return <PosterPersonTeaser person={person} className={className} />;
    }
    case "detailed":
    default: {
      return <DetailedPersonTeaser person={person} className={className} />;
    }
  }
};

const DetailedPersonTeaser: FunctionComponent<IPersonTeaserProps> = ({
  person,
  className,
}) => {
  const {
    slug,
    employeeFirstName,
    employeeSurname,
    employeeEmail,
    employeeLocations,
    employeeImage,
  } = person;

  const translations = useTranslations(["more_about"]);
  const phoneNumbers = usePhoneNumbers();
  const locationTranslations = useLocationTranslations();
  const phoneNumber =
    phoneNumbers.find(
      (pn) => pn.city === locationTranslations[employeeLocations[0]]
    )?.phone || null;

  return (
    <Teaser className={className}>
      <div>
        <ImageArea>
          <Image
            src={employeeImage[0].url}
            layout="fill"
            objectFit="cover"
            alt={`Portrait ${employeeFirstName} ${employeeSurname}`}
          />
        </ImageArea>
        <ContactDetails>
          <PersonName variant="h3">
            {employeeFirstName} {employeeSurname}
          </PersonName>
          <a href={`mailto:${employeeEmail}`}>
            <p style={{ marginBottom: 0 }}>{employeeEmail}</p>
          </a>
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`}>
              <p>{phoneNumber}</p>
            </a>
          )}
        </ContactDetails>
      </div>
      <Link href={`team/${slug}`} passHref>
        <StyledDenseButtonLink variant="contained">
          {translations["more_about"]} {employeeFirstName}
        </StyledDenseButtonLink>
      </Link>
    </Teaser>
  );
};

const Teaser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  max-height: 330px;
  background-color: ${colors.default.lightBackgroundColor};
`;

const ContactDetails = styled.div`
  margin-top: ${spacing.base};
  color: ${colors.default.primaryColor};

  p {
    margin-top: ${spacing.half};
  }
`;

const PersonName = styled(Typography)`
  font-weight: 600;
`;

const StyledDenseButtonLink = styled(DenseButtonLink)`
  ${breakpointQuery.smUp} {
    width: fit-content;
  }
`;

const PosterPersonTeaser: FunctionComponent<IPersonTeaserProps> = ({
  person,
  className,
}) => {
  const { slug, employeeFirstName, employeeSurname, employeeImage } = person;

  return (
    <PosterTeaser className={className}>
      <Link href={`team/${slug}`} passHref>
        <a>
          <PosterImageArea>
            <StyledPosterImage
              src={employeeImage[0].url}
              layout="fill"
              objectFit="cover"
              alt={`Portrait ${employeeFirstName} ${employeeSurname}`}
            />
            <PersonTeaserGradientOverlay />
            <PosterContactDetails variant="h2">
              {employeeFirstName} {employeeSurname}
            </PosterContactDetails>
          </PosterImageArea>
        </a>
      </Link>
    </PosterTeaser>
  );
};

const PosterTeaser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PosterImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  max-height: 500px;
  background-color: ${colors.default.lightBackgroundColor};
`;

const PosterContactDetails = styled(Typography)`
  color: ${colors.default.white};
  position: absolute;
  bottom: ${spacing.huge};
  left: ${spacing.huge};
  line-height: unset;
`;

export const PersonTeaserGradientOverlay = styled.div`
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(31, 71, 118, 0.4) 0%,
    rgba(0, 212, 255, 0) 50%
  );
`;

const StyledPosterImage = styled(Image)`
  transition: transform 200ms ease-in-out;

  ${PosterTeaser}:hover & {
    transform: scale(1.05);
  }
`;
