import { useLoadOnClientSide } from "lib/lazy/useLoadOnClientSide";
import { useIsTouchDevice } from "lib/media-queries/useIsDevice";
import { FunctionComponent } from "react";

const loadDesktopSwipeScroll = () =>
  import(/* webpackChunkName: "DesktopSwipeScroll" */ "./DesktopSwipeScroll");

export const LazyDesktopSwipeScroll: FunctionComponent<{
  containerRef: React.MutableRefObject<HTMLElement | null>;
}> = ({ containerRef }) => {
  const isTouchDevice = useIsTouchDevice(true);
  const LazyModule = useLoadOnClientSide(loadDesktopSwipeScroll, null, {
    skip: isTouchDevice,
  });
  return (
    LazyModule && <LazyModule.DesktopSwipeScroll containerRef={containerRef} />
  );
};
