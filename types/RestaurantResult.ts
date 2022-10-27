export interface RestaurantResult {
  data: RestaurantResultData;
}

export interface RestaurantResultData {
  AppPresentation_queryAppDetailV2: AppPresentationQueryAppDetailV2[];
}

export interface AppPresentationQueryAppDetailV2 {
  __typename: string;
  container: Container;
  skippedSections: any[];
  sections: Section[];
  impressions: Impression[];
  status: Status;
  commerce: Commerce;
  updatedClusterIds: any[];
  datePickerConfig: DatePickerConfig;
}

export interface Commerce {
  __typename: string;
  attractionCommerce: AttractionCommerce;
  hotelCommerce: HotelCommerce;
  restaurantCommerce: RestaurantCommerce;
  lastUpdated: null;
}

export interface AttractionCommerce {
  __typename: string;
  setByUser: boolean;
  updated: null;
  startDate: Date;
  endDate: Date;
  pax: Pax[];
}

export interface Pax {
  __typename: string;
  count: number;
  ageBand: string;
  endAge: null;
  maxTravelersPerBooking: null;
  minTravelersPerBooking: null;
  startAge: null;
}

export interface HotelCommerce {
  __typename: string;
  setByUser: boolean;
  updated: null;
  checkIn: Date;
  checkOut: Date;
  rooms: Room[];
}

export interface Room {
  __typename: string;
  adults: number;
  childrenAges: any[];
}

export interface RestaurantCommerce {
  __typename: string;
  setByUser: boolean;
  updated: null;
  partySize: number;
  reservationTime: Date;
}

export interface Container {
  __typename: string;
  navTitle: string;
  isSaved: boolean;
  saveId: SaveID;
  shareInfo: ShareInfo;
}

export interface SaveID {
  __typename: SaveIDTypename;
  id: string;
  type: Type;
}

export type SaveIDTypename = {
  TripsReferenceV2: string;
};

export type Type = {
  Location: string;
};

export interface ShareInfo {
  __typename: string;
  emailBody: EmailBody;
  emailSubject: EmailSubject;
  nonEmailMessage: EmailSubject;
  webUrl: string;
}

export interface EmailBody {
  __typename: EmailBodyTypename;
  htmlString: string;
}

export type EmailBodyTypename = {
  AppPresentationHTMLString: string;
  AppPresentationJoinedLocalizableObjects: string;
  AppPresentationSimpleTextFilterValue: string;
  MediaAttribution: string;
};

export interface EmailSubject {
  __typename: EmailSubjectTypename;
  string: string;
  debugValueKey: null;
}

export type EmailSubjectTypename = {
  AppPresentationLocalizedString: string;
};

export interface DatePickerConfig {
  __typename: string;
  hotelDatePickerConfig: HotelDatePickerConfig;
  lastSelectableDate: Date;
  restaurantDatePickerConfig: RestaurantDatePickerConfig;
  surfaces: string[];
  timeZoneOffset: string;
  attractionProductDatePickerConfig: null;
}

export interface HotelDatePickerConfig {
  __typename: string;
  maxStayLength: number;
}

export interface RestaurantDatePickerConfig {
  __typename: string;
  numDisplayOptions: number;
  reservationRange: ReservationRange;
}

export interface ReservationRange {
  __typename: string;
  maxDate: Date;
  maxTime: string;
  minDate: Date;
  minTime: string;
}

export interface Impression {
  __typename: string;
  data: string;
}

