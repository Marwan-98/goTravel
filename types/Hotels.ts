export interface AvailableSort {
  __typename: string;
  isAscending: boolean;
  isSelected: boolean;
  name: string;
  surfaces: Surface[];
  trackingKey: string;
  trackingTitle: string;
  title: SearchTitle;
  tooltipV2: null;
}

export enum Surface {
  List = "LIST",
  Map = "MAP",
}

export interface SearchTitle {
  __typename: SearchTitleTypename;
  string: string;
  debugValueKey: null;
}

export enum SearchTitleTypename {
  AppPresentationLocalizedString = "AppPresentation_LocalizedString",
}

export interface BarItem {
  __typename: string;
  stableDiffingType: string;
  surfaces: Surface[];
  buttonText?: SearchTitle;
  trackingKey: string;
  trackingTitle: string;
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
  navTitle: null;
  searchTitle: SearchTitle;
  searchGhostText: null;
  showMapToggle: boolean;
  plusMarketingBanner: null;
  route: RouteKeyClass;
  datePicker: DatePicker;
}

export interface DatePicker {
  __typename: string;
  commerceType: CommerceType;
  configuration: Configuration;
  lastSelectableDate: Date;
  surfaces: Surface[];
  timeZoneOffset: string;
}

export enum CommerceType {
  Hotel = "HOTEL",
}

export interface Configuration {
  __typename: string;
  configType: string;
  maxAdultsPerRoom: number;
  maxChildrenPerRoom: number;
  maxRooms: number;
  maxStayLength: number;
}

export interface RouteKeyClass {
  __typename: RouteTypename;
  fragment: null;
  page: string;
  url: null | string;
  nonCanonicalUrl: null | string;
  typedParams: RouteKeyTypedParams | null;
}

export enum RouteTypename {
  RoutingRoute = "Routing_Route",
}

export interface RouteKeyTypedParams {
  __typename: string;
  contentType: ContentType;
  geoId: number;
  isCollectionView: null;
  isList: boolean;
  isMap: null;
  isNearby: null;
  nearLocationId: null;
  nearLocationType: null;
  pagee: null | string;
  sort: string;
  sortOrder: string;
  routingFilters: null;
}

export enum ContentType {
  Hotel = "hotel",
}

