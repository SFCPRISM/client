// Generated File. Do not change it manually!
/* eslint-disable */
import { QueryArgument } from './queryArgument'
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: any;
  /** The `Number` scalar type represents a number that can be a float, an integer or a null value. */
  Number: any;
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: QueryArgument;
};

export type AssetCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  readonly dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  readonly dateModified?: Maybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  readonly dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
  readonly enabledForSite?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ filenames. */
  readonly filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  readonly fixedOrder?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  readonly folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ image heights. */
  readonly height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  readonly id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  readonly includeSubfolders?: Maybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in reverse order. */
  readonly inReverse?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ file kinds. */
  readonly kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  readonly limit?: Maybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  readonly offset?: Maybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  readonly orderBy?: Maybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  readonly preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  readonly ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  readonly relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  readonly relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  readonly relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  readonly relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  readonly relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  readonly relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  readonly relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  readonly search?: Maybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  readonly size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  readonly slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  readonly title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  readonly uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  readonly unique?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  readonly uploader?: Maybe<Scalars['QueryArgument']>;
  /** Narrows the query results based on the elements’ URIs. */
  readonly uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  readonly volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  readonly volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  readonly width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** A list of transform handles to preload. */
  readonly withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  readonly dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  readonly extension?: Maybe<Scalars['String']>;
  /** The filename of the asset file. */
  readonly filename?: Maybe<Scalars['String']>;
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  readonly focalPoint?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  readonly folderId?: Maybe<Scalars['Int']>;
  /** Whether a user-defined focal point is set on the asset. */
  readonly hasFocalPoint?: Maybe<Scalars['Boolean']>;
  /** The height in pixels or null if it’s not an image. */
  readonly height?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** An `<img>` tag based on this asset. */
  readonly img?: Maybe<Scalars['String']>;
  /** The file kind. */
  readonly kind?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  readonly mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  readonly path?: Maybe<Scalars['String']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  readonly size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  readonly srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  readonly url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  readonly volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  readonly width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceCountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: ReadonlyArray<Scalars['String']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type BenefitsBenefitBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly benefitTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  readonly icons?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  readonly items?: Maybe<ReadonlyArray<Maybe<ItemsTableRow>>>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type BenefitsBenefitBlockTypeCountArgs = {
  field: Scalars['String'];
};


export type BenefitsBenefitBlockTypeIconsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type BenefitsMatrixField = BenefitsBenefitBlockType;

export type BlogDefaultEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly blogCategories?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  readonly blogContent?: Maybe<ReadonlyArray<Maybe<BlogContentMatrixField>>>;
  readonly blogTeaserDescription?: Maybe<Scalars['String']>;
  readonly blogTeaserImage?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type BlogDefaultEntryCountArgs = {
  field: Scalars['String'];
};


export type BlogDefaultEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryBlogCategoriesArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryBlogContentArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type BlogDefaultEntryBlogTeaserImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type BlogDefaultEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogDefaultEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type BlogCategoriesCategory = CategoryInterface & ElementInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The category’s children. */
  readonly children?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the category. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the category. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  readonly parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type BlogCategoriesCategoryCountArgs = {
  field: Scalars['String'];
};


export type BlogCategoriesCategoryChildrenArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogCategoriesCategoryLocalizedArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogCategoriesCategoryNextArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogCategoriesCategoryParentArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type BlogCategoriesCategoryPrevArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type BlogContentAssetBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly caption?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  readonly size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type BlogContentAssetBlockTypeCountArgs = {
  field: Scalars['String'];
};


export type BlogContentAssetBlockTypeImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type BlogContentAssetBlockTypeSizeArgs = {
  label?: Maybe<Scalars['Boolean']>;
};

export type BlogContentFileBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  readonly file?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type BlogContentFileBlockTypeCountArgs = {
  field: Scalars['String'];
};


export type BlogContentFileBlockTypeFileArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type BlogContentLinkBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  readonly linkText?: Maybe<Scalars['String']>;
  readonly linkUrl?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type BlogContentLinkBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type BlogContentMatrixField = BlogContentAssetBlockType | BlogContentFileBlockType | BlogContentLinkBlockType | BlogContentTextBlockType;

