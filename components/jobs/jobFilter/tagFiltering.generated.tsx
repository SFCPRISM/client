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
export type GetJobPostingTagsQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetJobPostingTagsQuery = { readonly __typename?: 'Query', readonly employments?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly locations?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined, readonly groupHandle?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined, readonly groupHandle?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined, readonly groupHandle?: string | null | undefined } | null | undefined> | null | undefined, readonly areas?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined };


export const GetJobPostingTagsDocument = `
    query GET_JOB_POSTING_TAGS($localizationId: [QueryArgument!]!) {
  employments: tags(group: "jobPostingEmploymentTags", siteId: $localizationId) {
    title
  }
  locations: tags(group: "jobPostingLocationTags", siteId: $localizationId) {
    title
    groupHandle
  }
  areas: tags(group: "jobPostingAreaTags", siteId: $localizationId) {
    title
  }
}
    `;
export const useGetJobPostingTagsQuery = <
      TData = GetJobPostingTagsQuery,
      TError = unknown
    >(
      variables: GetJobPostingTagsQueryVariables,
      options?: UseQueryOptions<GetJobPostingTagsQuery, TError, TData>
    ) =>
    useQuery<GetJobPostingTagsQuery, TError, TData>(
      ['GET_JOB_POSTING_TAGS', variables],
      fetcher<GetJobPostingTagsQuery, GetJobPostingTagsQueryVariables>(GetJobPostingTagsDocument, variables),
      options
    );

useGetJobPostingTagsQuery.getKey = (variables: GetJobPostingTagsQueryVariables) => ['GET_JOB_POSTING_TAGS', variables];
;

useGetJobPostingTagsQuery.fetcher = (variables: GetJobPostingTagsQueryVariables) => fetcher<GetJobPostingTagsQuery, GetJobPostingTagsQueryVariables>(GetJobPostingTagsDocument, variables);