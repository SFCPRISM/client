import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

export interface ICarouselContext {
  slides: ReactNode[];
  slideCount: number;
  activeIndex: number;
  goToIndex: (index: number) => void;
  inViewIndex: number;
  activeScrollAction: undefined | "controlled" | "user";
  setActiveScrollAction: (
    activeScrollAction: undefined | "controlled" | "user"
  ) => void;
  setInViewIndex: (index: number) => void;
  /** Wether the user is dragging the slides right now */
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
}

export const CarouselContext = createContext<ICarouselContext | null>(null);
CarouselContext.displayName = "CarouselContext";

export const useCarouselContext = (): ICarouselContext => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      `Carousel compound components cannot be rendered outside the <Carousel /> component`
    );
  }

  return context;
};