export type BlogContentTextBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  readonly sectionTitle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  readonly text?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type BlogContentTextBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  readonly ancestorDist?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  readonly ancestorOf?: Maybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ creation dates. */
  readonly dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  readonly dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  readonly descendantDist?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  readonly descendantOf?: Maybe<Scalars['Int']>;
  /** Whether to only return categories that the user has permission to edit. */
  readonly editable?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
  readonly enabledForSite?: Maybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  readonly fixedOrder?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  readonly group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  readonly groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  readonly hasDescendants?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  readonly id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  readonly inReverse?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  readonly leaves?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  readonly level?: Maybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  readonly limit?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  readonly nextSiblingOf?: Maybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  readonly offset?: Maybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  readonly orderBy?: Maybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  readonly positionedAfter?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  readonly positionedBefore?: Maybe<Scalars['Int']>;
  /** Determines which site should be selected when querying multi-site elements. */
  readonly preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  readonly prevSiblingOf?: Maybe<Scalars['Int']>;
  /** Narrows the query results based on a reference string. */
  readonly ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  readonly relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  readonly relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  readonly relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  readonly relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  readonly relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  readonly relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  readonly relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  readonly search?: Maybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  readonly slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  readonly title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  readonly uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  readonly unique?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  readonly uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  readonly withStructure?: Maybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The category’s children. */
  readonly children?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the category. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the category. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  readonly parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceCountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type ContactAreasCategory = CategoryInterface & ElementInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The category’s children. */
  readonly children?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the category. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the category. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  readonly parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type ContactAreasCategoryCountArgs = {
  field: Scalars['String'];
};


export type ContactAreasCategoryChildrenArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ContactAreasCategoryLocalizedArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ContactAreasCategoryNextArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ContactAreasCategoryParentArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ContactAreasCategoryPrevArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type DataProtectionGuidelinesDataProtectionGuidelinesEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly textsWithTitle?: Maybe<ReadonlyArray<Maybe<TextsWithTitleMatrixField>>>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryCountArgs = {
  field: Scalars['String'];
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type DataProtectionGuidelinesDataProtectionGuidelinesEntryTextsWithTitleArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type Element = ElementInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type ElementCountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterfaceCountArgs = {
  field: Scalars['String'];
};

export type EmployeeEducationsEmployeeEducationBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly educationTitle?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  readonly year?: Maybe<Scalars['String']>;
};


export type EmployeeEducationsEmployeeEducationBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type EmployeeEducationsMatrixField = EmployeeEducationsEmployeeEducationBlockType;

export type EmployeeWorkExperiencesEmployeeWorkExperienceBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  readonly experienceTitle?: Maybe<Scalars['String']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  readonly year?: Maybe<Scalars['String']>;
};


export type EmployeeWorkExperiencesEmployeeWorkExperienceBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type EmployeeWorkExperiencesMatrixField = EmployeeWorkExperiencesEmployeeWorkExperienceBlockType;

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  readonly after?: Maybe<Scalars['String']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  readonly ancestorDist?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  readonly ancestorOf?: Maybe<Scalars['Int']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  readonly authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  readonly authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ authors. */
  readonly authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  readonly before?: Maybe<Scalars['String']>;
  readonly blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  readonly dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  readonly dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  readonly descendantDist?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  readonly descendantOf?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Whether to only return entries that the user has permission to edit. */
  readonly editable?: Maybe<Scalars['Boolean']>;
  readonly employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
  readonly enabledForSite?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  readonly expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  readonly fixedOrder?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  readonly hasDescendants?: Maybe<Scalars['Boolean']>;
  readonly heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  readonly id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  readonly inReverse?: Maybe<Scalars['Boolean']>;
  readonly isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  readonly jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  readonly leaves?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  readonly level?: Maybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  readonly limit?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  readonly nextSiblingOf?: Maybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  readonly offset?: Maybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  readonly orderBy?: Maybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  readonly positionedAfter?: Maybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  readonly positionedBefore?: Maybe<Scalars['Int']>;
  /** Narrows the query results based on the entries’ post dates. */
  readonly postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  readonly preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  readonly prevSiblingOf?: Maybe<Scalars['Int']>;
  readonly primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  readonly ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  readonly relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  readonly relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  readonly relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  readonly relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  readonly relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  readonly relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  readonly relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  readonly search?: Maybe<Scalars['String']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  readonly section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  readonly sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  readonly slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  readonly slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ titles. */
  readonly title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ entry type handles. */
  readonly type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  readonly typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  readonly uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  readonly unique?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  readonly uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  readonly withStructure?: Maybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceCountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type FooterGlobalSet = ElementInterface & GlobalSetInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the global set. */
  readonly handle?: Maybe<Scalars['String']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  readonly locations?: Maybe<ReadonlyArray<Maybe<LocationsMatrixField>>>;
  /** The name of the global set. */
  readonly name?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type FooterGlobalSetCountArgs = {
  field: Scalars['String'];
};


export type FooterGlobalSetLocationsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type GeneralAsset = AssetInterface & ElementInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  readonly dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  readonly extension?: Maybe<Scalars['String']>;
  /** The filename of the asset file. */
  readonly filename?: Maybe<Scalars['String']>;
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  readonly focalPoint?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  readonly folderId?: Maybe<Scalars['Int']>;
  /** Whether a user-defined focal point is set on the asset. */
  readonly hasFocalPoint?: Maybe<Scalars['Boolean']>;
  /** The height in pixels or null if it’s not an image. */
  readonly height?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** An `<img>` tag based on this asset. */
  readonly img?: Maybe<Scalars['String']>;
  /** The file kind. */
  readonly kind?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  readonly mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  readonly path?: Maybe<Scalars['String']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  readonly size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  readonly srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  readonly url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  readonly volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  readonly width?: Maybe<Scalars['Int']>;
};


export type GeneralAssetCountArgs = {
  field: Scalars['String'];
};


export type GeneralAssetHeightArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type GeneralAssetNextArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type GeneralAssetPrevArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type GeneralAssetSrcsetArgs = {
  sizes: ReadonlyArray<Scalars['String']>;
};


export type GeneralAssetUrlArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type GeneralAssetWidthArgs = {
  format?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  immediately?: Maybe<Scalars['Boolean']>;
  interlace?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** This is the interface implemented by all global sets. */
export type GlobalSetInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the global set. */
  readonly handle?: Maybe<Scalars['String']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The name of the global set. */
  readonly name?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all global sets. */
export type GlobalSetInterfaceCountArgs = {
  field: Scalars['String'];
};

export type HomeHomeEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly criticalInfo?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  readonly heroImage?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  readonly slogan?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  readonly topJobs?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type HomeHomeEntryCountArgs = {
  field: Scalars['String'];
};


export type HomeHomeEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryHeroImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type HomeHomeEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type HomeHomeEntryTopJobsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type ItemsTableRow = {
  readonly benefit?: Maybe<Scalars['String']>;
  readonly col2?: Maybe<Scalars['String']>;
};

export type JobPostingAreaTagsTag = ElementInterface & TagInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the tag. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the tag. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type JobPostingAreaTagsTagCountArgs = {
  field: Scalars['String'];
};

export type JobPostingEmploymentTagsTag = ElementInterface & TagInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the tag. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the tag. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type JobPostingEmploymentTagsTagCountArgs = {
  field: Scalars['String'];
};

export type JobPostingLocationTagsTag = ElementInterface & TagInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the tag. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the tag. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type JobPostingLocationTagsTagCountArgs = {
  field: Scalars['String'];
};

export type JobsDefaultEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  readonly jobId?: Maybe<Scalars['String']>;
  readonly jobPostingApplicationLink?: Maybe<Scalars['String']>;
  readonly jobPostingArea?: Maybe<ReadonlyArray<Maybe<TagInterface>>>;
  readonly jobPostingDescription?: Maybe<Scalars['String']>;
  readonly jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<TagInterface>>>;
  readonly jobPostingLocation?: Maybe<ReadonlyArray<Maybe<TagInterface>>>;
  readonly jobPostingLogo?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  readonly jobPostingWorkload?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type JobsDefaultEntryCountArgs = {
  field: Scalars['String'];
};


export type JobsDefaultEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryJobPostingAreaArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type JobsDefaultEntryJobPostingEmploymentArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type JobsDefaultEntryJobPostingLocationArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type JobsDefaultEntryJobPostingLogoArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type JobsDefaultEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type JobsDefaultEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type LegalDesclosureLegalDesclosureEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly textsWithTitle?: Maybe<ReadonlyArray<Maybe<TextsWithTitleMatrixField>>>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type LegalDesclosureLegalDesclosureEntryCountArgs = {
  field: Scalars['String'];
};


export type LegalDesclosureLegalDesclosureEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type LegalDesclosureLegalDesclosureEntryTextsWithTitleArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type LocationsLocationBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly city?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  readonly firm?: Maybe<Scalars['String']>;
  readonly floor?: Maybe<Scalars['String']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  readonly phone?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  readonly street?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  readonly zipCode?: Maybe<Scalars['Number']>;
};


export type LocationsLocationBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type LocationsMatrixField = LocationsLocationBlockType;

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterfaceCountArgs = {
  field: Scalars['String'];
};

