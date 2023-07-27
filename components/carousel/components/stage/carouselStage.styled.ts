import styled from "styled-components";

export const StageWrapper = styled.div`
  position: relative;
`;

export const StageContainer = styled.div`
  position: relative;
  height: 100%;
  user-select: none;
  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  touch-action: pan-x pan-y pinch-zoom;
  overscroll-behavior-x: contain;
`;

export const Item = styled.div`
  display: flex;
  flex: 0 0 0;
  align-items: center;
  justify-content: center;
  min-width: 100%;

  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
