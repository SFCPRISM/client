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
export type GetJobPostingQueryVariables = Types.Exact<{
  jobPostingId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetJobPostingQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobId?: string | null | undefined, readonly jobPostingDescription?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined, readonly postDate?: any | null | undefined, readonly jobPostingArea?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingLocation?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingEmployment?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingLogo?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly title?: string | null | undefined, readonly url?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };


export const GetJobPostingDocument = `
    query GET_JOB_POSTING($jobPostingId: [QueryArgument!]!) {
  entry(section: "jobs", jobId: $jobPostingId) {
    ... on jobs_default_Entry {
      __typename
      title
      jobId
      jobPostingDescription
      jobPostingWorkload
      jobPostingArea {
        title
      }
      jobPostingLocation {
        title
      }
      jobPostingEmployment {
        title
      }
      jobPostingLogo {
        title
        url
      }
      postDate @formatDateTime(format: "d.m.Y")
    }
  }
}
    `;
export const useGetJobPostingQuery = <
      TData = GetJobPostingQuery,
      TError = unknown
    >(
      variables: GetJobPostingQueryVariables,
      options?: UseQueryOptions<GetJobPostingQuery, TError, TData>
    ) =>
    useQuery<GetJobPostingQuery, TError, TData>(
      ['GET_JOB_POSTING', variables],
      fetcher<GetJobPostingQuery, GetJobPostingQueryVariables>(GetJobPostingDocument, variables),
      options
    );

useGetJobPostingQuery.getKey = (variables: GetJobPostingQueryVariables) => ['GET_JOB_POSTING', variables];
;

useGetJobPostingQuery.fetcher = (variables: GetJobPostingQueryVariables) => fetcher<GetJobPostingQuery, GetJobPostingQueryVariables>(GetJobPostingDocument, variables);