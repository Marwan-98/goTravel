export interface Hotels {
  header: string;
  query: Query;
  searchResults: SearchResults;
  sortResults: SortResults;
  filters: Filters;
  pointOfSale: PointOfSale;
}

export interface Filters {
  applied: boolean;
  name: Name;
  starRating: StarRating;
  guestRating: GuestRating;
  landmarks: Landmarks;
  neighbourhood: AccommodationType;
  accommodationType: AccommodationType;
  facilities: AccommodationType;
  accessibility: Accessibility;
  themesAndTypes: AccommodationType;
  price: FiltersPrice;
  paymentPreference: PaymentPreference;
  welcomeRewards: FiltersWelcomeRewards;
}

export interface Accessibility {
  applied: boolean;
  items: AccessibilityItem[];
}

export interface AccessibilityItem {
  label: string;
  value: string;
}

export interface AccommodationType {
  applied: boolean;
  items: AccommodationTypeItem[];
}

export interface AccommodationTypeItem {
  label: string;
  value: string;
  disabled?: boolean;
  applied?: boolean;
}

export interface GuestRating {
  applied: boolean;
  range: GuestRatingRange;
}

export interface GuestRatingRange {
  min: Min;
  max: Max;
}

export interface Max {
  defaultValue: number;
}

export interface Min {
  defaultValue: number;
  value: number;
}

export interface Landmarks {
  selectedOrder: any[];
  items: AccessibilityItem[];
  distance: any[];
}

export interface Name {
  item: NameItem;
  autosuggest: Autosuggest;
}

export interface Autosuggest {
  additionalUrlParams: AdditionalURLParams;
}

export interface AdditionalURLParams {
  "resolved-location": string;
  "q-destination": string;
  "destination-id": string;
}

export interface NameItem {
  value: string;
}

export interface PaymentPreference {
  items: AccessibilityItem[];
}

export interface FiltersPrice {
  label: string;
  range: PriceRange;
  multiplier: number;
  applied: boolean;
}

export interface PriceRange {
  min: Min;
  max: Min;
  increments: number;
}

export interface StarRating {
  applied: boolean;
  items: StarRatingItem[];
}

export interface StarRatingItem {
  value: number;
  applied?: boolean;
  disabled?: boolean;
}

export interface FiltersWelcomeRewards {
  label: string;
  items: AccessibilityItem[];
}

export interface PointOfSale {
  currency: Currency;
}

export interface Currency {
  code: string;
  symbol: string;
  separators: string;
  format: string;
}

export interface Query {
  destination: Destination;
}

export interface Destination {
  id: string;
  value: string;
  resolvedLocation: string;
}

export interface SearchResults {
  totalCount: number;
  results: Result[];
  pagination: Pagination;
}

export interface Pagination {
  currentPage: number;
  pageGroup: string;
  nextPageStartIndex: number;
  nextPageNumber: number;
  nextPageGroup: string;
}

export interface Result {
  id: number;
  name: string;
  starRating: number;
  urls: Urls;
  address: Address;
  welcomeRewards: ResultWelcomeRewards;
  guestReviews: GuestReviews;
  landmarks: Landmark[];
  geoBullets: any[];
  ratePlan: RatePlan;
  neighbourhood: string;
  deals: Deals;
  messaging: Messaging;
  badging: Badging;
  pimmsAttributes: string;
  coordinate: Coordinate;
  roomsLeft?: number;
  providerType: string;
  supplierHotelId: number;
  isAlternative: boolean;
  optimizedThumbUrls: OptimizedThumbUrls;
}

export interface Address {
  streetAddress: string;
  extendedAddress: string;
  locality: string;
  postalCode: string;
  region: string;
  countryName: string;
  countryCode: string;
  obfuscate: boolean;
}

export interface Badging {
  hotelBadge?: HotelBadge;
}

export interface HotelBadge {
  type: string;
  label: string;
}

export interface Coordinate {
  lat: number;
  lon: number;
}

export interface Deals {
  secretPrice?: SecretPrice;
  priceReasoning?: string;
  specialDeal?: SecretPrice;
}

export interface SecretPrice {
  dealText: string;
}

export interface GuestReviews {
  unformattedRating: number;
  rating: string;
  total: number;
  scale: number;
  badge: string;
  badgeText: string;
}

export interface Landmark {
  label: string;
  distance: string;
}

export interface Messaging {
  scarcity?: string;
}

export interface OptimizedThumbUrls {
  srpDesktop: string;
}

export interface RatePlan {
  price: RatePlanPrice;
  features: Features;
  type: string;
}

export interface Features {
  freeCancellation: boolean;
  paymentPreference: boolean;
  noCCRequired: boolean;
}

export interface RatePlanPrice {
  current: string;
  exactCurrent: number;
  fullyBundledPricePerStay: string;
  old?: string;
}

export interface Urls {}

export interface ResultWelcomeRewards {
  collect: boolean;
}

export interface SortResults {
  options: Option[];
  distanceOptionLandmarkId: number;
}

export interface Option {
  label: string;
  itemMeta: string;
  choices: OptionChoice[];
  enhancedChoices: EnhancedChoice[];
  selectedChoiceLabel?: string;
}

export interface OptionChoice {
  label: string;
  value: string;
  selected: boolean;
}

export interface EnhancedChoice {
  label: string;
  itemMeta: string;
  choices: EnhancedChoiceChoice[];
}

export interface EnhancedChoiceChoice {
  label: string;
  id: number;
}