export type Mutation = {
  readonly ping?: Maybe<Scalars['String']>;
};

export type PartnerDefaultEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly description?: Maybe<Scalars['String']>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
  readonly webUrl?: Maybe<Scalars['String']>;
};


export type PartnerDefaultEntryCountArgs = {
  field: Scalars['String'];
};


export type PartnerDefaultEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type PartnerDefaultEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type PartnerDefaultEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  /** This query is used to query for a single asset. */
  readonly asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  readonly assetCount: Scalars['Int'];
  /** This query is used to query for assets. */
  readonly assets?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** This query is used to query for categories. */
  readonly categories?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** This query is used to query for a single category. */
  readonly category?: Maybe<CategoryInterface>;
  /** This query is used to return the number of categories. */
  readonly categoryCount: Scalars['Int'];
  /** This query is used to query for entries. */
  readonly entries?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  readonly entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  readonly entryCount: Scalars['Int'];
  /** This query is used to query for a single global set. */
  readonly globalSet?: Maybe<GlobalSetInterface>;
  /** This query is used to query for global sets. */
  readonly globalSets?: Maybe<ReadonlyArray<Maybe<GlobalSetInterface>>>;
  readonly ping?: Maybe<Scalars['String']>;
  /** This query is used to query for a single tag. */
  readonly tag?: Maybe<TagInterface>;
  /** This query is used to return the number of tags. */
  readonly tagCount: Scalars['Int'];
  /** This query is used to query for tags. */
  readonly tags?: Maybe<ReadonlyArray<Maybe<TagInterface>>>;
};


export type QueryAssetArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryAssetCountArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryAssetsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryCategoryArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryCategoryCountArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryEntriesArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryEntryArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryEntryCountArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type QueryGlobalSetArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  handle?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryGlobalSetsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  handle?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryTagArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryTagCountArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type QueryTagsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ReferencesCompanyEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly description?: Maybe<Scalars['String']>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  readonly isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  readonly servicesRelation?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
  readonly webUrl?: Maybe<Scalars['String']>;
};


export type ReferencesCompanyEntryCountArgs = {
  field: Scalars['String'];
};


export type ReferencesCompanyEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type ReferencesCompanyEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesCompanyEntryServicesRelationArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type ReferencesPersonEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly description?: Maybe<Scalars['String']>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  readonly isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly subtitle?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type ReferencesPersonEntryCountArgs = {
  field: Scalars['String'];
};


export type ReferencesPersonEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type ReferencesPersonEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferencesPersonEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type ReferenceScopesCategory = CategoryInterface & ElementInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The category’s children. */
  readonly children?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the category. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the category. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  readonly parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type ReferenceScopesCategoryCountArgs = {
  field: Scalars['String'];
};


export type ReferenceScopesCategoryChildrenArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferenceScopesCategoryLocalizedArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferenceScopesCategoryNextArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferenceScopesCategoryParentArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ReferenceScopesCategoryPrevArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};

export type ServiceProceduresMatrixField = ServiceProceduresServiceProcedureBlockType;

export type ServiceProceduresServiceProcedureBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  readonly procedureTitle?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  readonly subtitle?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type ServiceProceduresServiceProcedureBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type ServicesDefaultEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  readonly serviceDescription?: Maybe<Scalars['String']>;
  readonly serviceProcedures?: Maybe<ReadonlyArray<Maybe<ServiceProceduresMatrixField>>>;
  readonly serviceProceduresTitle?: Maybe<Scalars['String']>;
  readonly serviceSituations?: Maybe<ReadonlyArray<Maybe<ServiceSituationsMatrixField>>>;
  readonly serviceSituationsTitle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly subtitle?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type ServicesDefaultEntryCountArgs = {
  field: Scalars['String'];
};


export type ServicesDefaultEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type ServicesDefaultEntryServiceProceduresArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type ServicesDefaultEntryServiceSituationsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ServiceSituationsMatrixField = ServiceSituationsSituationBlockType;

export type ServiceSituationsSituationBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  readonly situationTitle?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type ServiceSituationsSituationBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type TagCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  readonly dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  readonly dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
  readonly enabledForSite?: Maybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  readonly fixedOrder?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  readonly group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  readonly groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  readonly id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  readonly inReverse?: Maybe<Scalars['Boolean']>;
  /** Sets the limit for paginated results. */
  readonly limit?: Maybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  readonly offset?: Maybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  readonly orderBy?: Maybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  readonly preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  readonly ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  readonly relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  readonly relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  readonly relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  readonly relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  readonly relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  readonly relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  readonly relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  readonly search?: Maybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  readonly slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  readonly title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  readonly uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  readonly unique?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  readonly uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** This is the interface implemented by all tags. */
