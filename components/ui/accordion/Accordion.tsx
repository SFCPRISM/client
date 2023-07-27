import { Typography } from "components/typography/Typography";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent, ReactNode, useState } from "react";
import styled, { css } from "styled-components";

interface IAccordionProps {
  title: string | ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  inverted?: boolean;
  boldTitle?: boolean;
  className?: string;
}

export const Accordion: FunctionComponent<IAccordionProps> = ({
  title,
  children,
  isOpen: initialState = false,
  inverted = false,
  boldTitle = true,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return (
    <div className={className}>
      <Summary onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {typeof title === "string" ? (
          <Title variant="h3" isInverted={inverted} isBold={boldTitle}>
            {title}
          </Title>
        ) : (
          title
        )}
        <AccordionIndicator isOpen={isOpen} inverted={inverted} />
      </Summary>
      {isOpen && children}
    </div>
  );
};

const Summary = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 1fr 40px;
  width: 100%;
  cursor: pointer;
  ${({ isOpen }) => isOpen && `margin-bottom: ${spacing.huge};`}
`;

const Title = styled(Typography)<{ isInverted: boolean; isBold: boolean }>`
  ${({ isInverted }) =>
    `color: ${
      isInverted ? colors.default.white : colors.default.primaryColor
    };`}
  ${({ isBold }) => isBold && `font-weight: 600;`}
  padding-right: ${spacing.base};
`;

const indicatorStrokeWidth = 20;

export const AccordionIndicator = styled.div<{
  isOpen: boolean;
  inverted?: boolean;
}>`
  position: relative;
  width: ${indicatorStrokeWidth * 2}px;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 17px;
    top: 25%;
    display: block;
    width: ${indicatorStrokeWidth}px;
    height: 1px;
    background-color: ${({ inverted }) =>
      inverted ? colors.default.white : colors.default.primaryColor};
    transition-property: background-color, transform;
    transition-duration: 300ms;
    @media (prefers-reduced-motion) {
      transition-duration: 0ms;
    }
  }

  &:before {
    transform: translateY(${indicatorStrokeWidth / 3}px) rotate(45deg);
    margin-left: -13px;
  }
  &:after {
    transform: translateY(${indicatorStrokeWidth / 3}px) rotate(-45deg);
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &:before {
        transform: translateY(${indicatorStrokeWidth / 3}px) rotate(-45deg);
      }
      &:after {
        transform: translateY(${indicatorStrokeWidth / 3}px) rotate(45deg);
      }
    `}
`;
