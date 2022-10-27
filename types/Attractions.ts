export interface Attraction {
  __typename: string;
  badge: Badge;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  isSaved: boolean;
  saveId: SaveID;
  cardTitle: CardTitle;
  primaryInfo: AryInfo;
  secondaryInfo: AryInfo;
  cardPhoto: CardPhoto;
  bubbleRating: BubbleRating;
  distance: null;
  labels: any[];
  descriptiveText: null;
  cardLink: CardLink;
  merchandisingText: null;
  commerceButtons: CommerceButtons;
  closureInfo: null;
}

export interface Badge {
  __typename: string;
  size: string;
  type: string;
  year: string;
}

export interface BubbleRating {
  __typename: string;
  rating: number;
  numberReviews: CardTitle;
}

export interface CardTitle {
  __typename: string;
  string: string;
  debugValueKey: null;
}

export interface CardLink {
  __typename: string;
  route: CardLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: CardTitle;
  trackingContext: string;
}

export interface CardLinkRoute {
  __typename: string;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export interface PurpleTypedParams {
  __typename: string;
  contentId: string;
  contentType: string;
  spAttributionToken: null;
  wasPlusShown: null;
}

export interface CardPhoto {
  __typename: string;
  sizes: Sizes;
}

export interface Sizes {
  __typename: string;
  maxHeight: number;
  maxWidth: number;
  urlTemplate: string;
}

export interface CommerceButtons {
  __typename: string;
  singleButton: null;
  firstCommerceButton: null;
  secondCommerceButton: SecondCommerceButton;
}

export interface SecondCommerceButton {
  __typename: string;
  commerceTrackingUrl: null;
  link: Link;
}

export interface Link {
  __typename: string;
  route: LinkRoute;
  webviewRoute: null;
  text: CardTitle;
  accessibilityString: null;
  trackingContext: string;
}

export interface LinkRoute {
  __typename: string;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: FluffyTypedParams;
}

export interface FluffyTypedParams {
  __typename: string;
  state: string;
  contentId: string;
  contentType: string;
  pagee: string;
  routingFilters: null;
}

export interface AryInfo {
  __typename: string;
  text: string;
}

export interface SaveID {
  __typename: string;
  id: string;
  type: string;
}
