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
export type GetWorkQueryVariables = Types.Exact<{
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetWorkQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename: 'work_work_Entry', readonly simpleRedactor?: string | null | undefined, readonly benefits?: ReadonlyArray<{ readonly __typename: 'benefits_benefit_BlockType', readonly benefitTitle?: string | null | undefined, readonly items?: ReadonlyArray<{ readonly __typename?: 'items_TableRow', readonly benefit?: string | null | undefined } | null | undefined> | null | undefined, readonly icons?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined, readonly title?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, readonly topJobs?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry', readonly title?: string | null | undefined, readonly jobId?: string | null | undefined, readonly slug?: string | null | undefined, readonly jobPostingWorkload?: string | null | undefined, readonly jobPostingLocation?: ReadonlyArray<{ readonly __typename?: 'jobPostingAreaTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingEmploymentTags_Tag', readonly title?: string | null | undefined } | { readonly __typename?: 'jobPostingLocationTags_Tag', readonly title?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename?: 'team_default_Entry' } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined, readonly contactPersons?: ReadonlyArray<{ readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename: 'team_default_Entry', readonly employeeFirstName?: string | null | undefined, readonly employeeSurname?: string | null | undefined, readonly employeeFunction?: string | null | undefined, readonly employeeEmail?: string | null | undefined, readonly employeeLocations?: ReadonlyArray<string | null | undefined> | null | undefined, readonly employeeImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined, readonly contactCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined> | null | undefined } | null | undefined };


export const GetWorkDocument = `
    query GET_WORK($localizationId: [QueryArgument!]!) {
  entry(section: "work", siteId: $localizationId) {
    ... on work_work_Entry {
      __typename
      simpleRedactor
      benefits {
        __typename
        ... on benefits_benefit_BlockType {
          benefitTitle
          items {
            benefit
          }
          icons {
            url
            title
          }
        }
      }
      topJobs {
        ... on jobs_default_Entry {
          title
          jobId
          slug
          jobPostingWorkload
          jobPostingLocation {
            title
          }
        }
      }
      contactPersons {
        ... on team_default_Entry {
          __typename
          employeeFirstName
          employeeSurname
          employeeImage {
            url
          }
          employeeFunction
          employeeEmail
          employeeLocations
          contactCategories {
            title
          }
        }
      }
    }
  }
}
    `;
export const useGetWorkQuery = <
      TData = GetWorkQuery,
      TError = unknown
    >(
      variables: GetWorkQueryVariables,
      options?: UseQueryOptions<GetWorkQuery, TError, TData>
    ) =>
    useQuery<GetWorkQuery, TError, TData>(
      ['GET_WORK', variables],
      fetcher<GetWorkQuery, GetWorkQueryVariables>(GetWorkDocument, variables),
      options
    );

useGetWorkQuery.getKey = (variables: GetWorkQueryVariables) => ['GET_WORK', variables];
;

useGetWorkQuery.fetcher = (variables: GetWorkQueryVariables) => fetcher<GetWorkQuery, GetWorkQueryVariables>(GetWorkDocument, variables);