export interface Section {
  __typename: string;
  trackingTitle?: string;
  trackingKey?: string;
  stableDiffingType: string;
  photoCount?: number;
  galleryLink?: GalleryLink;
  sponsoredBy?: null;
  albumPhotos?: AlbumPhoto[];
  heroContent?: HeroContent[];
  labels?: any[] | null;
  clusterId: null | string;
  spacing?: string;
  divider?: null;
  background?: null;
  locationId?: LocationID;
  name?: string;
  numberReviews?: number;
  distance?: null;
  rankingDetailsV2?: RankingDetailsV2;
  managementCenterRoute?: null;
  reviewsLink?: ReviewsLink;
  accessibleTags?: AccessibleTags;
  tags?: AccessibleTags;
  ownerStatus?: string;
  rating?: number;
  contactLinks?: ContactLink[];
  iconName?: string;
  showMore?: ShowMore;
  text?: EmailSubject;
  todaySchedule?: EmailSubject[];
  sectionTitle?: EmailSubject;
  about?: string;
  nullableContent?: NullableContent[];
  tagsSubsection?: null;
  adUnitId?: string;
  adSizes?: string[];
  targetingParams?: TargetingParam[];
  address?: Address;
  neighborhood?: null;
  gettingThere?: GettingThere;
  anchor?: Anchor;
  center?: Center;
  pins?: Anchor[];
  route?: SectionRoute;
  tooltip?: null;
  nonNullContent?: NonNullContent[];
  photoCTA?: PhotoCta;
  reviewCTA?: PhotoCta;
  sectionType?: string;
  tabs?: Tab[];
  wideCardsCarouselTitle?: EmailSubject;
  subtitle?: null;
  seeAllV2?: SeeAllV2;
  wideCardsCarouselContent?: WideCardsCarouselContent[];
  sectionDescription?: EmailSubject;
  improveThisListingRoute?: ImproveThisListingRoute;
}

export interface AccessibleTags {
  __typename: EmailBodyTypename;
  text: string;
}

export interface Address {
  __typename: string;
  address: string;
}

export interface AlbumPhoto {
  __typename: AlbumPhotoTypename;
  data: Data;
}

export type AlbumPhotoTypename = {
  AppPresentationMedia: string;
  RoutingFAQParameters: string;
  RoutingImproveListingParameters: string;
};

export interface Data {
  __typename: DataTypename;
  id: number;
  caption: string;
  publishedDateTime: Date;
  thumbsUpVotes: number;
  uploadDateTime: Date;
  attribution: AccessibleTags;
  photoSizeDynamic: PhotoSizeDynamic;
  sizes: Size[];
}

export type DataTypename = {
  MediaPhotoResult: string;
};

export interface PhotoSizeDynamic {
  __typename: PhotoSizeDynamicTypename;
  maxHeight: number;
  maxWidth: number;
  urlTemplate: string;
}

export type PhotoSizeDynamicTypename = {
  AppPresentationPhotoItemSizeDynamic: string;
  MediaPhotoResultSizeDynamic: string;
  PhotoSizeDynamic: string;
};

export interface Size {
  __typename: SizeTypename;
  width: number;
  height: number;
  url: string;
}

export type SizeTypename = {
  MediaMediaSize: string;
  PhotoSize: string;
};

export interface Anchor {
  __typename: AnchorTypename;
  trackingKey: string;
  trackingTitle: string;
  icon: Icon;
  isSaved: boolean;
  saveId: SaveID;
  geoPoint: Center;
  fallbackIcon: FallbackIcon;
}

export type AnchorTypename = {
  AppPresentationMapPin: string;
};

export type FallbackIcon = {
  Attraction: string;
  Restaurant: string;
};

export interface Center {
  __typename: CenterTypename;
  latitude: number;
  longitude: number;
}

export type CenterTypename = {
  AppPresentationGeoPoint: string;
};

export interface Icon {
  __typename: IconTypename;
  activeName: ActiveName;
  name: Name;
}

export type IconTypename = {
  AppPresentationMapPinIcon: string;
};

export type ActiveName = {
  Attractions: string;
  Restaurants: string;
};

export type Name = {
  AttractionsFill: string;
  RestaurantsFill: string;
};

export interface ContactLink {
  __typename: string;
  clickTrackingUrl: null;
  icon: null | string;
  link: PhotoCta;
  linkType: string;
}

export interface PhotoCta {
  __typename: string;
  externalUrl?: string;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
  route?: PhotoCTARoute;
  webviewRoute?: null;
}

export interface PhotoCTARoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export type RouteTypename = {
  RoutingRoute: string;
};

