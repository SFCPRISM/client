import { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCarouselContext } from "../../carouselContext";
import { LazyDesktopSwipeScroll } from "../desktopSwipeScroll/LazyDesktopSwipeScroll";
import { Item, StageContainer, StageWrapper } from "./carouselStage.styled";
import { useAnimateScroll } from "./useAnimateScroll";
import { useRequestAnimationFrameThrottle } from "./useRequestAnimationFramThrottle";

export const CarouselStage: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  smoothScroll?: boolean;
  onScrollFinished?: () => void;
  onSwipe?: (newIndex: number, previousIndex: number) => void;
}> = ({
  children,
  smoothScroll,
  className,
  containerClassName,
  onSwipe,
  onScrollFinished,
}) => {
  const {
    slides,
    slideCount,
    goToIndex,
    activeIndex,
    inViewIndex,
    setInViewIndex,
    setActiveScrollAction,
  } = useCarouselContext();

  const [containerRef, startAnimation, scrollAction] = useAnimateScroll(
    smoothScroll ? 300 : 1
  );

  useEffect(() => {
    setActiveScrollAction(scrollAction.active);
    if (scrollAction.completed && !scrollAction.active && onScrollFinished) {
      onScrollFinished();
    }
  }, [scrollAction]);

  /** store if a userScrollEnd was already processed */
  const processedLatestUserScrollRef = useRef(true);
  useEffect(() => {
    if (scrollAction.active) {
      // Remember that we will need to publish an event on scroll end
      if (scrollAction.active === "user") {
        processedLatestUserScrollRef.current = false;
      }
      // wait until no scroll is active
      return;
    }
    if (activeIndex === inViewIndex) {
      if (scrollAction.completed === "user") {
        // mark that this effect processed the scroll event
        processedLatestUserScrollRef.current = true;
      }
      // ignore changes if slides are already correctly aligned
      return;
    }
    // if the missmatch was caused by a user scroll slide changed event
    if (
      scrollAction.completed === "user" &&
      !processedLatestUserScrollRef.current
    ) {
      processedLatestUserScrollRef.current = true;
      goToIndex(inViewIndex);
      if (onSwipe) {
        onSwipe(inViewIndex, activeIndex);
      }
      return;
    }
    // If a new position was received without a user scroll start a animation
    // to the new position
    setInViewIndex(activeIndex);
    startAnimation(activeIndex / slideCount);
  }, [scrollAction, activeIndex, inViewIndex]);

  const throttledSetInView = useRequestAnimationFrameThrottle(
    (index: number) => {
      setInViewIndex(index);
    }
  );

  return (
    <StageWrapper className={className}>
      <LazyDesktopSwipeScroll containerRef={containerRef} />
      <StageContainer className={containerClassName} ref={containerRef}>
        {slides.map((slide, index) => (
          <SlideWrapper
            onActivate={() => throttledSetInView(index)}
            key={index}
            label={`Slide ${index + 1} of ${slideCount}`}
          >
            {slide}
          </SlideWrapper>
        ))}
      </StageContainer>
      {children}
    </StageWrapper>
  );
};

const SlideWrapper: FunctionComponent<{
  children?: ReactNode;
  label: string;
  onActivate: () => void;
}> = ({ children, label, onActivate }) => {
  const { ref, inView } = useInView({ threshold: 0.51 });
  useEffect(() => {
    if (inView) {
      onActivate();
    }
  }, [inView, onActivate]);
  return (
    <Item
      onFocusCapture={(event) => {
        // Navigate to slide only if Focus was caused by Tab Key
        // otherwise right clicks would also jump to a slide
        if (event.target.matches(":focus-visible")) {
          onActivate();
        }
      }}
      ref={ref}
      aria-roledescription="slide"
      aria-label={label}
    >
      {children}
    </Item>
  );
};
