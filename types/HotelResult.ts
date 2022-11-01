export interface HotelResult {
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
  lastUpdated: Date;
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
  updated: boolean | null;
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
  labels?: any[];
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
  tags?: null;
  ownerStatus?: null;
  rating?: number;
  contactLinks?: SectionContactLink[];
  hotelCommerceInfo?: HotelCommerce;
  bookViaHotelWebsite?: null;
  bookViaHotelWebsiteSubtitle?: null;
  primaryOfferV2?: PrimaryOfferV2;
  viewAll?: ViewAll;
  hotelWebsite?: null;
  similarHotels?: null;
  plusOfferNoLongerAvailableNotice?: null;
  state?: string;
  sectionTitle?: EmailSubject;
  lastUpdated?: EmailSubject;
  viewAllRoute?: ViewAllRouteClass;
  subtitle?: EmailSubject | null;
  managementResponse?: string;
  managementResponseLanguage?: string;
  subsections?: Subsection[];
  translateAction?: EmailSubject;
  about?: string;
  nullableContent?: NullableContent[];
  showMore?: ShowMore;
  tagsSubsection?: TagsSubsection;
  adUnitId?: string;
  adSizes?: string[];
  targetingParams?: TargetingParam[];
  nonNullTitle?: EmailSubject;
  seeAllV2?: null;
  mediumCardsCarouselContent?: MediumCardsCarouselContent[];
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
  sectionDescription?: EmailSubject;
  improveThisListingRoute?: ImproveThisListingRoute;
  link?: null;
  nullableText?: EmailSubject;
}

export interface Address {
  __typename: string;
  address: string;
}

export interface AlbumPhoto {
  __typename: AlbumPhotoTypename;
  data: AlbumPhotoData;
}

export enum AlbumPhotoTypename {
  AppPresentationMedia = "AppPresentation_Media",
}

export interface AlbumPhotoData {
  __typename: DataTypename;
  id: number;
  caption: string;
  publishedDateTime: Date;
  thumbsUpVotes: number;
  uploadDateTime: Date;
  attribution: Text;
  photoSizeDynamic: PhotoSizeDynamic;
  sizes: Size[];
}

export enum DataTypename {
  MediaPhotoResult = "Media_PhotoResult",
}

export interface Text {
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
  Hotel = "HOTEL",
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
  Hotels = "hotels",
  Restaurants = "restaurants",
}

export enum Name {
  AttractionsFill = "attractions-fill",
  HotelsFill = "hotels-fill",
  RestaurantsFill = "restaurants-fill",
}

export interface SectionContactLink {
  __typename: string;
  clickTrackingUrl: null | string;
  icon: null | string;
  link: PhotoCta;
  linkType: string;
}

