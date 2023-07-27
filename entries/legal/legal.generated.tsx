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
export type GetDataProtectionGuidelinesQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetDataProtectionGuidelinesQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry', readonly title?: string | null | undefined } | { readonly __typename: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly title?: string | null | undefined, readonly textsWithTitle?: ReadonlyArray<{ readonly __typename: 'textsWithTitle_textWithTitle_BlockType', readonly blockTitle?: string | null | undefined, readonly blockContent?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'home_home_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'partner_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_company_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_person_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'services_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'team_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'work_work_Entry', readonly title?: string | null | undefined } | null | undefined };

export type GetLegalDesclosureQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetLegalDesclosureQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'home_home_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry', readonly title?: string | null | undefined } | { readonly __typename: 'legalDesclosure_legalDesclosure_Entry', readonly title?: string | null | undefined, readonly textsWithTitle?: ReadonlyArray<{ readonly __typename: 'textsWithTitle_textWithTitle_BlockType', readonly blockTitle?: string | null | undefined, readonly blockContent?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'partner_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_company_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_person_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'services_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'team_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'work_work_Entry', readonly title?: string | null | undefined } | null | undefined };

export type GetTermsOfUseQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetTermsOfUseQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'home_home_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'partner_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_company_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'references_person_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'services_default_Entry', readonly title?: string | null | undefined } | { readonly __typename?: 'team_default_Entry', readonly title?: string | null | undefined } | { readonly __typename: 'termsOfUse_termsOfUse_Entry', readonly title?: string | null | undefined, readonly textsWithTitle?: ReadonlyArray<{ readonly __typename: 'textsWithTitle_textWithTitle_BlockType', readonly blockTitle?: string | null | undefined, readonly blockContent?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'work_work_Entry', readonly title?: string | null | undefined } | null | undefined };


export const GetDataProtectionGuidelinesDocument = `
    query GET_DATA_PROTECTION_GUIDELINES($localizationId: [QueryArgument!]!) {
  entry(section: "dataProtectionGuidelines", siteId: $localizationId) {
    title
    ... on dataProtectionGuidelines_dataProtectionGuidelines_Entry {
      __typename
      textsWithTitle {
        ... on textsWithTitle_textWithTitle_BlockType {
          __typename
          blockTitle
          blockContent
        }
      }
    }
  }
}
    `;
export const useGetDataProtectionGuidelinesQuery = <
      TData = GetDataProtectionGuidelinesQuery,
      TError = unknown
    >(
      variables: GetDataProtectionGuidelinesQueryVariables,
      options?: UseQueryOptions<GetDataProtectionGuidelinesQuery, TError, TData>
    ) =>
    useQuery<GetDataProtectionGuidelinesQuery, TError, TData>(
      ['GET_DATA_PROTECTION_GUIDELINES', variables],
      fetcher<GetDataProtectionGuidelinesQuery, GetDataProtectionGuidelinesQueryVariables>(GetDataProtectionGuidelinesDocument, variables),
      options
    );

useGetDataProtectionGuidelinesQuery.getKey = (variables: GetDataProtectionGuidelinesQueryVariables) => ['GET_DATA_PROTECTION_GUIDELINES', variables];
;

useGetDataProtectionGuidelinesQuery.fetcher = (variables: GetDataProtectionGuidelinesQueryVariables) => fetcher<GetDataProtectionGuidelinesQuery, GetDataProtectionGuidelinesQueryVariables>(GetDataProtectionGuidelinesDocument, variables);
export const GetLegalDesclosureDocument = `
    query GET_LEGAL_DESCLOSURE($localizationId: [QueryArgument!]!) {
  entry(section: "legalDesclosure", siteId: $localizationId) {
    title
    ... on legalDesclosure_legalDesclosure_Entry {
      __typename
      textsWithTitle {
        ... on textsWithTitle_textWithTitle_BlockType {
          __typename
          blockTitle
          blockContent
        }
      }
    }
  }
}
    `;
export const useGetLegalDesclosureQuery = <
      TData = GetLegalDesclosureQuery,
      TError = unknown
    >(
      variables: GetLegalDesclosureQueryVariables,
      options?: UseQueryOptions<GetLegalDesclosureQuery, TError, TData>
    ) =>
    useQuery<GetLegalDesclosureQuery, TError, TData>(
      ['GET_LEGAL_DESCLOSURE', variables],
      fetcher<GetLegalDesclosureQuery, GetLegalDesclosureQueryVariables>(GetLegalDesclosureDocument, variables),
      options
    );

useGetLegalDesclosureQuery.getKey = (variables: GetLegalDesclosureQueryVariables) => ['GET_LEGAL_DESCLOSURE', variables];
;

useGetLegalDesclosureQuery.fetcher = (variables: GetLegalDesclosureQueryVariables) => fetcher<GetLegalDesclosureQuery, GetLegalDesclosureQueryVariables>(GetLegalDesclosureDocument, variables);
export const GetTermsOfUseDocument = `
    query GET_TERMS_OF_USE($localizationId: [QueryArgument!]!) {
  entry(section: "termsOfUse", siteId: $localizationId) {
    title
    ... on termsOfUse_termsOfUse_Entry {
      __typename
      textsWithTitle {
        ... on textsWithTitle_textWithTitle_BlockType {
          __typename
          blockTitle
          blockContent
        }
      }
    }
  }
}
    `;
export const useGetTermsOfUseQuery = <
      TData = GetTermsOfUseQuery,
      TError = unknown
    >(
      variables: GetTermsOfUseQueryVariables,
      options?: UseQueryOptions<GetTermsOfUseQuery, TError, TData>
    ) =>
    useQuery<GetTermsOfUseQuery, TError, TData>(
      ['GET_TERMS_OF_USE', variables],
      fetcher<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>(GetTermsOfUseDocument, variables),
      options
    );

useGetTermsOfUseQuery.getKey = (variables: GetTermsOfUseQueryVariables) => ['GET_TERMS_OF_USE', variables];
;

useGetTermsOfUseQuery.fetcher = (variables: GetTermsOfUseQueryVariables) => fetcher<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>(GetTermsOfUseDocument, variables);