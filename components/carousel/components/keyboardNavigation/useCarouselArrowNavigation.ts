import { useEffect } from "react";

export const useCarouselArrowNavigation = (
  activeIndex: number,
  goToIndex: (newIndex: number) => void,
  slideCount: number,
  enabled: boolean
) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      const direction =
        event.code === "ArrowLeft" ? -1 : event.code === "ArrowRight" ? 1 : 0;
      if (!direction) {
        return;
      }
      const newIndex = Math.min(
        slideCount - 1,
        Math.max(0, activeIndex + direction)
      );
      goToIndex(newIndex);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [slideCount, activeIndex, enabled]);
};
