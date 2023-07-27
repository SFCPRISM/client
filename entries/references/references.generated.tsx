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
export type GetReferencesQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetReferencesQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'home_home_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'partner_default_Entry', readonly id?: string | null | undefined } | { readonly __typename: 'references_company_Entry', readonly title?: string | null | undefined, readonly description?: string | null | undefined, readonly webUrl?: string | null | undefined, readonly isEnabledForCarousel?: boolean | null | undefined, readonly id?: string | null | undefined, readonly image?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename: 'references_person_Entry', readonly title?: string | null | undefined, readonly description?: string | null | undefined, readonly isEnabledForCarousel?: boolean | null | undefined, readonly id?: string | null | undefined, readonly image?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'services_default_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'team_default_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry', readonly id?: string | null | undefined } | { readonly __typename?: 'work_work_Entry', readonly id?: string | null | undefined } | null | undefined> | null | undefined };

export type GetReferencesCategoriesQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetReferencesCategoriesQuery = { readonly __typename?: 'Query', readonly categories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly id?: string | null | undefined, readonly title?: string | null | undefined } | null | undefined> | null | undefined };


export const GetReferencesDocument = `
    query GET_REFERENCES($localizationId: [QueryArgument!]!) {
  entries(section: "references", siteId: $localizationId) {
    id
    ... on references_person_Entry {
      __typename
      title
      description
      image {
        url
      }
      isEnabledForCarousel
    }
    ... on references_company_Entry {
      __typename
      title
      description
      image {
        url
      }
      webUrl
      isEnabledForCarousel
    }
  }
}
    `;
export const useGetReferencesQuery = <
      TData = GetReferencesQuery,
      TError = unknown
    >(
      variables: GetReferencesQueryVariables,
      options?: UseQueryOptions<GetReferencesQuery, TError, TData>
    ) =>
    useQuery<GetReferencesQuery, TError, TData>(
      ['GET_REFERENCES', variables],
      fetcher<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, variables),
      options
    );

useGetReferencesQuery.getKey = (variables: GetReferencesQueryVariables) => ['GET_REFERENCES', variables];
;

useGetReferencesQuery.fetcher = (variables: GetReferencesQueryVariables) => fetcher<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, variables);
export const GetReferencesCategoriesDocument = `
    query GET_REFERENCES_CATEGORIES($localizationId: [QueryArgument!]!) {
  categories(group: "blogCategories", siteId: $localizationId) {
    id
    title
  }
}
    `;
export const useGetReferencesCategoriesQuery = <
      TData = GetReferencesCategoriesQuery,
      TError = unknown
    >(
      variables: GetReferencesCategoriesQueryVariables,
      options?: UseQueryOptions<GetReferencesCategoriesQuery, TError, TData>
    ) =>
    useQuery<GetReferencesCategoriesQuery, TError, TData>(
      ['GET_REFERENCES_CATEGORIES', variables],
      fetcher<GetReferencesCategoriesQuery, GetReferencesCategoriesQueryVariables>(GetReferencesCategoriesDocument, variables),
      options
    );

useGetReferencesCategoriesQuery.getKey = (variables: GetReferencesCategoriesQueryVariables) => ['GET_REFERENCES_CATEGORIES', variables];
;

useGetReferencesCategoriesQuery.fetcher = (variables: GetReferencesCategoriesQueryVariables) => fetcher<GetReferencesCategoriesQuery, GetReferencesCategoriesQueryVariables>(GetReferencesCategoriesDocument, variables);