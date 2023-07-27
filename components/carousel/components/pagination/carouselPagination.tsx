import { FunctionComponent } from "react";
import { useCarouselContext } from "../../carouselContext";
import { Indicator, Item, Pagination } from "./carouselPagination.styled";

export const CarouselPagination: FunctionComponent<{
  onDotClick?: (index: number) => void;
  className?: string;
}> = ({ onDotClick, className }) => {
  const { goToIndex, slideCount, inViewIndex } = useCarouselContext();

  if (!slideCount) {
    return null;
  }

  const dots = Array.from(Array(slideCount));

  if (dots.length <= 1) {
    return null;
  }

  return (
    <Pagination className={className}>
      {dots.map((_, index) => (
        <Item key={index}>
          <Indicator
            isActive={inViewIndex === index}
            onClick={() => {
              goToIndex(index);
              if (onDotClick) {
                onDotClick(index);
              }
            }}
            aria-label={
              inViewIndex === index
                ? `Carousel page ${index + 1}`
                : `Got to carousel page ${index + 1}`
            }
            aria-pressed={inViewIndex === index}
            tabIndex={-1}
          />
        </Item>
      ))}
    </Pagination>
  );
};
