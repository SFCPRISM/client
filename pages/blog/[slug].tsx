import { BlogEntry, BlogEntrySkeleton } from "entries/blog/Blog.entry";
import { useGetBlogEntryBySlugQuery } from "entries/blog/blog.generated";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSocialMetaTags } from "lib/seo/meta/social";

const BlogEntryPage = () => {
  const {
    query: { slug },
  } = useRouter();
  const localizationId = useLocalizationId();
  const { data } = useGetBlogEntryBySlugQuery(
    { slug: [slug as string], localizationId: [localizationId] },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: typeof slug === "string",
    }
  );
  const translations = useTranslations([
    "blog_title:p1",
    "blog_title:p2",
    "seo_blog_description",
  ]);

  if (data?.entry?.__typename !== "blog_default_Entry") {
    return <BlogEntrySkeleton />;
  }

  if (typeof slug !== "string") {
    return <BlogEntrySkeleton />;
  }

  return (
    <>
      <Head>
        <title>Stellenwerk Blog - {data.entry.title}</title>
        <meta name="description" content={data.entry.blogTeaserDescription} />
        {getSocialMetaTags(
          `Stellenwerk Blog - ${data.entry.title}`,
          translations["seo_blog_description"]
        )}
      </Head>
      <BlogEntry entry={data.entry} />
    </>
  );
};

export default BlogEntryPage;
