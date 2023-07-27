import { IconArrowLeft, IconArrowRight } from "icons/general/generalIcons";
import { FunctionComponent } from "react";
import { useCarouselContext } from "../../carouselContext";
import {
  NavButton,
  NavButtonNext,
  NavButtonPrev,
} from "./carouselButtons.styled";

interface ICarouselButtonProps {
  className?: string;
  onClick?: (index: number) => void;
  iconProps?: {
    width?: number;
    height?: number;
  };
}

export const CarouselButtonPrev: FunctionComponent<ICarouselButtonProps> = ({
  className,
  onClick,
  iconProps,
}) => {
  const { slideCount, activeIndex, goToIndex } = useCarouselContext();

  if (slideCount <= 1) {
    return null;
  }

  return (
    <NavButton
      className={className}
      onClick={() => {
        const newIndex = activeIndex === 0 ? slideCount - 1 : activeIndex - 1;
        goToIndex(newIndex);
        if (onClick) {
          onClick(newIndex);
        }
      }}
      tabIndex={-1}
      aria-label={"Show previous carousel slide"}
    >
      <IconArrowLeft width={36} height={24} {...iconProps} />
    </NavButton>
  );
};

export const CarouselButtonNext: FunctionComponent<ICarouselButtonProps> = ({
  className,
  onClick,
  iconProps,
}) => {
  const { slideCount, activeIndex, goToIndex } = useCarouselContext();

  if (slideCount <= 1) {
    return null;
  }

  return (
    <NavButton
      className={className}
      onClick={() => {
        const newIndex = activeIndex === slideCount - 1 ? 0 : activeIndex + 1;
        goToIndex(newIndex);
        if (onClick) {
          onClick(newIndex);
        }
      }}
      tabIndex={-1}
      aria-label={"Show next carousel slide"}
    >
      <IconArrowRight width={36} height={24} {...iconProps} />
    </NavButton>
  );
};
