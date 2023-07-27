import { Children, forwardRef, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { CarouselContext } from "./carouselContext";

interface ICarouselProps {
  slides: ReactNode[];
  className?: string;
  /**
   * If activeIndex is undefined the carousel will provide
   * its own statemanagement for active index
   */
  activeIndex?: number;
  onSlideChange?: (index: number) => void;
  children: ReactNode;
}

export const Carousel = forwardRef<HTMLDivElement, ICarouselProps>(
  (
    {
      slides,
      children,
      activeIndex: controlledIndex,
      className,
      onSlideChange,
    },
    containerRef
  ) => {
    const [activeIndex, setActiveIndex] = useState(controlledIndex || 0);
    const [isDragging, setIsDragging] = useState(false);
    const slideCount = Children.count(slides);
    const [inViewIndex, setInViewIndex] = useState(activeIndex);
    const [activeScrollAction, setActiveScrollAction] = useState<
      undefined | "controlled" | "user"
    >();

    const goToIndex = (newIndex: number) => {
      setActiveIndex(newIndex);
      if (onSlideChange) {
        onSlideChange(newIndex);
      }
    };
    useEffect(() => {
      if (controlledIndex !== undefined) {
        setActiveIndex(controlledIndex);
      }
    }, [controlledIndex]);

    return (
      <CarouselContext.Provider
        value={{
          slides,
          slideCount,
          activeIndex,
          goToIndex,
          isDragging,
          setIsDragging,
          inViewIndex,
          setInViewIndex,
          activeScrollAction,
          setActiveScrollAction,
        }}
      >
        <Container
          ref={containerRef}
          className={className}
          aria-label="Carousel"
          aria-roledescription="carousel"
        >
          {children}
        </Container>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const Container = styled.section`
  position: relative;
`;
