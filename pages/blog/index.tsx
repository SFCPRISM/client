import { HeroImage } from "components/hero/HeroImage";
import { PageIntro } from "components/layout/PageIntro";
import { Blog } from "entries/blog/Blog";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import Head from "next/head";
import styled from "styled-components";

const BlogPage = () => {
  const translations = useTranslations([
    "blog_title:p1",
    "blog_title:p2",
    "seo_blog_description",
  ]);
  return (
    <>
      <Head>
        <title>Stellenwerk - Blog</title>
        <meta
          name="description"
          content={translations["seo_blog_description"]}
        />
      </Head>
      <HeroImage src="/static/images/hero-3.png" />
      <PageIntro
        title={
          <strong>
            {translations["blog_title:p1"]} <LineBreak />
            {translations["blog_title:p2"]}
          </strong>
        }
      />
      <StyledBlog />
    </>
  );
};
const StyledBlog = styled(Blog)`
  padding-bottom: 200px;
`;

const LineBreak = styled.br`
  ${breakpointQuery.smDown} {
    display: none;
  }
`;

export default BlogPage;
