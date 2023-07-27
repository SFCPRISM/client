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
export type GetSloganQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetSloganQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename: 'home_home_Entry', readonly slogan?: string | null | undefined, readonly heroImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly title?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };


export const GetSloganDocument = `
    query GET_SLOGAN($localizationId: [QueryArgument!]!) {
  entry(section: "home", siteId: $localizationId) {
    ... on home_home_Entry {
      __typename
      slogan
      heroImage {
        title
        url
      }
    }
  }
}
    `;
export const useGetSloganQuery = <
      TData = GetSloganQuery,
      TError = unknown
    >(
      variables: GetSloganQueryVariables,
      options?: UseQueryOptions<GetSloganQuery, TError, TData>
    ) =>
    useQuery<GetSloganQuery, TError, TData>(
      ['GET_SLOGAN', variables],
      fetcher<GetSloganQuery, GetSloganQueryVariables>(GetSloganDocument, variables),
      options
    );

useGetSloganQuery.getKey = (variables: GetSloganQueryVariables) => ['GET_SLOGAN', variables];
;

useGetSloganQuery.fetcher = (variables: GetSloganQueryVariables) => fetcher<GetSloganQuery, GetSloganQueryVariables>(GetSloganDocument, variables);