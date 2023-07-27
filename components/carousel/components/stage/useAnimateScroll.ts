import { useRef, useState } from "react";
import { useRefEffect } from "react-use-ref-effect";

const knownElements = new WeakSet<Element>();
const noop = () => {
  /* noop */
};

/**
 * Animates the referenced elment horizontally over the given duration
 *
 * This is a workaround as Element.protoype.scrollTo does not allow
 * to specify a duration and does not tell once the scrolling is done
 */
export const useAnimateScroll = <TElement extends HTMLElement>(
  duration: number
) => {
  const [scrollChangeSource, setScrollChangeSource] = useState<{
    active?: undefined | "controlled" | "user";
    completed?: undefined | "controlled" | "user";
  }>({});

  const [relativeScrollTargetValue, setRelativeScrollTargetValue] = useState<
    undefined | number
  >();

  const isScrollingRef = useRef(scrollChangeSource);
  isScrollingRef.current = scrollChangeSource;

  const ref = useRefEffect(
    (element: TElement) => {
      const animationEffect = () => {
        if (relativeScrollTargetValue === undefined) {
          return noop;
        }
        if (!knownElements.has(element)) {
          knownElements.add(element);
          // Don't scroll new elements to a scroll position of 0
          // to prevent necessary layout recalculations
          if (relativeScrollTargetValue === 0) {
            return noop;
          }
        }
        setScrollChangeSource({
          active: "controlled",
        });
        const [animationPromise, cleanup] = animateScroll(
          element,
          relativeScrollTargetValue,
          duration
        );
        animationPromise.then(() => {
          setScrollChangeSource({
            completed: "controlled",
          });
        });
        return () => {
          cleanup();
        };
      };

      const onScrollEffect = () => {
        let timer: ReturnType<typeof setTimeout>;
        const scrollHandler = () => {
          clearTimeout(timer);
          if (!isScrollingRef.current.active) {
            setScrollChangeSource({
              active: "user",
            });
          }
          timer = setTimeout(() => {
            if (isScrollingRef.current.active === "user") {
              setScrollChangeSource({
                completed: "user",
              });
            }
          }, 100);
        };
        element.addEventListener("scroll", scrollHandler, { passive: true });
        return () => {
          element.removeEventListener("scroll", scrollHandler);
          clearTimeout(timer);
        };
      };

      const animationCleanup = animationEffect();
      const onScrollCleanup = onScrollEffect();

      return () => {
        animationCleanup();
        onScrollCleanup();
      };
    },
    [relativeScrollTargetValue]
  );

  return [ref, setRelativeScrollTargetValue, scrollChangeSource] as const;
};

export const animateScroll = (
  domEl: HTMLElement,
  relativeScrollTargetValue: number,
  duration: number
): readonly [Promise<void>, () => void] => {
  let raf: number | undefined;
  let disabledSnapScrolling = false;

  const cleanup = () => {
    if (disabledSnapScrolling) {
      domEl.style.removeProperty("scroll-snap-type");
      domEl.style.removeProperty("pointer-events");
      disabledSnapScrolling = false;
    }
    if (raf) {
      cancelAnimationFrame(raf);
    }
  };

  const animationPromise = new Promise<void>((onAnimationComplete) => {
    const startAnimation = (startTimeStamp: number) => {
      const endTimeStamp = startTimeStamp + duration;
      const startValue = domEl.scrollLeft;
      const targetValue = Math.floor(
        domEl.scrollWidth * relativeScrollTargetValue
      );
      const delta = targetValue - startValue;
      let animationDone = delta === 0;
      if (!animationDone) {
        disabledSnapScrolling = true;
        domEl.style.scrollSnapType = "none";
        domEl.style.pointerEvents = "none";
      }

      function draw(now: number) {
        if (animationDone) {
          onAnimationComplete();
          return;
        }
        if (now >= endTimeStamp) {
          animationDone = true;
          cleanup();
        }
        // if the animation took longer than the duration we need to cap progress to 100%
        const progress = Math.min((now - startTimeStamp) / duration, 1);
        const progressWithEasing = easeOutCubic(progress);
        const newValue =
          startValue + (targetValue - startValue) * progressWithEasing;
        domEl.scrollLeft = newValue;
        raf = requestAnimationFrame(draw);
      }

      draw(startTimeStamp);
    };
    raf = requestAnimationFrame(startAnimation);
  });

  return [animationPromise, cleanup] as const;
};

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}
