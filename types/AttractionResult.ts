export interface AttractionResult {
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

export enum SaveIDTypename {
  TripsReferenceV2 = "Trips_ReferenceV2",
}

export enum Type {
  Location = "location",
}

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

export enum EmailBodyTypename {
  AppPresentationHTMLString = "AppPresentation_HtmlString",
  AppPresentationJoinedLocalizableObjects = "AppPresentation_JoinedLocalizableObjects",
  AppPresentationSimpleTextFilterValue = "AppPresentation_SimpleTextFilterValue",
  MediaAttribution = "Media_Attribution",
}

export interface EmailSubject {
  __typename: EmailSubjectTypename;
  string: string;
  debugValueKey: null;
}

export enum EmailSubjectTypename {
  AppPresentationLocalizedString = "AppPresentation_LocalizedString",
}

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
  accessibleTags?: null;
  tags?: Tags;
  ownerStatus?: null;
  rating?: number;
  contactLinks?: ContactLink[];
  poiCommerceAttractionPrimary?: PoiCommerceAttractionPrimary;
  poiCommerceAttractionSecondary?: null;
  sectionTitle?: EmailSubject;
  about?: string;
  nullableContent?: NullableContent[];
  showMore?: ShowMore | null;
  tagsSubsection?: null;
  adUnitId?: string;
  adSizes?: string[];
  targetingParams?: TargetingParam[];
  address?: Address;
  neighborhood?: null;
  gettingThere?: null;
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

export interface Address {
  __typename: string;
  address: string;
}

export interface AlbumPhoto {
  __typename: AlbumPhotoTypename;
  data: Data;
}

export enum AlbumPhotoTypename {
  AppPresentationMedia = "AppPresentation_Media",
}

export interface Data {
  __typename: DataTypename;
  id: number;
  caption: string;
  publishedDateTime: Date;
  thumbsUpVotes: number;
  uploadDateTime: Date;
  attribution: Tags;
  photoSizeDynamic: PhotoSizeDynamic;
  sizes: Size[];
}

export enum DataTypename {
  MediaPhotoResult = "Media_PhotoResult",
}

export interface Tags {
  __typename: EmailBodyTypename;
  text: string;
}

export interface PhotoSizeDynamic {
  __typename: PhotoSizeDynamicTypename;
  maxHeight: number;
  maxWidth: number;
  urlTemplate: string;
}

export enum PhotoSizeDynamicTypename {
  AppPresentationPhotoItemSizeDynamic = "AppPresentation_PhotoItemSizeDynamic",
  MediaPhotoResultSizeDynamic = "Media_PhotoResultSizeDynamic",
  PhotoSizeDynamic = "PhotoSizeDynamic",
}

export interface Size {
  __typename: SizeTypename;
  width: number;
  height: number;
  url: string;
}

export enum SizeTypename {
  MediaMediaSize = "Media_MediaSize",
  PhotoSize = "PhotoSize",
}

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

export enum AnchorTypename {
  AppPresentationMapPin = "AppPresentation_MapPin",
}

export enum FallbackIcon {
  Attraction = "ATTRACTION",
  Restaurant = "RESTAURANT",
}

export interface Center {
  __typename: CenterTypename;
  latitude: number;
  longitude: number;
}

export enum CenterTypename {
  AppPresentationGeoPoint = "AppPresentation_GeoPoint",
}

export interface Icon {
  __typename: IconTypename;
  activeName: ActiveName;
  name: Name;
}

export enum IconTypename {
  AppPresentationMapPinIcon = "AppPresentation_MapPinIcon",
}

export enum ActiveName {
  Attractions = "attractions",
  Restaurants = "restaurants",
}

export enum Name {
  AttractionsFill = "attractions-fill",
  RestaurantsFill = "restaurants-fill",
}

export interface ContactLink {
  __typename: string;
  clickTrackingUrl: null;
  icon: null;
  link: PhotoCta;
  linkType: string;
}

export interface PhotoCta {
  __typename: PhotoCTATypename;
  route: PhotoCTARoute;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export enum PhotoCTATypename {
  AppPresentationInternalLink = "AppPresentation_InternalLink",
}

export interface PhotoCTARoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export enum RouteTypename {
  RoutingRoute = "Routing_Route",
}

export interface PurpleTypedParams {
  __typename: string;
  contentId: string;
}

export interface GalleryLink {
  __typename: PhotoCTATypename;
  route: GalleryLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

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
  galleryConfig: string;
  offset: null;
}

export interface HeroContent {
  __typename: string;
}

export interface ImproveThisListingRoute {
  __typename: PhotoCTATypename;
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
  placeType: PlaceTypeEnum;
}

export enum PlaceTypeEnum {
  Attraction = "attraction",
  Restaurant = "restaurant",
}

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
  primaryInfo: Tags | null;
}

export enum NonNullContentTypename {
  AppPresentationHorizontalMinimalCardWithBackground = "AppPresentation_HorizontalMinimalCardWithBackground",
}

export interface BubbleRating {
  __typename: BubbleRatingTypename;
  rating: number;
  numberReviews: EmailSubject;
}

export enum BubbleRatingTypename {
  AppPresentationBubbleRating = "AppPresentation_BubbleRating",
}

export interface CardLink {
  __typename: PhotoCTATypename;
  route: CardLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: EmailSubject;
  trackingContext: TrackingContext;
}

export interface CardLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: Page;
  url: string;
  nonCanonicalUrl: string;
  typedParams: TentacledTypedParams;
}