export type TagInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the tag. */
  readonly groupHandle?: Maybe<Scalars['String']>;
  /** The ID of the group that contains the tag. */
  readonly groupId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all tags. */
export type TagInterfaceCountArgs = {
  field: Scalars['String'];
};

export type TeamDefaultEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly contactCategories?: Maybe<ReadonlyArray<Maybe<CategoryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  readonly employeeBackground?: Maybe<Scalars['String']>;
  readonly employeeEducations?: Maybe<ReadonlyArray<Maybe<EmployeeEducationsMatrixField>>>;
  readonly employeeEmail?: Maybe<Scalars['String']>;
  readonly employeeFirstName?: Maybe<Scalars['String']>;
  readonly employeeFunction?: Maybe<Scalars['String']>;
  readonly employeeImage?: Maybe<ReadonlyArray<Maybe<AssetInterface>>>;
  readonly employeeLinkedin?: Maybe<Scalars['String']>;
  readonly employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly employeeSurname?: Maybe<Scalars['String']>;
  readonly employeeWorkExperiences?: Maybe<ReadonlyArray<Maybe<EmployeeWorkExperiencesMatrixField>>>;
  readonly employeeXing?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  readonly primaryLocation?: Maybe<Scalars['String']>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type TeamDefaultEntryCountArgs = {
  field: Scalars['String'];
};


export type TeamDefaultEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryContactCategoriesArgs = {
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  editable?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryEmployeeEducationsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type TeamDefaultEntryEmployeeImageArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  folderId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  height?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  size?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uploader?: Maybe<Scalars['QueryArgument']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volume?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  volumeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  width?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  withTransforms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type TeamDefaultEntryEmployeeLocationsArgs = {
  label?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryEmployeeWorkExperiencesArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type TeamDefaultEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TeamDefaultEntryPrimaryLocationArgs = {
  label?: Maybe<Scalars['Boolean']>;
};

export type TermsOfUseTermsOfUseEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  readonly textsWithTitle?: Maybe<ReadonlyArray<Maybe<TextsWithTitleMatrixField>>>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type TermsOfUseTermsOfUseEntryCountArgs = {
  field: Scalars['String'];
};


export type TermsOfUseTermsOfUseEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type TermsOfUseTermsOfUseEntryTextsWithTitleArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type TextsWithTitleMatrixField = TextsWithTitleTextWithTitleBlockType;

export type TextsWithTitleTextWithTitleBlockType = ElementInterface & MatrixBlockInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly blockContent?: Maybe<Scalars['String']>;
  readonly blockTitle?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  readonly fieldId?: Maybe<Scalars['Int']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The ID of the element that owns the matrix block. */
  readonly ownerId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  readonly sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the matrix block’s type. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
};


export type TextsWithTitleTextWithTitleBlockTypeCountArgs = {
  field: Scalars['String'];
};

export type User = ElementInterface & UserInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  readonly email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  readonly firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  readonly friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  readonly fullName?: Maybe<Scalars['String']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  readonly lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  readonly name?: Maybe<Scalars['String']>;
  /** The user’s preferences. */
  readonly preferences?: Maybe<Scalars['String']>;
  /** The user’s preferred language. */
  readonly preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The username. */
  readonly username?: Maybe<Scalars['String']>;
};


export type UserCountArgs = {
  field: Scalars['String'];
};

export type UserCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  readonly dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  readonly dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  readonly email?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
  readonly enabledForSite?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ first names. */
  readonly firstName?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  readonly fixedOrder?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user group the users belong to. */
  readonly group?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  readonly groupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  readonly hasPhoto?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  readonly id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  readonly inReverse?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ last names. */
  readonly lastName?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  readonly limit?: Maybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  readonly offset?: Maybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  readonly orderBy?: Maybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  readonly preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  readonly ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  readonly relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  readonly relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  readonly relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  readonly relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  readonly relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  readonly relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  readonly relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  readonly search?: Maybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  readonly siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  readonly slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  readonly title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  readonly uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  readonly unique?: Maybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  readonly uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ usernames. */
  readonly username?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  readonly email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  readonly firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  readonly friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  readonly fullName?: Maybe<Scalars['String']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  readonly lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  readonly name?: Maybe<Scalars['String']>;
  /** The user’s preferences. */
  readonly preferences?: Maybe<Scalars['String']>;
  /** The user’s preferred language. */
  readonly preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The username. */
  readonly username?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all users. */
