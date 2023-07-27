import { colors } from "lib/theme/design-tokens/colors";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import Image from "next/image";
import { spacing } from "lib/theme/design-tokens/spacing";
import { breakpointQuery } from "lib/theme/breakpointQuery";

interface ICallToActionBannerProps {
  title: string;
  actions: ReactNode[];
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export const CallToActionBanner: FunctionComponent<
  ICallToActionBannerProps
> = ({ title, actions, description, image, className }) => {
  return (
    <Banner className={className}>
      {image && (
        <BannerImageArea>
          <Image
            layout="fill"
            objectFit="cover"
            src={image.src}
            alt={image.alt}
          />
        </BannerImageArea>
      )}
      <TextArea>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        <Actions>{actions.map((action) => action)}</Actions>
      </TextArea>
    </Banner>
  );
};

const Banner = styled.div`
  background-color: ${colors.default.primaryColor};
  display: flex;
  width: 100%;
  flex-direction: column;

  ${breakpointQuery.mdUp} {
    flex-direction: row;
  }
`;

const BannerImageArea = styled.div`
  position: relative;
  min-height: 500px;
  width: 100%;
  background-color: ${colors.default.lightBackgroundColor};

  ${breakpointQuery.mdUp} {
    width: 45%;
  }
`;

const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.giant} ${spacing.base};

  ${breakpointQuery.mdUp} {
    width: 60%;
    padding: 0 ${spacing.giant};
  }
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  font-weight: 600;
  color: ${colors.default.white};
  margin-bottom: ${spacing.big};
`;

const Description = styled.p`
  color: ${colors.default.white};
  margin-bottom: ${spacing.giant};
`;

const Actions = styled.div`
  &:not(:last-child) {
    margin-bottom: ${spacing.medium};

    ${breakpointQuery.smUp} {
      margin-right: ${spacing.medium};
    }
  }
`;
