import { FunctionComponent } from "react";
import { useDesktopSwipeScroll } from "./useDesktopSwipeScroll";

export const DesktopSwipeScroll: FunctionComponent<{
  containerRef: React.MutableRefObject<HTMLElement | null>;
}> = ({ containerRef }) => {
  useDesktopSwipeScroll(containerRef);
  return null;
};
