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
export type GetCriticalInfoQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetCriticalInfoQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename: 'home_home_Entry', readonly criticalInfo?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };


export const GetCriticalInfoDocument = `
    query GET_CRITICAL_INFO($localizationId: [QueryArgument!]!) {
  entry(section: "home", siteId: $localizationId) {
    ... on home_home_Entry {
      __typename
      criticalInfo
    }
  }
}
    `;
export const useGetCriticalInfoQuery = <
      TData = GetCriticalInfoQuery,
      TError = unknown
    >(
      variables: GetCriticalInfoQueryVariables,
      options?: UseQueryOptions<GetCriticalInfoQuery, TError, TData>
    ) =>
    useQuery<GetCriticalInfoQuery, TError, TData>(
      ['GET_CRITICAL_INFO', variables],
      fetcher<GetCriticalInfoQuery, GetCriticalInfoQueryVariables>(GetCriticalInfoDocument, variables),
      options
    );

useGetCriticalInfoQuery.getKey = (variables: GetCriticalInfoQueryVariables) => ['GET_CRITICAL_INFO', variables];
;

useGetCriticalInfoQuery.fetcher = (variables: GetCriticalInfoQueryVariables) => fetcher<GetCriticalInfoQuery, GetCriticalInfoQueryVariables>(GetCriticalInfoDocument, variables);