export interface PhotoCta {
  __typename: string;
  externalUrl?: string;
  text: EmailSubject;
  accessibilityString: EmailSubject | null;
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

export enum RouteTypename {
  RoutingRoute = "Routing_Route",
}

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

export enum GalleryLinkTypename {
  AppPresentationInternalLink = "AppPresentation_InternalLink",
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
  __typename: string;
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
  placeType: PlaceTypeEnum;
}

export enum PlaceTypeEnum {
  Hotel = "hotel",
}

export interface MediumCardsCarouselContent {
  __typename: MediumCardsCarouselContentTypename;
  stableDiffingType: string;
  trackingKey: string;
  trackingTitle: string;
  cardTitle: EmailSubject;
  primaryInfo: Text;
  secondaryInfo: null;
  labels: any[];
  bubbleRating: null;
  commerceButtons: null;
  contributor: Contributor;
  descriptiveText: null;
  cardLink: ViewAllRouteClass;
}

export enum MediumCardsCarouselContentTypename {
  AppPresentationNoImageContributorCard = "AppPresentation_NoImageContributorCard",
}

export interface ViewAllRouteClass {
  __typename: GalleryLinkTypename;
  route: PurpleRoute;
  webviewRoute: WebviewRouteClass | null;
  text: EmailSubject | null;
  accessibilityString: EmailSubject | null;
  trackingContext: ViewAllRouteTrackingContext;
}

export interface PurpleRoute {
  __typename: RouteTypename;
  fragment: null;
  page: PurplePage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: TentacledTypedParams;
}

export enum PurplePage {
  AppAskAQuestion = "AppAskAQuestion",
  PoiHealthSafety = "PoiHealthSafety",
  PoiReviewDetail = "PoiReviewDetail",
}

export interface TentacledTypedParams {
  __typename: PurpleTypename;
  contentId: string;
  contentType: PlaceTypeEnum;
  rid?: string;
}

export enum PurpleTypename {
  RoutingAppAskAQuestionParameters = "Routing_AppAskAQuestionParameters",
  RoutingPoiHealthSafetyParameters = "Routing_PoiHealthSafetyParameters",
  RoutingPoiReviewDetailParameters = "Routing_PoiReviewDetailParameters",
}

export enum ViewAllRouteTrackingContext {
  AskAQuestionQAHeader = "askAQuestion_qa_header",
  ServerHotelRoomTip = "server_hotel_room_tip",
  ServerViewAll = "server_viewAll",
}

export interface Contributor {
  __typename: ContributorTypename;
  primaryInfo: EmailSubject;
  secondaryInfo: null;
  avatar: AlbumPhoto;
}

export enum ContributorTypename {
  AppPresentationContributor = "AppPresentation_Contributor",
}

export interface NonNullContent {
  __typename: NonNullContentTypename;
  stableDiffingType: string;
  trackingKey: string;
  trackingTitle: string;
  bubbleRating: BubbleRating;
  cardTitle: EmailSubject;
  cardLink: CardLink;
  distance: EmailSubject | null;
  cardPhoto: CardPhoto | null;
  primaryInfo: Text | null;
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
  __typename: GalleryLinkTypename;
  route: FluffyRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: EmailSubject;
  trackingContext: PurpleTrackingContext;
}

export interface FluffyRoute {
  __typename: RouteTypename;
  fragment: null;
  page: FluffyPage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: StickyTypedParams;
}

export enum FluffyPage {
  AppDetail = "AppDetail",
}

export interface StickyTypedParams {
  __typename: FluffyTypename;
  contentId: string;
  contentType: ContentType;
  spAttributionToken: null;
  wasPlusShown: null;
}

export enum FluffyTypename {
  RoutingAppDetailParameters = "Routing_AppDetailParameters",
}

export enum ContentType {
  Attraction = "attraction",
  Restaurant = "restaurant",
}

export enum PurpleTrackingContext {
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
  standaloneItem?: Text;
  contactText?: null;
  contactLinks?: NullableContentContactLink[];
  icon?: null;
  list?: EmailSubject[];
}

export interface NullableContentContactLink {
  __typename: string;
  clickTrackingUrl: null;
  icon: string;
  link: Cta;
  linkType: string;
}

export interface Cta {
  __typename: CtaTypename;
  externalUrl: string;
  text: EmailSubject | null;
  accessibilityString: null;
  trackingContext: string;
}

export enum CtaTypename {
  AppPresentationExternalLink = "AppPresentation_ExternalLink",
}

export interface PrimaryOfferV2 {
  __typename: string;
  displayPrice: EmailSubject;
  cta: Cta;
  details: EmailSubject[];
  providerLogoUrl: string;
  providerName: string;
  strikeThroughPrice: null;
  pricingPeriod: null;
  stickyFooter: StickyFooter;
  status: string;
}

export interface StickyFooter {
  __typename: string;
  cta: Cta;
  displayPrice: EmailSubject;
  strikeThroughPrice: null;
  text: EmailSubject;
}

export interface RankingDetailsV2 {
  __typename: string;
  text: Text;
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
  isList: null;
  isMap: null;
  isNearby: null;
  nearLocationId: null;
  nearLocationType: null;
  pagee: null;
  sort: null;
  sortOrder: null;
  routingFilters: null;
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
  typedParams: IndecentTypedParams;
}

export interface IndecentTypedParams {
  __typename: string;
  contentType?: PlaceTypeEnum;
  detailId?: number;
  routingFilters?: null;
  pagee?: null | string;
  contentId?: string;
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
  geoId?: null;
  routingFilters?: null;
}

export interface ShowMore {
  __typename: GalleryLinkTypename;
  route: SectionRoute;
  webviewRoute?: null;
  text?: EmailSubject;
  accessibilityString?: null;
  trackingContext?: string;
}

export interface Subsection {
  __typename: string;
  title: EmailSubject;
  icon: null;
  list: EmailSubject[];
}

export interface Tab {
  __typename: string;
  initialTab: boolean | null;
  seeMore: ReviewsLink;
  seeMoreV2: ReviewsLink;
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
  subRatings?: ContentSubRatings;
  tooltip?: null;
  stableDiffingType?: string;
  trackingKey?: string;
  trackingTitle?: string;
  reviewRating?: number;
  bubbleRatingText?: Text;
  helpfulVote?: HelpfulVote;
  labels?: Label[];
  cardLink?: null;
  photos?: PhotoElement[];
  ownerResponse?: OwnerResponse;
  reviewActions?: ReportActionElement[];
  safetyText?: null;
  disclaimer?: EmailSubject;
  htmlText?: EmailBody;
  htmlTitle?: EmailBody;
  tip?: null;
  tipText?: null;
  supplierName?: null;
  translatedByGoogle?: boolean;
  subratings?: Subrating[] | null;
  userProfile?: ErProfile;
  publishedDate?: EmailSubject;
  initiallyCollapsed?: boolean;
  askAQuestionLink?: ViewAllRouteClass;
  submitQuestionAction?: SubmitAnswerActionClass;
  poiName?: string;
  postingGuidelinesLink?: Cta;
  answerActionText?: EmailSubject;
  submitAnswerAction?: SubmitAnswerActionClass;
  allAnswerLinkV2?: null;
  allAnswerLink?: ImproveThisListingRoute;
  question?: Question;
  topAnswer?: Question | null;
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
  __typename: TentacledTypename;
  count: number;
  value: string;
  isSelected: boolean;
  object: Text;
  selectedAccessibilityString: EmailSubject;
  unselectedAccessibilityString: EmailSubject;
  tooltip: null;
}

export enum TentacledTypename {
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
  __typename: TentacledTypename;
  count: number | null;
  value: string;
  isSelected: boolean;
  object: Object;
  selectedAccessibilityString: EmailSubject | null;
  unselectedAccessibilityString: EmailSubject | null;
  tooltip: null;
}

export interface Object {
  __typename: StickyTypename;
  minimumRatingValue?: number;
  text?: string;
}

export enum StickyTypename {
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

export interface Label {
  __typename: string;
  text: EmailSubject;
}

export interface OwnerResponse {
  __typename: string;
  disclaimer: EmailSubject;
  publishedDate: EmailSubject;
  displayName: string;
  positionAtLocation: EmailSubject;
  avatar: AlbumPhoto;
  profileLink: null;
  reportAction: ReportActionElement;
  text: string;
}

export interface ReportActionElement {
  __typename: string;
  actionName?: EmailSubject;
  actionType?: string;
  authenticateUser?: boolean;
  webUrl?: Cta;
}

export interface PhotoElement {
  __typename: string;
  photoId: number;
  link: Link;
  photo: PhotoPhoto;
}

export interface Link {
  __typename: GalleryLinkTypename;
  route: TentacledRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: null;
  trackingContext: string;
}

export interface TentacledRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: AmbitiousTypedParams;
}

export interface AmbitiousTypedParams {
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

export interface Question {
  __typename: string;
  text: string;
  memberProfile: ErProfile;
  actions: Actions;
  writtenDate: EmailSubject;
  thumbsUpAction: SubmitAnswerActionClass | null;
  thumbsUpCount: number | null;
}

export interface Actions {
  __typename: string;
  deleteAction: SubmitAnswerActionClass;
  reportAction: ReportAction;
}

export interface SubmitAnswerActionClass {
  __typename: string;
  authenticateUser: boolean;
  tpcid: number | null;
  pid: number;
  pstid: number | null;
  lcid: number | null;
  webUrl: Cta;
}

export interface ReportAction {
  __typename: string;
  authenticateUser: boolean;
  webUrl: Cta;
}

export interface ErProfile {
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

export interface ContentSubRatings {
  __typename: string;
  data: SubRatingsData;
}

export interface SubRatingsData {
  __typename: string;
  subRatings: DataSubRatings;
}

export interface DataSubRatings {
  __typename: string;
  cleanliness: number;
  location: number;
  service: number;
  value: number;
}

export interface Subrating {
  __typename: string;
  label: EmailSubject;
  value: EmailSubject;
}

export interface TagsSubsection {
  __typename: string;
  tagsV2: TagsV2[];
}

export interface TagsV2 {
  __typename: string;
  text: null;
  tag: Tag;
}

export interface Tag {
  __typename: string;
  localizedName: string;
  tagId: number;
}

export interface TargetingParam {
  __typename: TargetingParamTypename;
  key: string;
  values: string[];
}

export enum TargetingParamTypename {
  AppPresentationAdTargetingParam = "AppPresentation_AdTargetingParam",
}

export interface ViewAll {
  __typename: GalleryLinkTypename;
  route: ViewAllRoute;
  webviewRoute: null;
  text: EmailSubject;
  accessibilityString: null;
  trackingContext: ViewAllRouteTrackingContext;
}

export interface ViewAllRoute {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: string;
  nonCanonicalUrl: string;
  typedParams: MagentaTypedParams;
}

export interface MagentaTypedParams {
  __typename: string;
  detailId: number;
}

export interface Status {
  __typename: string;
  message: null;
  success: boolean;
  pollingStatus: PollingStatus;
}

export interface PollingStatus {
  __typename: string;
  delayForNextPollInMillis: number;
  updateToken: string;
}
