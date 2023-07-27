import { Col, Grid, Row } from "components/layout/Grid";
import { BlogTeaser } from "components/teaser/BlogTeaser";
import { Typography } from "components/typography/Typography";
import { DenseButtonLink } from "components/ui/button/ButtonLink";
import {
  BlogContentAssetBlockType,
  BlogContentFileBlockType,
  BlogContentLinkBlockType,
  BlogContentMatrixField,
  BlogContentTextBlockType,
  BlogDefaultEntry,
} from "lib/graphql/types/generated";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useGetBlogEntriesQuery } from "./blog.generated";
import { ImageGalery } from "./ImageGalery";
interface IBlogEntryProps {
  entry: BlogDefaultEntry;
}

export const BlogEntry: FunctionComponent<IBlogEntryProps> = ({ entry }) => {
  const localizationId = useLocalizationId();
  const translations = useTranslations([
    "more_interesting_articles",
    "show_all",
  ]);
  const { data } = useGetBlogEntriesQuery(
    { limit: 4, localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  return (
    <Entry>
      <Grid>
        <Row>
          <Col md={8} centered>
            <Intro>
              <p>
                {entry.postDate} –{" "}
                {entry.blogCategories?.map((category) => category.title)}
              </p>
              <h1>{entry.title}</h1>
              <hr />
            </Intro>
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Content md={8} centered>
            {entry.blogContent.map((block, index) =>
              renderBlogContentBlock(
                block as BlogContentMatrixFieldWithTypeName,
                `blog-content-block:${index}`,
                index
              )
            )}
          </Content>
        </Row>
      </Grid>
      <More>
        <Grid>
          <MoreHeader>
            <Typography variant="h2">
              {translations["more_interesting_articles"]}
            </Typography>
            <br />
            <Link href="/blog">
              <a>{translations["show_all"]}</a>
            </Link>
          </MoreHeader>
          {data?.entries.length ? (
            <Row>
              {data?.entries.map(
                (anotherEntry) =>
                  anotherEntry.__typename === "blog_default_Entry" &&
                  anotherEntry.id !== entry.id && (
                    <Col key={anotherEntry.id} xs={12} md={6} lg={4} xl={3}>
                      <BlogTeaser {...anotherEntry} />
                    </Col>
                  )
              )}
            </Row>
          ) : null}
        </Grid>
      </More>
    </Entry>
  );
};

const Entry = styled.div`
  border-top: 2px solid ${colors.default.lightBackgroundColor};
`;

export const BlogEntrySkeleton: FunctionComponent = () => {
  return (
    <Entry>
      <Grid>
        <Row>
          <Col md={8} centered>
            <Intro>
              <p>&nbsp;</p>
              <h1
                style={{
                  backgroundColor:
                    colors.default.primaryColorLighten96.toString(),
                }}
              >
                &nbsp;
              </h1>
              <hr />
            </Intro>
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Content
            md={8}
            centered
            style={{
              minHeight: "1000px",
            }}
          ></Content>
        </Row>
      </Grid>
    </Entry>
  );
};

type BlogContentMatrixFieldWithTypeName = BlogContentMatrixField & {
  __typename: string;
};

const renderBlogContentBlock = (
  block: BlogContentMatrixField & { __typename: string },
  key: string | number,
  blockIndex?: number
) => {
  switch (block.__typename) {
    case "blogContent_text_BlockType": {
      const { sectionTitle, text } = block as BlogContentTextBlockType;
      return (
        <section key={key}>
          {sectionTitle && <h2>{sectionTitle}</h2>}
          <SanitizedHtml html={text} />
        </section>
      );
    }
    case "blogContent_asset_BlockType": {
      const { image, caption, size, title } =
        block as BlogContentAssetBlockType;

      if (image.length > 1) {
        return (
          <section key={key}>
            <ImageGalery images={image} title={caption ?? title} />
          </section>
        );
      }

      return image.map((img, index) => {
        if (!img?.url || index > 0) {
          return null;
        }

        return (
          <section key={`${img.url}:${key}`}>
            <ImageArea size={size as "S" | "M" | "L"}>
              <Image
                src={img.url}
                alt={caption ?? title}
                layout="responsive"
                objectFit="scale-down"
                width={img.width}
                height={img.height}
                priority={blockIndex === 0}
              />
            </ImageArea>
            <div>
              <small>{caption}</small>
            </div>
          </section>
        );
      });
    }
    case "blogContent_file_BlockType": {
      const { file } = block as BlogContentFileBlockType;
      return (
        <section key={key}>
          <small style={{ color: "lightgrey" }}>
            TODO: handle files: {file.map((file) => `${file.filename}, `)}
          </small>
        </section>
      );
    }
    case "blogContent_link_BlockType": {
      const { linkUrl, linkText, description } =
        block as BlogContentLinkBlockType;
      return (
        <section key={key}>
          <p>{description}</p>
          <Link href={linkUrl} passHref>
            <DenseButtonLink variant="contained" target="_blank">
              {linkText}
            </DenseButtonLink>
          </Link>
        </section>
      );
    }
  }
};

const More = styled.div`
  background-color: ${colors.default.lightBackgroundColor};
  margin-top: 200px;
  padding: 0 24px 100px;
`;

const Intro = styled.div`
  margin: ${spacing.giant} 0 0;
  color: ${colors.default.primaryColor};

  ${breakpointQuery.smDown} {
    padding: 0 24px;
  }

  & h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
  }
`;

const Content = styled(Col)`
  ${breakpointQuery.smDown} {
    padding: 0 24px;
  }

  & section:first-child {
    margin-top: ${spacing.grande};
  }
  & section:last-child {
    margin-bottom: ${spacing.giant};
  }

  section {
    color: ${colors.default.primaryColor};
    margin: ${spacing.huge} 0;
  }

  & h2 {
    font-size: 30px;
    line-height: 45px;
    font-weight: 600;

    ${breakpointQuery.smDown} {
      font-size: 20px;
      line-height: 28px;
    }

    margin-bottom: ${spacing.medium};
  }
`;

const ImageArea = styled.div<{ size: "S" | "M" | "L" }>`
  position: relative;
  width: 100%;
  height: auto;
  padding: ${({ size }) =>
    size === "S" ? "0 20%" : size === "M" ? "0 10%" : 0};
`;

const MoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: ${spacing.giant} 0;
  color: ${colors.default.primaryColor};

  ${breakpointQuery.smDown} {
    flex-direction: column;
  }

  & h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
  }
`;
