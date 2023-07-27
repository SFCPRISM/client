import { IconArrowRight } from "icons/general/generalIcons";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { BreakpointNames } from "lib/theme/breakpoints";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ISectionIntroProps {
  title: string | ReactNode;
  link?: {
    text: string;
    href: string;
  };
  className?: string;
  inverted?: boolean;
}

export const SectionIntro: FunctionComponent<ISectionIntroProps> = ({
  title,
  link,
  className,
  inverted = false,
}) => {
  return (
    <Container className={className}>
      <div>{title}</div>
      {link && (
        <Link href={link.href} passHref>
          <More inverted={inverted}>
            {link.text}
            <IconContainer>
              <IconArrowRight width={20} height={12} />
            </IconContainer>
          </More>
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  color: ${colors.default.primaryColor};

  ${breakpointQuery.mdUp} {
    align-items: flex-end;
    flex-direction: row;
  }
`;

const More = styled.a<{ inverted: boolean }>`
  font-size: 20px;
  line-height: unset;
  color: ${({ inverted }) =>
    inverted ? colors.default.white : colors.default.primaryColor};
  margin: 0;

  &:hover {
    color: ${({ inverted }) =>
      inverted ? colors.default.white : colors.default.primaryColorLighten8};
  }

  ${breakpointQuery.smDown} {
    margin-top: ${spacing.medium};
    display: none;
  }
`;

const IconContainer = styled.span`
  margin-left: ${spacing.smallerBaseVertical};
  line,
  path {
    stroke-width: 3;
  }
`;
