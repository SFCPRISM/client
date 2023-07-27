import { useDrag } from "@use-gesture/react";
import { useIsTouchDevice } from "lib/media-queries/useIsDevice";
import { useEffect, useRef } from "react";
import { useCarouselContext } from "../../carouselContext";
import { animateScroll } from "../stage/useAnimateScroll";

/** The minimal drag distance to switch to the next slide */
const MINIMAL_SWIPE_DISTANCE = 10;

/** Adds a touch scroll like behaviour for mouse users */
export const useDesktopSwipeScroll = (
  target: React.MutableRefObject<HTMLElement | null>
): void => {
  const isTouchDevice = useIsTouchDevice(true);
  const initialContainerMeasurements = useRef<{
    scrollLeft?: number;
    scrollWidth?: number;
  }>({}).current;
  const { slideCount, activeIndex, inViewIndex } = useCarouselContext();
  const registerCleanup = useRegisterCleanup();

  useDrag(
    async ({ movement: [mx], down }) => {
      const container = target.current;
      if (!container) {
        return;
      }
      const { scrollLeft, scrollWidth } = initialContainerMeasurements;
      const initialScroll = !(
        scrollLeft !== undefined && scrollWidth !== undefined
      );

      if (initialScroll) {
        initialContainerMeasurements.scrollLeft = container.scrollLeft;
        initialContainerMeasurements.scrollWidth = container.scrollWidth;
        container.style.scrollSnapType = "none";
      } else {
        container.scrollLeft = scrollLeft - mx;
      }

      // Drag Release
      if (!down) {
        initialContainerMeasurements.scrollLeft = undefined;
        initialContainerMeasurements.scrollWidth = undefined;
        // Ignore scrolls without moving distance
        if (initialScroll || Math.abs(mx) < MINIMAL_SWIPE_DISTANCE) {
          container.style.removeProperty("scroll-snap-type");
          return;
        }
        const scrollSnapDistance = scrollWidth / slideCount / 2;
        // Swipes (if a user did not scroll to next slide but at least MINIMAL_SWIPE_DISTANCE)
        // will lead to the next slide
        // Drags (if a user did scroll at least one slide)
        // will lead to the current slide in view
        const indexToScrollTo =
          Math.abs(mx) < scrollSnapDistance
            ? activeIndex - Math.sign(mx)
            : inViewIndex;

        // Scroll to the final position
        const [animationDone, cleanup] = animateScroll(
          container,
          indexToScrollTo / slideCount,
          300
        );
        const rewokeCleanup = registerCleanup(cleanup);

        await animationDone;
        container.style.removeProperty("scroll-snap-type");
        rewokeCleanup();
      }
    },
    {
      target,
      axis: "x",
      // This will probably fail for touch devices with mouse:
      enabled: !isTouchDevice,
      preventDefault: true,
      eventOptions: { passive: false },
      filterTaps: true,
    }
  );
};

/** Execute the given function on unmount */
const useRegisterCleanup = (): ((cleanup: () => void) => () => boolean) => {
  const cleanupRef = useRef<Set<() => void>>(new Set());
  useEffect(() => {
    return () => {
      cleanupRef.current.forEach((cleanup) => cleanup());
    };
  }, []);
  return (cleanup: () => void) => {
    const cleanupHandlers = cleanupRef.current;
    cleanupHandlers.add(cleanup);
    return () => cleanupHandlers.delete(cleanup);
  };
};