export interface DatePickerConfig {
  __typename: string;
  hotelDatePickerConfig: HotelDatePickerConfig;
  lastSelectableDate: Date;
  restaurantDatePickerConfig: RestaurantDatePickerConfig;
  surfaces: Surface[];
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

export interface Filters {
  __typename: string;
  showAllText: SearchTitle;
  availableFilterGroups: AvailableFilterGroup[];
}

export interface AvailableFilterGroup {
  __typename: string;
  name: string;
  groupType: string;
  tooltip: null;
  filters: Filter[];
  trackingKey: string;
  trackingTitle: string;
}

export interface Filter {
  __typename: string;
  trackingKey: string;
  trackingTitle: string;
  title: string;
  name: string;
  surfaces: Surface[];
  tooltip: FilterTooltip | null;
  values?: Value[];
  filterType?: string;
  minValue?: number;
  maxValue?: number;
  selectedRangeStart?: number;
  selectedRangeEnd?: number;
  collapsed?: boolean;
  locations?: LocationElement[];
  maxDistance?: number;
  minDistance?: number;
  selectedDistance?: null;
  unitFormat?: SearchTitle;
}

export interface LocationElement {
  __typename: LocationTypename;
  count: null;
  value: string;
  isSelected: boolean;
  object: LocationObject;
  selectedAccessibilityString: SearchTitle;
  unselectedAccessibilityString: SearchTitle;
  tooltip: null;
}

export enum LocationTypename {
  AppPresentationEnumeratedValueWithCount = "AppPresentation_EnumeratedValueWithCount",
  AppPresentationFilterReferenceWithCount = "AppPresentation_FilterReferenceWithCount",
}

export interface LocationObject {
  __typename: string;
  location: ObjectLocation;
}

export interface ObjectLocation {
  __typename: string;
  names: Names;
}

export interface Names {
  __typename: string;
  name: string;
}

export interface FilterTooltip {
  __typename: string;
  icon: string;
  labelText: SearchTitle | null;
  popUpText: SearchTitle;
  dialog: Dialog | null;
}

export interface Dialog {
  __typename: string;
  dialogType: string;
  title: SearchTitle | null;
  content: TextClass;
  buttonV2: SingleButton | null;
}

export interface SingleButton {
  __typename: SingleButtonTypename;
  commerceTrackingUrl: null;
  link: CtaClass;
  variant: Variant;
}

export enum SingleButtonTypename {
  AppPresentationBorderlessButton = "AppPresentation_BorderlessButton",
}

export interface CtaClass {
  __typename: LinkTypename;
  externalUrl: string;
  text: SearchTitle;
  accessibilityString: SearchTitle | null;
  trackingContext: string;
}

export enum LinkTypename {
  AppPresentationExternalLink = "AppPresentation_ExternalLink",
}

export enum Variant {
  Primary = "PRIMARY",
}

export interface TextClass {
  __typename: MerchandisingTextTypename;
  htmlString: string;
}

export enum MerchandisingTextTypename {
  AppPresentationHTMLString = "AppPresentation_HtmlString",
}

export interface Value {
  __typename: LocationTypename;
  count: null;
  value: string;
  isSelected: boolean;
  object: ValueObject;
  selectedAccessibilityString: SearchTitle | null;
  unselectedAccessibilityString: SearchTitle | null;
  tooltip?: FilterTooltip | null;
  filterName?: string;
}

export interface ValueObject {
  __typename: ObjectTypename;
  text?: string;
  tag?: Tag;
  minimumRatingValue?: number;
}

export enum ObjectTypename {
  AppPresentationBubbleRatingFilterValue = "AppPresentation_BubbleRatingFilterValue",
  AppPresentationSimpleTextFilterValue = "AppPresentation_SimpleTextFilterValue",
  AppPresentationTagFilterValue = "AppPresentation_TagFilterValue",
}

export interface Tag {
  __typename: TagTypename;
  localizedName: string;
  tagId: number;
}

export enum TagTypename {
  TagTagInformationV2 = "Tag_TagInformationV2",
}

export interface Impression {
  __typename: string;
  data: string;
}

export interface MapSection {
  __typename: string;
  clusterId: string;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  anchor?: null;
  center?: null;
  pins?: Pin[];
  content?: Content[];
}

export interface Content {
  __typename: PurpleTypename;
  badge: Badge | null;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  isSaved: boolean;
  saveId: SaveID;
  cardTitle: SearchTitle;
  primaryInfo: PrimaryInfo | null;
  secondaryInfo: null;
  cardPhoto: CardPhoto;
  bubbleRating: BubbleRating;
  distance: null;
  labels: Label[];
  descriptiveText: null;
  cardLink: CardLink;
  merchandisingText: TextClass | null;
  commerceButtons: CommerceButtons | null;
  closureInfo: null;
}

export enum PurpleTypename {
  AppPresentationHorizontalMerchandisingCard = "AppPresentation_HorizontalMerchandisingCard",
}

export interface Badge {
  __typename: BadgeTypename;
  size: Size;
  type: BadgeType;
  year: string;
}

export enum BadgeTypename {
  AppPresentationBadge = "AppPresentation_Badge",
}

export enum Size {
  Small = "SMALL",
}

export enum BadgeType {
  BestOfBest = "BEST_OF_BEST",
  TravellerChoice = "TRAVELLER_CHOICE",
}

export interface BubbleRating {
  __typename: BubbleRatingTypename;
  rating: number;
  numberReviews: SearchTitle;
}

export enum BubbleRatingTypename {
  AppPresentationBubbleRating = "AppPresentation_BubbleRating",
}

export interface CardLink {
  __typename: CardLinkTypename;
  route: CardLinkRoute;
  webviewRoute: null;
  text: null;
  accessibilityString: SearchTitle | null;
  trackingContext: TrackingContext;
}

export enum CardLinkTypename {
  AppPresentationInternalLink = "AppPresentation_InternalLink",
}

export interface CardLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: Page;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export enum Page {
  AppDetail = "AppDetail",
}

export interface PurpleTypedParams {
  __typename: TypedParamsTypename;
  contentId: string;
  contentType: ContentType;
  spAttributionToken: null;
  wasPlusShown: null;
}

export enum TypedParamsTypename {
  RoutingAppDetailParameters = "Routing_AppDetailParameters",
}

export enum TrackingContext {
  ServerCard = "server_card",
  ServerOpenHR = "server_openHR",
}

export interface CardPhoto {
  __typename: CardPhotoTypename;
  sizes: Sizes;
}

export enum CardPhotoTypename {
  AppPresentationPhotoItem = "AppPresentation_PhotoItem",
}

export interface Sizes {
  __typename: SizesTypename;
  maxHeight: number;
  maxWidth: number;
  urlTemplate: string;
}

export enum SizesTypename {
  AppPresentationPhotoItemSizeDynamic = "AppPresentation_PhotoItemSizeDynamic",
}

export interface CommerceButtons {
  __typename: CommerceButtonsTypename;
  singleButton: SingleButton;
  firstCommerceButton: null;
  secondCommerceButton: null;
}

export enum CommerceButtonsTypename {
  AppPresentationButtons = "AppPresentation_Buttons",
}

export interface Label {
  __typename: string;
  text: SearchTitle;
}

export interface PrimaryInfo {
  __typename: PrimaryInfoTypename;
  text: TextEnum;
}

export enum PrimaryInfoTypename {
  AppPresentationJoinedLocalizableObjects = "AppPresentation_JoinedLocalizableObjects",
}

export enum TextEnum {
  AllInclusive = "All-inclusive",
  FreeBreakfastIncluded = "Free breakfast included",
  ReserveNowPayAtStay = "Reserve now, pay at stay",
}

export interface SaveID {
  __typename: SaveIDTypename;
  id: string;
  type: SaveIDType;
}

export enum SaveIDTypename {
  TripsReferenceV2 = "Trips_ReferenceV2",
}

export enum SaveIDType {
  Location = "location",
}

export interface Pin {
  __typename: PinTypename;
  trackingKey: string;
  trackingTitle: string;
  icon: Icon;
  isSaved: boolean;
  saveId: SaveID;
  geoPoint: GeoPoint;
  fallbackIcon: CommerceType;
}

export enum PinTypename {
  AppPresentationMapPin = "AppPresentation_MapPin",
}

export interface GeoPoint {
  __typename: GeoPointTypename;
  latitude: number;
  longitude: number;
}

export enum GeoPointTypename {
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
  Hotels = "hotels",
}

export enum Name {
  HotelsFill = "hotels-fill",
}

export enum SectionTypename {
  AppPresentationAdPlaceholderNative = "AppPresentation_AdPlaceholderNative",
  AppPresentationDisclaimerSection = "AppPresentation_DisclaimerSection",
  AppPresentationLogicalBreak = "AppPresentation_LogicalBreak",
  AppPresentationSecondaryButton = "AppPresentation_SecondaryButton",
  AppPresentationSingleCard = "AppPresentation_SingleCard",
  AppPresentationSortDisclaimerSection = "AppPresentation_SortDisclaimerSection",
}

export enum ClusterID {
  AdPlaceholderNative = "AD_PLACEHOLDER_NATIVE",
  Hotel0 = "HOTEL_0",
  Hotel30 = "HOTEL_30",
  HotelSortCountDisclaimer = "HOTEL_SORT_COUNT_DISCLAIMER",
}

export enum Divider {
  FullBleed = "full-bleed",
}

export interface SectionLink {
  __typename: string;
  text: SearchTitle;
  route: RouteKeyClass;
  routeKey: RouteKeyClass;
  autoLoad: boolean;
  updateToken: string;
  accessibilityString: SearchTitle;
  trackingContext: string;
}

export interface Hotel {
  __typename: SingleCardContentTypename;
  badge: Badge | null;
  bubbleRating: BubbleRating;
  commerceButtons: CommerceButtons | null;
  cardLink: CardLink;
  cardTitle: SearchTitle;
  descriptiveText: null;
  distance: null;
  commerceInfo: CommerceInfo | null;
  isSaved: boolean;
  labels: Label[];
  cardPhotos: CardPhoto[];
  primaryInfo: PrimaryInfo | null;
  saveId: SaveID;
  secondaryInfo: null;
  closureInfo: null;
  stableDiffingType: string;
  trackingKey: string;
  trackingTitle: string;
}

export enum SingleCardContentTypename {
  AppPresentationFullWidthCommerceCard = "AppPresentation_FullWidthCommerceCard",
}

export interface CommerceInfo {
  __typename: CommerceInfoTypename;
  commerceType: CommerceInfoCommerceType;
  priceForDisplay: SearchTitle | null;
  strikethroughPrice: null;
  provider: Provider;
  details: PrimaryInfo | null;
  cta: CtaClass | null;
  loadingMessage: SearchTitle | null;
  commerceSummary: null;
  pricingPeriod: null;
}

export enum CommerceInfoTypename {
  AppPresentationHotelCommerceInfo = "AppPresentation_HotelCommerceInfo",
}

export enum CommerceInfoCommerceType {
  HotelCommerceInfo = "HotelCommerceInfo",
}

export enum Provider {
  BookingCOM = "Booking.com",
  ExpediaCOM = "Expedia.com",
  HotelsCOM = "Hotels.com",
}

export enum Spacing {
  Spacing04 = "spacing-04",
  Spacing05 = "spacing-05",
  Spacing06 = "spacing-06",
}

export interface TargetingParam {
  __typename: TargetingParamTypename;
  key: string;
  values: string[];
}

export enum TargetingParamTypename {
  AppPresentationAdTargetingParam = "AppPresentation_AdTargetingParam",
}

export interface SectionTooltip {
  __typename: string;
  text: TextClass;
  tooltip: FilterTooltip;
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
