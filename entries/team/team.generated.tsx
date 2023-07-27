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
export type GetTeamQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetTeamQuery = { readonly __typename?: 'Query', readonly entries?: ReadonlyArray<{ readonly __typename: 'blog_default_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'home_home_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'jobs_default_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'legalDesclosure_legalDesclosure_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'partner_default_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'references_company_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'references_person_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'services_default_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'team_default_Entry', readonly slug?: string | null | undefined, readonly employeeFirstName?: string | null | undefined, readonly employeeSurname?: string | null | undefined, readonly employeeFunction?: string | null | undefined, readonly employeeEmail?: string | null | undefined, readonly employeeLocations?: ReadonlyArray<string | null | undefined> | null | undefined, readonly employeeLinkedin?: string | null | undefined, readonly employeeXing?: string | null | undefined, readonly employeeBackground?: string | null | undefined, readonly employeeImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined, readonly contactCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeWorkExperiences?: ReadonlyArray<{ readonly __typename?: 'employeeWorkExperiences_employeeWorkExperience_BlockType', readonly year?: string | null | undefined, readonly experienceTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeEducations?: ReadonlyArray<{ readonly __typename?: 'employeeEducations_employeeEducation_BlockType', readonly year?: string | null | undefined, readonly educationTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename: 'termsOfUse_termsOfUse_Entry', readonly slug?: string | null | undefined } | { readonly __typename: 'work_work_Entry', readonly slug?: string | null | undefined } | null | undefined> | null | undefined };

export type GetTeamMemberBySlugQueryVariables = Types.Exact<{
  slug?: Types.Maybe<ReadonlyArray<Types.Maybe<Types.Scalars['String']>>>;
  localizationId: ReadonlyArray<Types.Scalars['QueryArgument']>;
}>;


export type GetTeamMemberBySlugQuery = { readonly __typename?: 'Query', readonly entry?: { readonly __typename?: 'blog_default_Entry' } | { readonly __typename?: 'dataProtectionGuidelines_dataProtectionGuidelines_Entry' } | { readonly __typename?: 'home_home_Entry' } | { readonly __typename?: 'jobs_default_Entry' } | { readonly __typename?: 'legalDesclosure_legalDesclosure_Entry' } | { readonly __typename?: 'partner_default_Entry' } | { readonly __typename?: 'references_company_Entry' } | { readonly __typename?: 'references_person_Entry' } | { readonly __typename?: 'services_default_Entry' } | { readonly __typename: 'team_default_Entry', readonly employeeFirstName?: string | null | undefined, readonly employeeSurname?: string | null | undefined, readonly employeeFunction?: string | null | undefined, readonly employeeEmail?: string | null | undefined, readonly employeeLocations?: ReadonlyArray<string | null | undefined> | null | undefined, readonly employeeLinkedin?: string | null | undefined, readonly employeeXing?: string | null | undefined, readonly employeeBackground?: string | null | undefined, readonly employeeImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined, readonly contactCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeWorkExperiences?: ReadonlyArray<{ readonly __typename?: 'employeeWorkExperiences_employeeWorkExperience_BlockType', readonly year?: string | null | undefined, readonly experienceTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeEducations?: ReadonlyArray<{ readonly __typename?: 'employeeEducations_employeeEducation_BlockType', readonly year?: string | null | undefined, readonly educationTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined } | { readonly __typename?: 'termsOfUse_termsOfUse_Entry' } | { readonly __typename?: 'work_work_Entry' } | null | undefined };

export type PersonPartsFragment = { readonly __typename?: 'team_default_Entry', readonly employeeFirstName?: string | null | undefined, readonly employeeSurname?: string | null | undefined, readonly employeeFunction?: string | null | undefined, readonly employeeEmail?: string | null | undefined, readonly employeeLocations?: ReadonlyArray<string | null | undefined> | null | undefined, readonly employeeLinkedin?: string | null | undefined, readonly employeeXing?: string | null | undefined, readonly employeeBackground?: string | null | undefined, readonly employeeImage?: ReadonlyArray<{ readonly __typename?: 'general_Asset', readonly url?: string | null | undefined } | null | undefined> | null | undefined, readonly contactCategories?: ReadonlyArray<{ readonly __typename?: 'blogCategories_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'contactAreas_Category', readonly title?: string | null | undefined } | { readonly __typename?: 'referenceScopes_Category', readonly title?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeWorkExperiences?: ReadonlyArray<{ readonly __typename?: 'employeeWorkExperiences_employeeWorkExperience_BlockType', readonly year?: string | null | undefined, readonly experienceTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined, readonly employeeEducations?: ReadonlyArray<{ readonly __typename?: 'employeeEducations_employeeEducation_BlockType', readonly year?: string | null | undefined, readonly educationTitle?: string | null | undefined, readonly description?: string | null | undefined } | null | undefined> | null | undefined };

export const PersonPartsFragmentDoc = `
    fragment PersonParts on team_default_Entry {
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
  employeeLinkedin
  employeeXing
  employeeBackground
  employeeWorkExperiences {
    ... on employeeWorkExperiences_employeeWorkExperience_BlockType {
      year
      experienceTitle
      description
    }
  }
  employeeEducations {
    ... on employeeEducations_employeeEducation_BlockType {
      year
      educationTitle
      description
    }
  }
}
    `;
export const GetTeamDocument = `
    query GET_TEAM($limit: Int, $localizationId: [QueryArgument!]!) {
  entries(section: "team", limit: $limit, siteId: $localizationId) {
    slug
    __typename
    ...PersonParts
  }
}
    ${PersonPartsFragmentDoc}`;
export const useGetTeamQuery = <
      TData = GetTeamQuery,
      TError = unknown
    >(
      variables: GetTeamQueryVariables,
      options?: UseQueryOptions<GetTeamQuery, TError, TData>
    ) =>
    useQuery<GetTeamQuery, TError, TData>(
      ['GET_TEAM', variables],
      fetcher<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, variables),
      options
    );

useGetTeamQuery.getKey = (variables: GetTeamQueryVariables) => ['GET_TEAM', variables];
;

useGetTeamQuery.fetcher = (variables: GetTeamQueryVariables) => fetcher<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, variables);
export const GetTeamMemberBySlugDocument = `
    query GET_TEAM_MEMBER_BY_SLUG($slug: [String], $localizationId: [QueryArgument!]!) {
  entry(section: "team", slug: $slug, siteId: $localizationId) {
    ... on team_default_Entry {
      __typename
      ...PersonParts
    }
  }
}
    ${PersonPartsFragmentDoc}`;
export const useGetTeamMemberBySlugQuery = <
      TData = GetTeamMemberBySlugQuery,
      TError = unknown
    >(
      variables: GetTeamMemberBySlugQueryVariables,
      options?: UseQueryOptions<GetTeamMemberBySlugQuery, TError, TData>
    ) =>
    useQuery<GetTeamMemberBySlugQuery, TError, TData>(
      ['GET_TEAM_MEMBER_BY_SLUG', variables],
      fetcher<GetTeamMemberBySlugQuery, GetTeamMemberBySlugQueryVariables>(GetTeamMemberBySlugDocument, variables),
      options
    );

useGetTeamMemberBySlugQuery.getKey = (variables: GetTeamMemberBySlugQueryVariables) => ['GET_TEAM_MEMBER_BY_SLUG', variables];
;

useGetTeamMemberBySlugQuery.fetcher = (variables: GetTeamMemberBySlugQueryVariables) => fetcher<GetTeamMemberBySlugQuery, GetTeamMemberBySlugQueryVariables>(GetTeamMemberBySlugDocument, variables);