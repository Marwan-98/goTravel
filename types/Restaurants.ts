export interface Restaurant {
  __typename: string;
  badge: Badge;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  cardTitle: CardTitle;
  primaryInfo: PrimaryInfo;
  secondaryInfo: null;
  commerceTimes: any[];
  commerceButtons: CommerceButtons;
  isSaved: boolean;
  saveId: SaveID;
  cardPhoto: CardPhoto;
  distance: null;
  bubbleRating: BubbleRating;
  labels: any[];
  descriptiveText: null;
  cardLink: CardLink;
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
  route: Route;
  webviewRoute: null;
  text: null;
  accessibilityString: CardTitle;
  trackingContext: string;
}

export interface Route {
  __typename: string;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: TypedParams;
}

export interface TypedParams {
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
  singleButton: SingleButton;
  firstCommerceButton: null;
  secondCommerceButton: null;
}

export interface SingleButton {
  __typename: string;
  commerceTrackingUrl: null;
  link: Link;
  variant: string;
}

export interface Link {
  __typename: string;
  externalUrl: string;
  text: CardTitle;
  accessibilityString: CardTitle;
  trackingContext: string;
}

export interface PrimaryInfo {
  __typename: string;
  text: string;
}

export interface SaveID {
  __typename: string;
  id: string;
  type: string;
}
