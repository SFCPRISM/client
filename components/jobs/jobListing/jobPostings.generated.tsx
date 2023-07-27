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
export type GetJobPostingsQueryVariables = Types.Exact<{
  relatedToTags?: Types.Maybe<ReadonlyArray<Types.TagCriteriaInput>>;
}>;


export type GetJobPostingsQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobId?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined, readonly jobPostingArea?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingLocation?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingEmployment?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined };

export type GetApiJobPostingsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetApiJobPostingsQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobPostingDescription?: string | null | undefined, readonly jobId?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined, readonly dateUpdated?: any | null | undefined, readonly jobPostingArea?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingLocation?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly jobPostingEmployment?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined };


export const GetJobPostingsDocument = `
    query GET_JOB_POSTINGS($relatedToTags: [TagCriteriaInput!]) {
  entries(section: "jobs", relatedToTags: $relatedToTags) {
    ... on jobs_default_Entry {
      __typename
      title
      jobId
      jobPostingArea {
        title
      }
      jobPostingLocation {
        title
      }
      jobPostingWorkload
      jobPostingEmployment {
        title
      }
    }
  }
}
    `;
export const useGetJobPostingsQuery = <
      TData = GetJobPostingsQuery,
      TError = unknown
    >(
      variables?: GetJobPostingsQueryVariables,
      options?: UseQueryOptions<GetJobPostingsQuery, TError, TData>
    ) =>
    useQuery<GetJobPostingsQuery, TError, TData>(
      variables === undefined ? ['GET_JOB_POSTINGS'] : ['GET_JOB_POSTINGS', variables],
      fetcher<GetJobPostingsQuery, GetJobPostingsQueryVariables>(GetJobPostingsDocument, variables),
      options
    );

useGetJobPostingsQuery.getKey = (variables?: GetJobPostingsQueryVariables) => variables === undefined ? ['GET_JOB_POSTINGS'] : ['GET_JOB_POSTINGS', variables];
;

useGetJobPostingsQuery.fetcher = (variables?: GetJobPostingsQueryVariables) => fetcher<GetJobPostingsQuery, GetJobPostingsQueryVariables>(GetJobPostingsDocument, variables);
export const GetApiJobPostingsDocument = `
    query GET_API_JOB_POSTINGS {
  entries(section: "jobs") {
    ... on jobs_default_Entry {
      __typename
      title
      jobPostingDescription
      jobId
      jobPostingArea {
        title
      }
      jobPostingLocation {
        title
      }
      jobPostingWorkload
      jobPostingEmployment {
        title
      }
      dateUpdated @formatDateTime(format: "d.m.Y")
    }
  }
}
    `;
export const useGetApiJobPostingsQuery = <
      TData = GetApiJobPostingsQuery,
      TError = unknown
    >(
      variables?: GetApiJobPostingsQueryVariables,
      options?: UseQueryOptions<GetApiJobPostingsQuery, TError, TData>
    ) =>
    useQuery<GetApiJobPostingsQuery, TError, TData>(
      variables === undefined ? ['GET_API_JOB_POSTINGS'] : ['GET_API_JOB_POSTINGS', variables],
      fetcher<GetApiJobPostingsQuery, GetApiJobPostingsQueryVariables>(GetApiJobPostingsDocument, variables),
      options
    );

useGetApiJobPostingsQuery.getKey = (variables?: GetApiJobPostingsQueryVariables) => variables === undefined ? ['GET_API_JOB_POSTINGS'] : ['GET_API_JOB_POSTINGS', variables];
;

useGetApiJobPostingsQuery.fetcher = (variables?: GetApiJobPostingsQueryVariables) => fetcher<GetApiJobPostingsQuery, GetApiJobPostingsQueryVariables>(GetApiJobPostingsDocument, variables);