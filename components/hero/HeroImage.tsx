import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";

export const HeroImage: FunctionComponent<{
  src: string;
  className?: string;
}> = ({ src, className }) => {
  return (
    <HeroImageContainer className={className}>
      <Image
        alt="job banner"
        src={src}
        layout="fill"
        objectFit="cover"
        priority
      />
    </HeroImageContainer>
  );
};

const HeroImageContainer = styled.div`
  position: relative;
  height: 425px;
  width: 100%;
  background-color: ${colors.default.secondaryColor};

  ${breakpointQuery.smDown} {
    height: 220px;
  }
`;
