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
export type GetPartnerQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetPartnerQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename: 'partner_default_Entry', readonly title?: string | null | undefined, readonly description?: string | null | undefined, readonly webUrl?: string | null | undefined, readonly image?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined };


export const GetPartnerDocument = `
    query GET_PARTNER($localizationId: [QueryArgument!]!) {
  entries(section: "partner", siteId: $localizationId) {
    ... on partner_default_Entry {
      __typename
      title
      description
      image {
        url
      }
      webUrl
    }
  }
}
    `;
export const useGetPartnerQuery = <
      TData = GetPartnerQuery,
      TError = unknown
    >(
      variables: GetPartnerQueryVariables,
      options?: UseQueryOptions<GetPartnerQuery, TError, TData>
    ) =>
    useQuery<GetPartnerQuery, TError, TData>(
      ['GET_PARTNER', variables],
      fetcher<GetPartnerQuery, GetPartnerQueryVariables>(GetPartnerDocument, variables),
      options
    );

useGetPartnerQuery.getKey = (variables: GetPartnerQueryVariables) => ['GET_PARTNER', variables];
;

useGetPartnerQuery.fetcher = (variables: GetPartnerQueryVariables) => fetcher<GetPartnerQuery, GetPartnerQueryVariables>(GetPartnerDocument, variables);