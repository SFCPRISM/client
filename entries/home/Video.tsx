import { breakpointQuery } from "lib/theme/breakpointQuery";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { useIsIdle } from "lib/lazy/useIsIdle";
import { colors } from "lib/theme/design-tokens/colors";
import { useInView } from "react-intersection-observer";
import Vimeo from "@u-wave/react-vimeo";

export const VideoContainer = styled.div`
  position: relative;
  width: calc(100% + 48px);
  margin-left: calc(24px * -1);
  margin-right: calc(24px * -1);
  margin-top: ${spacing.huge};
  background-color: ${colors.default.lightBackgroundColor};
  min-height: 300px;

  ${breakpointQuery.mdUp} {
    width: 100%;
    margin-top: ${spacing.giant};
    margin-right: 0;
    margin-left: 0;
  }
`;

/** @link https://github.com/u-wave/react-vimeo */
export const FullWidthVideo = ({ videoId }: { videoId: number }) => {
  const isIdle = useIsIdle();
  const { ref, inView } = useInView({ rootMargin: "500px", triggerOnce: true });

  return (
    <VideoArea ref={ref}>
      {isIdle && inView && (
        <Vimeo
          video={videoId}
          autoplay={false}
          showPortrait={false}
          background={false}
          showTitle={false}
          controls={true}
          responsive={true}
          showByline={false}
          pip={false}
          dnt={true}
          color="1F4776"
        />
      )}
    </VideoArea>
  );
};

const VideoArea = styled.div`
  height: 100%;
  width: 100%;
`;