export interface PurpleTypedParams {
  __typename: string;
  contentId: string;
}

export interface GalleryLink {
  __typename: GalleryLinkTypename;
  route: GalleryLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

export type GalleryLinkTypename = {
  AppPresentationInternalLink: string;
};

export interface GalleryLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: FluffyTypedParams;
}

export interface FluffyTypedParams {
  __typename: string;
  albumId: null;
  locationIdStr: string;
  galleryConfig: GalleryConfig;
  offset: null;
}

export type GalleryConfig = {
  Rr: string;
};

export interface GettingThere {
  __typename: string;
  sectionTitle: EmailSubject;
  transportItems: TransportItem[];
}

export interface TransportItem {
  __typename: string;
  transitAndTravel: EmailSubject;
}

export interface HeroContent {
  __typename: AlbumPhotoTypename;
}

export interface ImproveThisListingRoute {
  __typename: GalleryLinkTypename;
  route: WebviewRouteClass;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface WebviewRouteClass {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: HeroContent;
}

export interface LocationID {
  __typename: string;
  id: string;
  placeType: PlaceTypetype;
}

export type PlaceTypetype = {
  Attraction: string;
  Restaurant: string;
};

export interface NonNullContent {
  __typename: NonNullContentTypename;
  stableDiffingType: string;
  trackingKey: string;
  trackingTitle: string;
  bubbleRating: BubbleRating;
  cardTitle: EmailSubject;
  cardLink: CardLink;
  distance: EmailSubject;
  cardPhoto: CardPhoto | null;
  primaryInfo: AccessibleTags;
}

export type NonNullContentTypename = {
  AppPresentationHorizontalMinimalCardWithBackground: string;
};

export interface BubbleRating {
  __typename: BubbleRatingTypename;
  rating: number;
  numberReviews: EmailSubject;
}

export type BubbleRatingTypename = {
  AppPresentationBubbleRating: string;
};

export interface CardLink {
  __typename: GalleryLinkTypename;
  route: CardLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: EmailSubject;
  trackingContext: TrackingContext;
}

export interface CardLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: PurplePage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: TentacledTypedParams;
}

export type PurplePage = {
  AppDetail: string;
};

export interface TentacledTypedParams {
  __typename: PurpleTypename;
  contentId: string;
  contentType: PlaceTypetype;
  spAttributionToken: null;
  wasPlusShown: null;
}

export type PurpleTypename = {
  RoutingAppDetailParameters: string;
};

export type TrackingContext = {
  ServerCard: string;
};

export interface CardPhoto {
  __typename: CardPhotoTypename;
  sizes: PhotoSizeDynamic;
}

export type CardPhotoTypename = {
  AppPresentationPhotoItem: string;
};

export interface NullableContent {
  __typename: string;
  title?: EmailSubject;
  icon?: null;
  list?: EmailSubject[];
}

export interface RankingDetailsV2 {
  __typename: string;
  text: AccessibleTags;
  route: RankingDetailsV2Route;
  trackingContext: string;
}

export interface RankingDetailsV2Route {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: StickyTypedParams;
}

export interface StickyTypedParams {
  __typename: string;
  contentType: PlaceTypetype;
  geoId: number;
  isCollectionView: null;
  isList: boolean;
  isMap: null;
  isNearby: null;
  nearLocationId: null;
  nearLocationType: null;
  pagee: null;
  sort: null;
  sortOrder: null;
  routingFilters: RoutingFilter[];
}

export interface RoutingFilter {
  __typename: string;
  id: string;
  value: string[];
}

export interface ReviewsLink {
  __typename: GalleryLinkTypename;
  route: ReviewsLinkRoute;
  webviewRoute: null;
  text: EmailSubject | null;
  accessibilityString: null;
  trackingContext: string;
}

export interface ReviewsLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: IndigoTypedParams;
}

export interface IndigoTypedParams {
  __typename: string;
  contentType: PlaceTypetype;
  detailId: number;
  routingFilters: null;
  pagee: null;
}