export type UserInterfaceCountArgs = {
  field: Scalars['String'];
};

export type WorkWorkEntry = ElementInterface & EntryInterface & {
  /** Return a number of related elements for a field. */
  readonly _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly ancestors?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element is archived or not. */
  readonly archived?: Maybe<Scalars['Boolean']>;
  readonly benefits?: Maybe<ReadonlyArray<Maybe<BenefitsMatrixField>>>;
  /** Returns the entry’s canonical ID. */
  readonly canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  readonly canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly children?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  readonly contactPersons?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The date the element was created. */
  readonly dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  readonly dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  readonly descendants?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** The draft ID (from the `drafts` table). */
  readonly draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  readonly draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  readonly draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  readonly enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  readonly expiryDate?: Maybe<Scalars['DateTime']>;
  /** The id of the entity */
  readonly id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  readonly isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  readonly isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  readonly isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
  readonly isUnsavedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  readonly language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  readonly level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  readonly lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  readonly localized?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  readonly next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  readonly parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  readonly postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  readonly prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  readonly revisionId?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  readonly rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  readonly root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  readonly searchScore?: Maybe<Scalars['String']>;
  /** The handle of the section that contains the entry. */
  readonly sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the section that contains the entry. */
  readonly sectionId?: Maybe<Scalars['Int']>;
  readonly simpleRedactor?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  readonly siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  readonly siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  readonly slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  readonly sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  readonly sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  readonly status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  readonly structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  readonly title?: Maybe<Scalars['String']>;
  readonly topJobs?: Maybe<ReadonlyArray<Maybe<EntryInterface>>>;
  /** Whether the element has been soft-deleted or not. */
  readonly trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  readonly typeHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  readonly typeId?: Maybe<Scalars['Int']>;
  /** The uid of the entity */
  readonly uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  readonly uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  readonly url?: Maybe<Scalars['String']>;
};


export type WorkWorkEntryCountArgs = {
  field: Scalars['String'];
};


export type WorkWorkEntryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryBenefitsArgs = {
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  fieldId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  ownerId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


export type WorkWorkEntryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryContactPersonsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryDescendantsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryLocalizedArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryNextArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryParentArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryPrevArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};


export type WorkWorkEntryTopJobsArgs = {
  after?: Maybe<Scalars['String']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  authorGroup?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  authorId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  before?: Maybe<Scalars['String']>;
  blogCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  blogTeaserImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactCategories?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  contactPersons?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  criticalInfo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  dateCreated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  descendantDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  description?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  editable?: Maybe<Scalars['Boolean']>;
  employeeBackground?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeEmail?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFirstName?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeFunction?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLinkedin?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeLocations?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeSurname?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  employeeXing?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  expiryDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  heroImage?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  id?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  image?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  inReverse?: Maybe<Scalars['Boolean']>;
  isEnabledForCarousel?: Maybe<Scalars['Boolean']>;
  jobId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingApplicationLink?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingArea?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingEmployment?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingLogo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  jobPostingWorkload?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  leaves?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  nextSiblingOf?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  positionedAfter?: Maybe<Scalars['Int']>;
  positionedBefore?: Maybe<Scalars['Int']>;
  postDate?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  preferSites?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: Maybe<Scalars['Int']>;
  primaryLocation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  ref?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  relatedTo?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAll?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: Maybe<ReadonlyArray<Maybe<AssetCriteriaInput>>>;
  relatedToCategories?: Maybe<ReadonlyArray<Maybe<CategoryCriteriaInput>>>;
  relatedToEntries?: Maybe<ReadonlyArray<Maybe<EntryCriteriaInput>>>;
  relatedToTags?: Maybe<ReadonlyArray<Maybe<TagCriteriaInput>>>;
  relatedToUsers?: Maybe<ReadonlyArray<Maybe<UserCriteriaInput>>>;
  search?: Maybe<Scalars['String']>;
  section?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceDescription?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceProceduresTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  serviceSituationsTitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  servicesRelation?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  simpleRedactor?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  site?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  siteId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slogan?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  slug?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  structureId?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  title?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  topJobs?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  type?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  typeId?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  uid?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  unique?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  webUrl?: Maybe<ReadonlyArray<Maybe<Scalars['QueryArgument']>>>;
  withStructure?: Maybe<Scalars['Boolean']>;
};
