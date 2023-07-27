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
export type GetTopJobsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTopJobsQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename: 'home_home_Entry', readonly topJobs?: ReadonlyArray<{ readonly __typename: 'blog_default_Entry' } | { readonly __typename: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename: 'home_home_Entry' } | { readonly __typename: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobId?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined } | { readonly __typename: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename: 'partner_default_Entry' } | { readonly __typename: 'references_company_Entry' } | { readonly __typename: 'references_person_Entry' } | { readonly __typename: 'services_default_Entry' } | { readonly __typename: 'team_default_Entry' } | { readonly __typename: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename: 'work_work_Entry' } | null | undefined> | null | undefined } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined, readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobId?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined };


export const GetTopJobsDocument = `
    query GET_TOP_JOBS {
  entry(section: "home") {
    ... on home_home_Entry {
      __typename
      topJobs {
        __typename
        ... on jobs_default_Entry {
          __typename
          title
          jobId
          jobPostingWorkload
        }
      }
    }
  }
  entries(section: "jobs", limit: 3) {
    ... on jobs_default_Entry {
      __typename
      title
      jobId
      jobPostingWorkload
    }
  }
}
    `;
export const useGetTopJobsQuery = <
      TData = GetTopJobsQuery,
      TError = unknown
    >(
      variables?: GetTopJobsQueryVariables,
      options?: UseQueryOptions<GetTopJobsQuery, TError, TData>
    ) =>
    useQuery<GetTopJobsQuery, TError, TData>(
      variables === undefined ? ['GET_TOP_JOBS'] : ['GET_TOP_JOBS', variables],
      fetcher<GetTopJobsQuery, GetTopJobsQueryVariables>(GetTopJobsDocument, variables),
      options
    );

useGetTopJobsQuery.getKey = (variables?: GetTopJobsQueryVariables) => variables === undefined ? ['GET_TOP_JOBS'] : ['GET_TOP_JOBS', variables];
;

useGetTopJobsQuery.fetcher = (variables?: GetTopJobsQueryVariables) => fetcher<GetTopJobsQuery, GetTopJobsQueryVariables>(GetTopJobsDocument, variables);