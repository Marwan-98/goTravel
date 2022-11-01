export interface APIResult {
  __typename: string;
  barItems: BarItem[];
  container: Container;
  quickLinks: null;
  filters: Filters;
  availableSorts: AvailableSort[];
  datePickerConfig: DatePickerConfig;
  sections: Section[];
  skippedSections: string[];
  mapSections: MapSection[];
  impressions: Impression[];
  status: Status;
  commerce: Commerce;
  updatedClusterIds: any[];
  trackingKey: string;
}

export interface AvailableSort {
  __typename: string;
  isAscending: boolean;
  isSelected: boolean;
  name: string;
  surfaces: string[];
  trackingKey: string;
  trackingTitle: string;
  title: SearchTitle;
  tooltipV2: null;
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
  surfaces: string[];
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
  route: ContainerRoute;
  datePicker: DatePicker;
}

export interface DatePicker {
  __typename: string;
  commerceType: string;
  configuration: Configuration;
  lastSelectableDate: Date;
  surfaces: string[];
  timeZoneOffset: null;
}

export interface Configuration {
  __typename: string;
  configType: string;
  maxRange: null;
}

export interface ContainerRoute {
  __typename: RouteTypename;
  fragment: null;
  page: RouteKeyPage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: PurpleTypedParams;
}

export enum RouteTypename {
  RoutingRoute = "Routing_Route",
}

export enum RouteKeyPage {
  AppList = "AppList",
  AttractionCommerce = "AttractionCommerce",
}

export interface PurpleTypedParams {
  __typename: PurpleTypename;
  contentType: ContentType;
  geoId: number;
  isCollectionView: null;
  isList: boolean;
  isMap: null;
  isNearby: null;
  nearLocationId: null;
  nearLocationType: null;
  pagee: null | string;
  sort: null;
  sortOrder: null;
  routingFilters: null;
}

export enum PurpleTypename {
  RoutingAppListParameters = "Routing_AppListParameters",
  RoutingAttractionCommerceParameters = "Routing_AttractionCommerceParameters",
}

export enum ContentType {
  Attraction = "attraction",
}

export interface DatePickerConfig {
  __typename: string;
  hotelDatePickerConfig: HotelDatePickerConfig;
  lastSelectableDate: Date;
  restaurantDatePickerConfig: RestaurantDatePickerConfig;
  surfaces: string[];
  timeZoneOffset: null;
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
  surfaces: string[];
  title: string;
  tooltip: null;
  values: PurpleValue[];
}

export interface PurpleValue {
  __typename: ValueTypename;
  count: null;
  value: string;
  isSelected: boolean;
  object: PurpleObject;
  selectedAccessibilityString: SearchTitle;
  unselectedAccessibilityString: SearchTitle;
  tooltip: null;
}

export enum ValueTypename {
  AppPresentationEnumeratedValueWithCount = "AppPresentation_EnumeratedValueWithCount",
}

export interface PurpleObject {
  __typename: string;
  localizedText: SearchTitle;
}

export interface FilterElement {
  __typename: string;
  trackingKey: string;
  trackingTitle: string;
  name: string;
  surfaces: string[];
  title: string;
  tooltip: null;
  values: FluffyValue[];
}

export interface FluffyValue {
  __typename: ValueTypename;
  count: number;
  value: string;
  isSelected: boolean;
  object: FluffyObject;
  selectedAccessibilityString: SearchTitle | null;
  unselectedAccessibilityString: SearchTitle | null;
  tooltip: null;
}

export interface FluffyObject {
  __typename: ObjectTypename;
  text?: string;
  minimumRatingValue?: number;
  tag?: Tag;
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
  __typename: SingleCardContentTypename;
  badge: Badge | null;
  trackingKey: string;
  trackingTitle: string;
  stableDiffingType: string;
  isSaved: boolean;
  saveId: SaveID;
  cardTitle: SearchTitle;
  primaryInfo: AryInfo;
  secondaryInfo: AryInfo | null;
  cardPhoto: CardPhoto;
  bubbleRating: BubbleRating;
  distance: null;
  labels: any[];
  descriptiveText: null;
  cardLink: CardLink;
  merchandisingText: Text | null;
  commerceButtons: CommerceButtons | null;
  closureInfo: null;
}

export enum SingleCardContentTypename {
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
  accessibilityString: SearchTitle;
  trackingContext: CardLinkTrackingContext;
}

export enum CardLinkTypename {
  AppPresentationInternalLink = "AppPresentation_InternalLink",
}

export interface CardLinkRoute {
  __typename: RouteTypename;
  fragment: null;
  page: PurplePage;
  url: string;
  nonCanonicalUrl: string;
  typedParams: FluffyTypedParams;
}

