import { colors } from "lib/theme/design-tokens/colors";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { spacing } from "lib/theme/design-tokens/spacing";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { Accordion } from "components/ui/accordion/Accordion";
import { Typography } from "components/typography/Typography";

interface IAccordeonTeaserProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
    layout: "fixed" | "fill" | "intrinsic" | "responsive";
  };
  link?: {
    text: string;
    url: string;
  };
  inverted?: boolean;
}

export const AccordeonTeaser: FunctionComponent<IAccordeonTeaserProps> = ({
  title,
  description,
  image,
  link,
  inverted,
}) => {
  return (
    <Teaser inverted={inverted}>
      {image && (
        <ImageArea inverted={inverted} objectFit={image.objectFit}>
          <Image
            layout={image.layout || "intrinsic"}
            objectFit={image.objectFit || "contain"}
            width={200}
            height={280}
            src={image.src}
            alt={image.alt}
          />
        </ImageArea>
      )}
      <StyledAccordion inverted={inverted} title={title}>
        {description && <Description inverted={inverted} html={description} />}
        {link?.url && (
          <Link href={link.url} passHref>
            <WebLink inverted={inverted}>{link.text}</WebLink>
          </Link>
        )}
      </StyledAccordion>
    </Teaser>
  );
};

const Teaser = styled.div<{ inverted: boolean }>`
  width: 100%;
  border-bottom: 1px solid
    ${({ inverted }) =>
      inverted ? colors.default.white : colors.default.primaryColor};
`;

const ImageArea = styled.div<{
  inverted: boolean;
  objectFit: IAccordeonTeaserProps["image"]["objectFit"];
}>`
  position: relative;
  height: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.default.white};

  ${({ objectFit }) =>
    objectFit === "scale-down" &&
    css`
      img {
        max-width: 160px !important;
      }
    `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ inverted }) =>
      inverted ? colors.default.lightBackgroundColor : colors.default.white};
  }
`;

const StyledAccordion = styled(Accordion)`
  margin-top: ${spacing.big};
  padding-bottom: ${spacing.medium};
  border-bottom: 1px solid ${colors.default.primaryColor};
`;

const StyledTypography = styled(Typography)<{ inverted: boolean }>`
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};
`;

const Description = styled(SanitizedHtml)<{ inverted: boolean }>`
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};
`;

const WebLink = styled.a<{ inverted: boolean }>`
  text-decoration: underline;
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};
`;