export interface SectionRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: IndecentTypedParams;
}

export interface IndecentTypedParams {
  __typename: string;
  contentId: string;
  contentType: PlaceTypetype;
  geoId?: null;
  routingFilters?: null;
}

export interface SeeAllV2 {
  __typename: GalleryLinkTypename;
  route: RankingDetailsV2Route;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface ShowMore {
  __typename: GalleryLinkTypename;
  route: SectionRoute;
  webviewRoute?: null;
  text?: EmailSubject | null;
  accessibilityString?: null;
  trackingContext?: string;
}

export interface Tab {
  __typename: string;
  initialTab: boolean | null;
  seeMore: ReviewsLink | null;
  seeMoreV2: ReviewsLink | null;
  searchLink: ReviewsLink | null;
  tabTitle: EmailSubject;
  tabSearchHint: EmailSubject | null;
  content: Content[];
}

export interface Content {
  __typename: string;
  filters?: Filters;
  count?: number;
  keywords?: string[];
  rating?: number;
  ratingFilterId?: string;
  searchFilterId?: string;
  ratingCountsV2?: RatingCountsV2;
  reviewCountText?: EmailSubject;
  reviewCTA?: PhotoCta;
  photoCTA?: PhotoCta;
  subRatings?: null;
  tooltip?: null;
  stableDiffingType: string;
  trackingKey?: string;
  trackingTitle?: string;
  reviewRating?: number;
  bubbleRatingText?: AccessibleTags;
  helpfulVote?: HelpfulVote;
  labels?: any[];
  cardLink?: null;
  photos?: PhotoElement[];
  ownerResponse?: OwnerResponse;
  reviewActions?: Action[];
  safetyText?: null;
  disclaimer?: EmailSubject;
  htmlText?: EmailBody;
  htmlTitle?: EmailBody;
  tip?: null;
  tipText?: null;
  supplierName?: null;
  translatedByGoogle?: boolean;
  subratings?: null;
  userProfile?: UserProfile;
  publishedDate?: EmailSubject;
  initiallyCollapsed?: boolean;
  noContentText?: EmailSubject;
  ctaList?: CtaList[];
}

export interface CtaList {
  __typename: GalleryLinkTypename;
  route: PurpleRoute;
  webviewRoute: WebviewRouteClass | null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface PurpleRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: HilariousTypedParams;
}

export interface HilariousTypedParams {
  __typename: string;
  contentId: string;
  contentType?: PlaceTypetype;
}

export interface Filters {
  __typename: string;
  showAllText: EmailSubject;
  availableFilterGroups: AvailableFilterGroup[];
}

export interface AvailableFilterGroup {
  __typename: string;
  name: string;
  groupType: string;
  tooltip: null;
  filters?: FilterElement[];
  trackingKey: string;
  trackingTitle: string;
  filter?: PurpleFilter;
}

export interface PurpleFilter {
  __typename: string;
  trackingKey: string;
  trackingTitle: string;
  name: string;
  surfaces: any[];
  title: string;
  tooltip: null;
  values: PurpleValue[];
}

export interface PurpleValue {
  __typename: ValueTypename;
  count: number;
  value: string;
  isSelected: boolean;
  object: AccessibleTags;
  selectedAccessibilityString: EmailSubject;
  unselectedAccessibilityString: EmailSubject;
  tooltip: null;
}

export type ValueTypename = {
  AppPresentationtypeeratedValueWithCount: string;
};

export interface FilterElement {
  __typename: string;
  trackingKey: string;
  trackingTitle: string;
  title: string;
  name: string;
  surfaces: any[];
  tooltip: null;
  values: FluffyValue[];
}

export interface FluffyValue {
  __typename: ValueTypename;
  count: number | null;
  value: string;
  isSelected: boolean;
  object: Object;
  selectedAccessibilityString: EmailSubject | null;
  unselectedAccessibilityString: EmailSubject | null;
  tooltip: null;
}

export interface Object {
  __typename: FluffyTypename;
  minimumRatingValue?: number;
  text?: string;
}

export type FluffyTypename = {
  AppPresentationBubbleRatingFilterValue: string;
  AppPresentationSimpleTextFilterValue: string;
};

export interface HelpfulVote {
  __typename: string;
  hasVotedReviewHelpful: boolean;
  helpfulVoteAction: HelpfulVoteAction;
  helpfulVotes: EmailSubject;
}

export interface HelpfulVoteAction {
  __typename: string;
  objectId: string;
  objectType: string;
}

export interface OwnerResponse {
  __typename: string;
  disclaimer: EmailSubject;
  publishedDate: EmailSubject;
  displayName: string;
  positionAtLocation: EmailSubject;
  avatar: AlbumPhoto;
  profileLink: null;
  reportAction: Action;
  text: string;
}

export interface Action {
  __typename: string;
  actionName?: EmailSubject;
  actionType?: string;
  authenticateUser?: boolean;
  webUrl?: WebURL;
}

export interface WebURL {
  __typename: string;
  externalUrl: string;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

export interface PhotoElement {
  __typename: TentacledTypename;
  photoId: number;
  link: Link;
  photo: PhotoPhoto;
}

export type TentacledTypename = {
  AppPresentationPhoto: string;
};

export interface Link {
  __typename: GalleryLinkTypename;
  route: FluffyRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

export interface FluffyRoute {
  __typename: RouteTypename;
  fragment: null;
  page: FluffyPage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: AmbitiousTypedParams;
}

export type FluffyPage = {
  PhotoDetails: string;
};

export interface AmbitiousTypedParams {
  __typename: StickyTypename;
  locationIdStr: string;
  albumId: null;
  galleryConfig: GalleryConfig;
  mediaId: number;
  mediaType: MediaType;
  to: null;
  from: null;
  entryPoint: EntryPoint;
  reviewId: string;
  positionId: null;
}

export type StickyTypename = {
  RoutingPhotoDetailsParameters: string;
};

export type EntryPoint = {
  Review: string;
};

export type MediaType = {
  P: string;
};

export interface PhotoPhoto {
  __typename: IndigoTypename;
  photoSizeDynamic: PhotoSizeDynamic;
  photoSizes: Size[];
}

export type IndigoTypename = {
  Photo: string;
};

export interface RatingCountsV2 {
  __typename: string;
  averageBar: Bar;
  excellentBar: Bar;
  poorBar: Bar;
  terribleBar: Bar;
  veryGoodBar: Bar;
}

export interface Bar {
  __typename: string;
  isSelected: boolean;
  label: EmailSubject;
  count: EmailSubject;
  percentage: number;
}

export interface UserProfile {
  __typename: string;
  contributionCount: EmailSubject;
  displayName: string;
  localizedDisplayName: EmailSubject;
  hometown: null | string;
  avatar: AlbumPhoto;
  profileLink: ProfileLink;
}

export interface ProfileLink {
  __typename: GalleryLinkTypename;
  route: ProfileLinkRoute;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: EmailSubject;
  trackingContext: string;
}

export interface ProfileLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: CunningTypedParams;
}

export interface CunningTypedParams {
  __typename: string;
  contentId: null;
  contentType: null;
  tab: null;
  username: string;
}

export interface TargetingParam {
  __typename: TargetingParamTypename;
  key: string;
  values: string[];
}

export type TargetingParamTypename = {
  AppPresentationAdTargetingParam: string;
};

export interface WideCardsCarouselContent {
  __typename: string;
  badge: null;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  isSaved: boolean;
  saveId: SaveID;
  cardTitle: EmailSubject;
  primaryInfo: AccessibleTags;
  secondaryInfo: AccessibleTags;
  closureInfo: null;
  cardPhoto: CardPhoto;
  bubbleRating: BubbleRating;
  distance: null;
  commerceButtons: null;
  labels: any[];
  cardLink: CardLink;
}

export interface Status {
  __typename: string;
  message: null;
  success: boolean;
  pollingStatus: null;
}