export enum PurplePage {
  AppDetail = "AppDetail",
}

export interface FluffyTypedParams {
  __typename: FluffyTypename;
  contentId: string;
  contentType: ContentType;
  spAttributionToken: null;
  wasPlusShown: null;
}

export enum FluffyTypename {
  RoutingAppDetailParameters = "Routing_AppDetailParameters",
}

export enum CardLinkTrackingContext {
  ServerCard = "server_card",
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
  singleButton: null;
  firstCommerceButton: CommerceButton | null;
  secondCommerceButton: CommerceButton;
}

export enum CommerceButtonsTypename {
  AppPresentationButtons = "AppPresentation_Buttons",
}

export interface CommerceButton {
  __typename: SecondCommerceButtonTypename;
  commerceTrackingUrl: null;
  link: SecondCommerceButtonLink;
}

export enum SecondCommerceButtonTypename {
  AppPresentationTertiaryCommerceButton = "AppPresentation_TertiaryCommerceButton",
}

export interface SecondCommerceButtonLink {
  __typename: CardLinkTypename;
  route: RouteKeyClass;
  webviewRoute: null;
  text: SearchTitle;
  accessibilityString: null;
  trackingContext: LinkTrackingContext;
}

export interface RouteKeyClass {
  __typename: RouteTypename;
  fragment: null;
  page: RouteKeyPage;
  url: null | string;
  nonCanonicalUrl: null | string;
  typedParams: RouteKeyTypedParams | null;
}

export interface RouteKeyTypedParams {
  __typename: PurpleTypename;
  contentType: ContentType;
  geoId?: number;
  isCollectionView?: null;
  isList?: boolean;
  isMap?: null;
  isNearby?: null;
  nearLocationId?: null;
  nearLocationType?: null;
  pagee: string;
  sort?: null;
  sortOrder?: null;
  routingFilters: null;
  state?: State;
  contentId?: string;
}

export enum State {
  Tickets = "tickets",
  Tours = "tours",
}

export enum LinkTrackingContext {
  ServerReserve = "server_reserve",
  ServerSeeTours = "server_seeTours",
}

export interface Text {
  __typename: string;
  htmlString: string;
}

export interface AryInfo {
  __typename: PrimaryInfoTypename;
  text: string;
}

export enum PrimaryInfoTypename {
  AppPresentationJoinedLocalizableObjects = "AppPresentation_JoinedLocalizableObjects",
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
  fallbackIcon: FallbackIcon;
}

export enum PinTypename {
  AppPresentationMapPin = "AppPresentation_MapPin",
}

export enum FallbackIcon {
  Attraction = "ATTRACTION",
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
  Attractions = "attractions",
}

export enum Name {
  AttractionsFill = "attractions-fill",
}

export interface Section {
  __typename: SectionTypename;
  tooltip?: SectionTooltip;
  groupName?: SearchTitle;
  clusterId: ClusterID | null;
  sectionType?: string;
  stableDiffingType: string;
  trackingKey?: string;
  trackingTitle?: string;
  singleCardContent?: Content;
  spacing?: Spacing;
  divider?: Divider | null;
  background?: null;
  adUnitId?: string;
  adSizes?: string[];
  targetingParams?: TargetingParam[];
  link?: SectionLink;
}

export enum SectionTypename {
  AppPresentationAdPlaceholderNative = "AppPresentation_AdPlaceholderNative",
  AppPresentationLogicalBreak = "AppPresentation_LogicalBreak",
  AppPresentationSecondaryButton = "AppPresentation_SecondaryButton",
  AppPresentationSingleCard = "AppPresentation_SingleCard",
  AppPresentationSortDisclaimerSection = "AppPresentation_SortDisclaimerSection",
}

export enum ClusterID {
  AdPlaceholderNative = "AD_PLACEHOLDER_NATIVE",
  Attractions0 = "ATTRACTIONS_0",
  Attractions30 = "ATTRACTIONS_30",
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

export enum Spacing {
  Spacing04 = "spacing-04",
  Spacing05 = "spacing-05",
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
  text: Text;
  tooltip: TooltipTooltip;
}

export interface TooltipTooltip {
  __typename: string;
  icon: string;
  labelText: SearchTitle;
  popUpText: SearchTitle;
  dialog: Dialog;
}

export interface Dialog {
  __typename: string;
  dialogType: string;
  title: SearchTitle;
  content: Text;
  buttonV2: null;
}

export interface Status {
  __typename: string;
  message: null;
  success: boolean;
  pollingStatus: null;
}
