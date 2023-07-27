import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "lib/theme/design-tokens/colors";
import { DenseButtonLink } from "components/ui/button/ButtonLink";
import { BlogTeaserFragment } from "entries/blog/blog.generated";
import { spacing } from "lib/theme/design-tokens/spacing";
import { useTranslations } from "lib/i18n/translations";

interface IBlogTeaserProps extends BlogTeaserFragment {
  className?: string;
}

export const BlogTeaser: FunctionComponent<IBlogTeaserProps> = (props) => {
  const {
    title,
    slug,
    postDate,
    blogTeaserDescription,
    blogTeaserImage,
    blogCategories,
    className,
  } = props;

  const translations = useTranslations(["read_more"]);

  return (
    <Teaser className={className}>
      <div>
        <ImageArea>
          <Image
            src={
              blogTeaserImage[0]?.url || "/static/images/stellenwerk-news.jpg"
            }
            layout="fill"
            objectFit="cover"
            alt={`${title}`}
          />
        </ImageArea>

        <TextArea>
          <Meta>
            {postDate} – {blogCategories?.map((category) => category.title)}
          </Meta>
          <h2>{title}</h2>
          <p>{blogTeaserDescription}</p>
        </TextArea>
      </div>
      <div>
        <Link href={`/blog/${slug}`} passHref>
          <DenseButtonLink variant="contained">
            {translations["read_more"]}
          </DenseButtonLink>
        </Link>
      </div>
    </Teaser>
  );
};

const Teaser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Meta = styled.p`
  margin-bottom: ${spacing.base};
`;

const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  max-height: 280px;
  background-color: ${colors.default.lightBackgroundColor};
  margin-bottom: ${spacing.base};
`;

const TextArea = styled.div`
  color: ${colors.default.primaryColor};
  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin: 0 0 4px;
  }
`;
