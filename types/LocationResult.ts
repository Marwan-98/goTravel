export interface LocationResult {
  __typename: LocationResultTypename;
  documentId: string;
  detailsV2?: DetailsV2;
  details?: Details;
  image?: Image;
  suggestionType?: string;
  buCategory?: string;
  text?: string;
  parentGeoDetails?: ParentGeoDetails | null;
  route?: LocationResultRoute | null;
  scopeType?: null | string;
}

export enum LocationResultTypename {
  TypeaheadLocationItem = "Typeahead_LocationItem",
  TypeaheadQuerySuggestionItem = "Typeahead_QuerySuggestionItem",
}

export interface Details {
  __typename: string;
  socialStatistics: SocialStatistics;
}

export interface SocialStatistics {
  __typename: string;
  isSaved: boolean;
}

export interface DetailsV2 {
  __typename: string;
  locationId: number;
  isGeo: boolean;
  placeType: string;
  names: DetailsV2Names;
  geocode: Geocode;
  contact: Contact;
  route: DetailsV2Route | null;
}

export interface Contact {
  __typename: string;
  streetAddress: StreetAddress;
}

export interface StreetAddress {
  __typename: string;
  street1: string;
}

export interface Geocode {
  __typename: string;
  latitude: number;
  longitude: number;
}

export interface DetailsV2Names {
  __typename: string;
  name: string;
  longOnlyHierarchyTypeaheadV2: string;
}

export interface DetailsV2Route {
  __typename: string;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export interface PurpleTypedParams {
  __typename: string;
  geoId: number;
}

export interface Image {
  __typename: string;
  photo: Photo;
}

export interface Photo {
  __typename: string;
  photoSizeDynamic: PhotoSizeDynamic;
  photoSizes: PhotoSize[];
}

export interface PhotoSizeDynamic {
  __typename: string;
  maxHeight: number;
  maxWidth: number;
  urlTemplate: string;
}

export interface PhotoSize {
  __typename: PhotoSizeTypename;
  height: number;
  width: number;
  url: string;
}

export enum PhotoSizeTypename {
  PhotoSize = "PhotoSize",
}

export interface ParentGeoDetails {
  __typename: string;
  names: ParentGeoDetailsNames;
}

export interface ParentGeoDetailsNames {
  __typename: string;
  longOnlyHierarchyTypeaheadV2: string;
}

export interface LocationResultRoute {
  __typename: string;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: FluffyTypedParams;
}

export interface FluffyTypedParams {
  __typename: string;
}