export enum Page {
  AppDetail = "AppDetail",
}

export interface TentacledTypedParams {
  __typename: TypedParamsTypename;
  contentId: string;
  contentType: PlaceTypeEnum;
  spAttributionToken: null;
  wasPlusShown: null;
}

export enum TypedParamsTypename {
  RoutingAppDetailParameters = "Routing_AppDetailParameters",
}

export enum TrackingContext {
  ServerCard = "server_card",
}

export interface CardPhoto {
  __typename: CardPhotoTypename;
  sizes: PhotoSizeDynamic;
}

export enum CardPhotoTypename {
  AppPresentationPhotoItem = "AppPresentation_PhotoItem",
}

export interface NullableContent {
  __typename: string;
  title?: EmailSubject;
  awards?: Award[];
}

export interface Award {
  __typename: string;
  awardIcon: string;
  awardCategory: string;
  title: EmailSubject;
  years: string;
  awardDetails: AwardDetails;
}

export interface AwardDetails {
  __typename: string;
  title: EmailSubject;
  description: EmailSubject;
}

export interface PoiCommerceAttractionPrimary {
  __typename: string;
  title: EmailSubject;
  subTitle: EmailSubject;
  price: EmailSubject;
  linkV2: V2;
}

export interface V2 {
  __typename: PhotoCTATypename;
  route: LinkV2Route;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface LinkV2Route {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: StickyTypedParams;
}

export interface StickyTypedParams {
  __typename: string;
  state?: string;
  contentId?: string;
  contentType: PlaceTypeEnum;
  pagee: null | string;
  routingFilters?: null;
  detailId?: number;
}

export interface RankingDetailsV2 {
  __typename: string;
  text: Tags;
  route: RankingDetailsV2Route;
  trackingContext: string;
}

export interface RankingDetailsV2Route {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: IndigoTypedParams;
}

export interface IndigoTypedParams {
  __typename: string;
  contentType: PlaceTypeEnum;
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
  routingFilters: RoutingFilter[] | null;
}

export interface RoutingFilter {
  __typename: string;
  id: string;
  value: string[];
}

export interface ReviewsLink {
  __typename: PhotoCTATypename;
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
  typedParams: IndecentTypedParams;
}

export interface IndecentTypedParams {
  __typename: string;
  contentType?: PlaceTypeEnum;
  detailId?: number;
  routingFilters?: null;
  pagee?: null;
}

export interface SectionRoute {
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
  contentType: PlaceTypeEnum;
  geoId: null;
  routingFilters: null;
}

export interface SeeAllV2 {
  __typename: PhotoCTATypename;
  route: RankingDetailsV2Route;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface ShowMore {
  __typename: PhotoCTATypename;
  route: SectionRoute;
}

export interface Tab {
  __typename: string;
  initialTab: boolean | null;
  seeMore: ReviewsLink;
  seeMoreV2: V2;
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
  stableDiffingType?: string;
  trackingKey?: string;
  trackingTitle?: string;
  reviewRating?: number;
  bubbleRatingText?: Tags;
  helpfulVote?: HelpfulVote;
  labels?: any[];
  cardLink?: null;
  photos?: PhotoElement[];
  ownerResponse?: null;
  reviewActions?: ReviewAction[];
  safetyText?: null;
  disclaimer?: EmailSubject;
  htmlText?: EmailBody;
  htmlTitle?: EmailBody;
  tip?: null;
  tipText?: null;
  supplierName?: null;
  translatedByGoogle?: boolean;
  subratings?: null;
  userProfile?: ErProfile;
  publishedDate?: EmailSubject;
  initiallyCollapsed?: boolean;
  askAQuestionLink?: AskAQuestionLink;
  submitQuestionAction?: Action;
  poiName?: string;
  postingGuidelinesLink?: PostingGuidelinesLink;
  answerActionText?: EmailSubject | null;
  submitAnswerAction?: Action | null;
  allAnswerLinkV2?: AllAnswerLinkV2 | null;
  allAnswerLink?: ImproveThisListingRoute;
  question?: Question;
  topAnswer?: Question | null;
}

export interface AllAnswerLinkV2 {
  __typename: PhotoCTATypename;
  route: AllAnswerLinkV2Route;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: string;
}

export interface AllAnswerLinkV2Route {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: AmbitiousTypedParams;
}

export interface AmbitiousTypedParams {
  __typename: string;
  contentId: string;
  contentType: PlaceTypeEnum;
  pagee: string;
  questionId: string;
}

export interface AskAQuestionLink {
  __typename: PhotoCTATypename;
  route: PurpleRoute;
  webviewRoute: WebviewRouteClass;
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
  typedParams: CunningTypedParams;
}

export interface CunningTypedParams {
  __typename: string;
  contentId: string;
  contentType: PlaceTypeEnum;
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
  object: Tags;
  selectedAccessibilityString: EmailSubject;
  unselectedAccessibilityString: EmailSubject;
  tooltip: null;
}

export enum ValueTypename {
  AppPresentationEnumeratedValueWithCount = "AppPresentation_EnumeratedValueWithCount",
}

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
  __typename: PurpleTypename;
  minimumRatingValue?: number;
  text?: string;
}

export enum PurpleTypename {
  AppPresentationBubbleRatingFilterValue = "AppPresentation_BubbleRatingFilterValue",
  AppPresentationSimpleTextFilterValue = "AppPresentation_SimpleTextFilterValue",
}

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

export interface PhotoElement {
  __typename: string;
  photoId: number;
  link: Link;
  photo: PhotoPhoto;
}

export interface Link {
  __typename: PhotoCTATypename;
  route: FluffyRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

export interface FluffyRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: MagentaTypedParams;
}

export interface MagentaTypedParams {
  __typename: string;
  locationIdStr: string;
  albumId: null;
  galleryConfig: string;
  mediaId: number;
  mediaType: string;
  to: null;
  from: null;
  entryPoint: string;
  reviewId: string;
  positionId: null;
}

export interface PhotoPhoto {
  __typename: string;
  photoSizeDynamic: PhotoSizeDynamic;
  photoSizes: Size[];
}

export interface PostingGuidelinesLink {
  __typename: PostingGuidelinesLinkTypename;
  externalUrl: string;
  text: EmailSubject | null;
  accessibilityString: null;
  trackingContext: string;
}

export enum PostingGuidelinesLinkTypename {
  AppPresentationExternalLink = "AppPresentation_ExternalLink",
}

export interface Question {
  __typename: string;
  text: string;
  memberProfile: ErProfile;
  actions: Actions;
  writtenDate: EmailSubject;
  thumbsUpAction: Action | null;
  thumbsUpCount: number | null;
}

export interface Actions {
  __typename: string;
  deleteAction: Action;
  reportAction: ReportAction;
}

export interface Action {
  __typename: string;
  authenticateUser: boolean;
  tpcid: number | null;
  pid: number;
  pstid: number | null;
  lcid: number | null;
  webUrl: PostingGuidelinesLink;
}

export interface ReportAction {
  __typename: string;
  authenticateUser: boolean;
  webUrl: PostingGuidelinesLink;
}

export interface ErProfile {
  __typename: string;
  contributionCount: EmailSubject | null;
  displayName: string;
  localizedDisplayName: EmailSubject;
  hometown: null | string;
  avatar: AlbumPhoto;
  profileLink: ProfileLink;
}

export interface ProfileLink {
  __typename: PhotoCTATypename;
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
  typedParams: FriskyTypedParams;
}

export interface FriskyTypedParams {
  __typename: string;
  contentId: null;
  contentType: null;
  tab: null;
  username: string;
}

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

export interface ReviewAction {
  __typename: string;
  actionName?: EmailSubject;
  actionType?: string;
  authenticateUser?: boolean;
  webUrl?: PostingGuidelinesLink;
}

export interface TargetingParam {
  __typename: TargetingParamTypename;
  key: string;
  values: string[];
}

export enum TargetingParamTypename {
  AppPresentationAdTargetingParam = "AppPresentation_AdTargetingParam",
}

export interface WideCardsCarouselContent {
  __typename: WideCardsCarouselContentTypename;
  badge: Badge | null;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  isSaved: boolean;
  saveId: SaveID;
  cardTitle: EmailSubject;
  primaryInfo: Tags;
  secondaryInfo: Tags;
  closureInfo: null;
  cardPhoto: CardPhoto;
  bubbleRating: BubbleRating;
  distance: null;
  commerceButtons: null;
  labels: any[];
  cardLink: CardLink;
}

export enum WideCardsCarouselContentTypename {
  AppPresentationVerticalStandardCard = "AppPresentation_VerticalStandardCard",
}

export interface Badge {
  __typename: string;
  size: string;
  type: string;
  year: string;
}

export interface Status {
  __typename: string;
  message: null;
  success: boolean;
  pollingStatus: null;
}
