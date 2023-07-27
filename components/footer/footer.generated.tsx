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
export type FooterQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type FooterQuery = { readonly __typename?: 'Query', readonly globalSet?: { readonly __typename: 'footer_GlobalSet', readonly locations?: ReadonlyArray<{ readonly __typename: 'locations_location_BlockType', readonly city?: string | null | undefined, readonly firm?: string | null | undefined, readonly zipCode?: any | null | undefined, readonly street?: string | null | undefined, readonly floor?: string | null | undefined, readonly phone?: string | null | undefined, readonly email?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const FooterDocument = `
    query FOOTER($localizationId: [QueryArgument!]!) {
  globalSet(handle: "footer", siteId: $localizationId) {
    ... on footer_GlobalSet {
      __typename
      locations {
        ... on locations_location_BlockType {
          __typename
          city
          firm
          zipCode
          street
          floor
          phone
          email
        }
      }
    }
  }
}
    `;
export const useFooterQuery = <
      TData = FooterQuery,
      TError = unknown
    >(
      variables: FooterQueryVariables,
      options?: UseQueryOptions<FooterQuery, TError, TData>
    ) =>
    useQuery<FooterQuery, TError, TData>(
      ['FOOTER', variables],
      fetcher<FooterQuery, FooterQueryVariables>(FooterDocument, variables),
      options
    );

useFooterQuery.getKey = (variables: FooterQueryVariables) => ['FOOTER', variables];
;

useFooterQuery.fetcher = (variables: FooterQueryVariables) => fetcher<FooterQuery, FooterQueryVariables>(FooterDocument, variables);