// Generated File. Do not change it manually!
/* eslint-disable */
/* eslint-enable unused-imports/no-unused-imports */
import * as Types from 'lib/graphql/types/generated';

import { useQuery, UseQueryOptions } from 'react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://cms.stellenwerk.ch/api", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json","Accept":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type GetBlogEntriesQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetBlogEntriesQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename: 'blog_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined, readonly postDate?: any | null | undefined, readonly blogTeaserDescription?: string | null | undefined, readonly blogTeaserImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly filename?: string | null | undefined, readonly height?: number | null | undefined, readonly width?: number | null | undefined } | null | undefined> | null | undefined, readonly blogCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined };

export type BlogTeaserFragment = { readonly __typename: 'blog_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined, readonly postDate?: any | null | undefined, readonly blogTeaserDescription?: string | null | undefined, readonly blogTeaserImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly filename?: string | null | undefined, readonly height?: number | null | undefined, readonly width?: number | null | undefined } | null | undefined> | null | undefined, readonly blogCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | null | undefined> | null | undefined };

export type GetBlogEntryBySlugQueryVariables = Types.Exact<{
  slug?: Types.Maybe<ReadonlyArray<Types.Maybe<Types.Scalars['String']>>>;
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetBlogEntryBySlugQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename: 'blog_default_Entry', readonly title?: string | null | undefined, readonly id?: string | null | undefined, readonly postDate?: any | null | undefined, readonly blogTeaserDescription?: string | null | undefined, readonly blogTeaserImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly filename?: string | null | undefined, readonly height?: number | null | undefined, readonly width?: number | null | undefined } | null | undefined> | null | undefined, readonly blogCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined, readonly id?: string | null | undefined } | null | undefined> | null | undefined, readonly blogContent?: ReadonlyArray<{ readonly __typename: 'blogContent_asset_BlockType', readonly caption?: string | null | undefined, readonly size?: string | null | undefined, readonly image?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly filename?: string | null | undefined, readonly height?: number | null | undefined, readonly width?: number | null | undefined } | null | undefined> | null | undefined } | { readonly __typename: 'blogContent_file_BlockType', readonly description?: string | null | undefined, readonly file?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly filename?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename: 'blogContent_link_BlockType', readonly linkText?: string | null | undefined, readonly linkUrl?: string | null | undefined, readonly description?: string | null | undefined } | { readonly __typename: 'blogContent_text_BlockType', readonly sectionTitle?: string | null | undefined, readonly text?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };

export type GetBlogCategoriesQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetBlogCategoriesQuery = { readonly __typename?: 'Query', readonly categories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | null | undefined> | null | undefined };

export const BlogTeaserFragmentDoc = `
    fragment BlogTeaser on blog_default_Entry {
  __typename
  title
  slug
  id
  postDate @formatDateTime(format: "d.m.Y")
  blogTeaserDescription
  blogTeaserImage {
    url
    filename
    height
    width
  }
  blogCategories {
    title
    id
  }
}
    `;
export const GetBlogEntriesDocument = `
    query GET_BLOG_ENTRIES($limit: Int, $localizationId: [QueryArgument!]!) {
  entries(section: "blog", limit: $limit, siteId: $localizationId) {
    ...BlogTeaser
  }
}
    ${BlogTeaserFragmentDoc}`;
export const useGetBlogEntriesQuery = <
      TData = GetBlogEntriesQuery,
      TError = unknown
    >(
      variables: GetBlogEntriesQueryVariables,
      options?: UseQueryOptions<GetBlogEntriesQuery, TError, TData>
    ) =>
    useQuery<GetBlogEntriesQuery, TError, TData>(
      ['GET_BLOG_ENTRIES', variables],
      fetcher<GetBlogEntriesQuery, GetBlogEntriesQueryVariables>(GetBlogEntriesDocument, variables),
      options
    );

useGetBlogEntriesQuery.getKey = (variables: GetBlogEntriesQueryVariables) => ['GET_BLOG_ENTRIES', variables];
;

useGetBlogEntriesQuery.fetcher = (variables: GetBlogEntriesQueryVariables) => fetcher<GetBlogEntriesQuery, GetBlogEntriesQueryVariables>(GetBlogEntriesDocument, variables);
export const GetBlogEntryBySlugDocument = `
    query GET_BLOG_ENTRY_BY_SLUG($slug: [String], $localizationId: [QueryArgument!]!) {
  entry(section: "blog", slug: $slug, siteId: $localizationId) {
    ... on blog_default_Entry {
      __typename
      title
      id
      postDate @formatDateTime(format: "d.m.Y")
      blogTeaserDescription
      blogTeaserImage {
        url
        filename
        height
        width
      }
      blogCategories {
        title
        id
      }
      blogContent {
        ... on blogContent_text_BlockType {
          __typename
          sectionTitle
          text
        }
        ... on blogContent_asset_BlockType {
          __typename
          image {
            url
            filename
            height
            width
          }
          caption
          size
        }
        ... on blogContent_file_BlockType {
          __typename
          file {
            url
            filename
          }
          description
        }
        ... on blogContent_link_BlockType {
          __typename
          linkText
          linkUrl
          description
        }
      }
    }
  }
}
    `;
export const useGetBlogEntryBySlugQuery = <
      TData = GetBlogEntryBySlugQuery,
      TError = unknown
    >(
      variables: GetBlogEntryBySlugQueryVariables,
      options?: UseQueryOptions<GetBlogEntryBySlugQuery, TError, TData>
    ) =>
    useQuery<GetBlogEntryBySlugQuery, TError, TData>(
      ['GET_BLOG_ENTRY_BY_SLUG', variables],
      fetcher<GetBlogEntryBySlugQuery, GetBlogEntryBySlugQueryVariables>(GetBlogEntryBySlugDocument, variables),
      options
    );

useGetBlogEntryBySlugQuery.getKey = (variables: GetBlogEntryBySlugQueryVariables) => ['GET_BLOG_ENTRY_BY_SLUG', variables];
;

useGetBlogEntryBySlugQuery.fetcher = (variables: GetBlogEntryBySlugQueryVariables) => fetcher<GetBlogEntryBySlugQuery, GetBlogEntryBySlugQueryVariables>(GetBlogEntryBySlugDocument, variables);
export const GetBlogCategoriesDocument = `
    query GET_BLOG_CATEGORIES($localizationId: [QueryArgument!]!) {
  categories(group: "blogCategories", siteId: $localizationId) {
    id
    title
  }
}
    `;
export const useGetBlogCategoriesQuery = <
      TData = GetBlogCategoriesQuery,
      TError = unknown
    >(
      variables: GetBlogCategoriesQueryVariables,
      options?: UseQueryOptions<GetBlogCategoriesQuery, TError, TData>
    ) =>
    useQuery<GetBlogCategoriesQuery, TError, TData>(
      ['GET_BLOG_CATEGORIES', variables],
      fetcher<GetBlogCategoriesQuery, GetBlogCategoriesQueryVariables>(GetBlogCategoriesDocument, variables),
      options
    );

useGetBlogCategoriesQuery.getKey = (variables: GetBlogCategoriesQueryVariables) => ['GET_BLOG_CATEGORIES', variables];
;

useGetBlogCategoriesQuery.fetcher = (variables: GetBlogCategoriesQueryVariables) => fetcher<GetBlogCategoriesQuery, GetBlogCategoriesQueryVariables>(GetBlogCategoriesDocument, variables);