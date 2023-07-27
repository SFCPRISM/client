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
export type GetServicesQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetServicesQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'home_home_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'partner_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'references_company_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'references_person_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'services_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'team_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | { readonly __typename?: 'work_work_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly id?: string | null | undefined } | null | undefined> | null | undefined };

export type GetServiceBySlugQueryVariables = Types.Exact<{
  slug?: Types.Maybe<ReadonlyArray<Types.Maybe<Types.Scalars['String']>>>;
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetServiceBySlugQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename: 'services_default_Entry', readonly title?: string | null | undefined, readonly slug?: string | null | undefined, readonly subtitle?: string | null | undefined, readonly serviceDescription?: string | null | undefined, readonly serviceSituations?: ReadonlyArray<{ readonly __typename?: 'serviceSituations_situation_BlockType', readonly situationTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined, readonly serviceProcedures?: ReadonlyArray<{ readonly __typename?: 'serviceProcedures_serviceProcedure_BlockType', readonly procedureTitle?: string | null | undefined, readonly subtitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };


export const GetServicesDocument = `
    query GET_SERVICES($localizationId: [QueryArgument!]!) {
  entries(section: "services", siteId: $localizationId) {
    title
    slug
    id
  }
}
    `;
export const useGetServicesQuery = <
      TData = GetServicesQuery,
      TError = unknown
    >(
      variables: GetServicesQueryVariables,
      options?: UseQueryOptions<GetServicesQuery, TError, TData>
    ) =>
    useQuery<GetServicesQuery, TError, TData>(
      ['GET_SERVICES', variables],
      fetcher<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, variables),
      options
    );

useGetServicesQuery.getKey = (variables: GetServicesQueryVariables) => ['GET_SERVICES', variables];
;

useGetServicesQuery.fetcher = (variables: GetServicesQueryVariables) => fetcher<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, variables);
export const GetServiceBySlugDocument = `
    query GET_SERVICE_BY_SLUG($slug: [String], $localizationId: [QueryArgument!]!) {
  entry(section: "services", slug: $slug, siteId: $localizationId) {
    ... on services_default_Entry {
      __typename
      title
      slug
      subtitle
      serviceDescription
      serviceSituations {
        ... on serviceSituations_situation_BlockType {
          situationTitle
          description
        }
      }
      serviceProcedures {
        ... on serviceProcedures_serviceProcedure_BlockType {
          procedureTitle
          subtitle
          description
        }
      }
    }
  }
}
    `;
export const useGetServiceBySlugQuery = <
      TData = GetServiceBySlugQuery,
      TError = unknown
    >(
      variables: GetServiceBySlugQueryVariables,
      options?: UseQueryOptions<GetServiceBySlugQuery, TError, TData>
    ) =>
    useQuery<GetServiceBySlugQuery, TError, TData>(
      ['GET_SERVICE_BY_SLUG', variables],
      fetcher<GetServiceBySlugQuery, GetServiceBySlugQueryVariables>(GetServiceBySlugDocument, variables),
      options
    );

useGetServiceBySlugQuery.getKey = (variables: GetServiceBySlugQueryVariables) => ['GET_SERVICE_BY_SLUG', variables];
;

useGetServiceBySlugQuery.fetcher = (variables: GetServiceBySlugQueryVariables) => fetcher<GetServiceBySlugQuery, GetServiceBySlugQueryVariables>(GetServiceBySlugDocument, variables);