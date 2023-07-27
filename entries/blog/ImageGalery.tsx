import { AssetInterface } from "lib/graphql/types/generated";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import styled from "styled-components";
import { colors } from "lib/theme/design-tokens/colors";

interface IImageGaleryProps {
  images: readonly AssetInterface[];
  title: string;
  lightboxEnabled?: boolean;
}

interface IGalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  original: string;
  caption: string;
}

export const ImageGalery: FunctionComponent<IImageGaleryProps> = ({
  images,
  title,
  lightboxEnabled = true,
}) => {
  const [galleryImages] = useState<IGalleryImage[]>(() =>
    images.map((img, index) => {
      if (!img?.url) {
        return null;
      }

      return {
        src: img.url,
        width: img.width / 10,
        height: img.height / 10,
        alt: `${title} ${index}`,
        original: img.url,
        caption: "",
      };
    })
  );
  const [photoIndex, setPhotoIndex] = useState(-1);
  const currentImage = galleryImages[photoIndex];
  const nextIndex = (photoIndex + 1) % galleryImages.length;
  const nextImage = galleryImages[nextIndex] || currentImage;
  const prevIndex =
    (photoIndex + galleryImages.length - 1) % galleryImages.length;
  const prevImage = galleryImages[prevIndex] || currentImage;

  const handleClose = () => setPhotoIndex(-1);
  const handleMovePrev = () => setPhotoIndex(prevIndex);
  const handleMoveNext = () => setPhotoIndex(nextIndex);

  return (
    <>
      <ImageGrid>
        {galleryImages.map((img, index) => {
          if (!img) {
            return null;
          }

          return (
            <ImageGridItem
              key={`${img.src}:${index}`}
              onClick={() => setPhotoIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout="intrinsic"
                objectFit="scale-down"
                width={img.width}
                height={img.height}
              />
            </ImageGridItem>
          );
        })}
      </ImageGrid>

      {lightboxEnabled && Boolean(currentImage) && (
        <Lightbox
          mainSrc={currentImage.original}
          nextSrc={nextImage.original}
          prevSrc={prevImage.original}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  );
};

const ImageGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageGridItem = styled.div`
  cursor: pointer;
  flex: 1 0 33%;
  margin: ${spacing.small};
  img {
    background-color: ${colors.default.lightBackgroundColor};
  }

  ${breakpointQuery.smDown} {
    margin: ${spacing.small} 0;
    flex: 1 1 100%;
  }
`;
