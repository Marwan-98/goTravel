import { Dispatch, SetStateAction } from "react";

export interface Hotel {
  name: string;
  address: Address;
  localisedAddress: null;
  header: Header;
  roomsAndRates: RoomsAndRates;
  starRatingTitle: string;
  starRating: number;
  featuredPrice: FeaturedPrice;
  mapWidget: MapWidget;
  roomTypeNames: string[];
  tagline: string[];
  freebies: string[];
  reviews: Reviews;
  atAGlance: AtAGlance;
  amenities: Amenity[];
  hygieneAndCleanliness: HygieneAndCleanliness;
  smallPrint: SmallPrint;
  specialFeatures: SpecialFeatures;
  overview: Overview;
  transportation: Transportation;
  neighborhood: Neighborhood;
}

export interface Address {
  countryName: string;
  cityName: string;
  postalCode: string;
  provinceName: string;
  addressLine1: string;
  countryCode: string;
  pattern: string;
  fullAddress: string;
}

export interface Amenity {
  heading: string;
  listItems: ListItem[];
}

export interface ListItem {
  heading: string;
  listItems: string[];
}

export interface AtAGlance {
  keyFacts: KeyFacts;
  travellingOrInternet: TravellingOrInternet;
  transportAndOther: TransportAndOther;
}

export interface KeyFacts {
  hotelSize: string[];
  arrivingLeaving: string[];
  specialCheckInInstructions: string[];
  requiredAtCheckIn: string[];
}

export interface TransportAndOther {
  transport: Transport;
  otherInformation: any[];
  otherInclusions: any[];
}

export interface Transport {
  transfers: any[];
  parking: string[];
  offsiteTransfer: any[];
}

export interface TravellingOrInternet {
  travelling: Travelling;
  internet: string[];
}

export interface Travelling {
  children: string[];
  pets: string[];
  extraPeople: any[];
}

export interface FeaturedPrice {
  currentPrice: CurrentPrice;
  taxInclusiveFormatting: boolean;
  bookNowButton: boolean;
  fullyBundledPricePerStay: string;
}

export interface CurrentPrice {
  formatted: string;
  plain: number;
}

export interface Header {
  hotelId: string;
  destinationId: string;
  pointOfSaleId: string;
  currencyCode: string;
  occupancyKey: string;
  hotelLocation: HotelLocation;
}

export interface HotelLocation {
  coordinates: Coordinates;
  resolvedLocation: string;
  locationName: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface HygieneAndCleanliness {
  title: string;
  hygieneQualifications: HygieneQualifications;
  healthAndSafetyMeasures: HealthAndSafetyMeasures;
}

export interface HealthAndSafetyMeasures {
  title: string;
  description: string;
  measures: string[];
}

export interface HygieneQualifications {
  title: string;
  qualifications: string[];
}

export interface MapWidget {
  staticMapUrl: string;
}

export interface Neighborhood {
  neighborhoodName: string;
  neighborhoodImage: string;
  neighborhoodShortDescription: string;
  neighborhoodLongDescription: string;
}

export interface Overview {
  overviewSections: OverviewSection[];
}

export interface OverviewSection {
  title?: string;
  type: string;
  content: string[];
  contentType: string;
}

export interface Reviews {
  brands: Brands;
}

export interface Brands {
  scale: number;
  formattedScale: string;
  rating: number;
  formattedRating: string;
  lowRating: boolean;
  badgeText: string;
  total: number;
}

export interface RoomsAndRates {
  rooms: Room[];
  ratePlanWithOffersExists: boolean;
  priceColumnHeading: string;
}

export interface Room {
  name: string;
  images: Image[];
  maxOccupancy: MaxOccupancy;
  additionalInfo: AdditionalInfoClass;
  ratePlans: RatePlan[];
  bookingUrl: string;
}

export interface AdditionalInfoClass {
  description: string;
  details: Details;
}

export interface Details {
  amenities: string[];
}

export interface Image {
  caption: string;
  thumbnailUrl: string;
  fullSizeUrl: string;
}

export interface MaxOccupancy {
  children: number;
  total: number;
  messageChildren: string;
  messageTotal: string;
}

export interface RatePlan {
  occupancy: Occupancy;
  cancellation: Cancellation;
  cancellations: Cancellation[];
  features: Feature[];
  welcomeRewards: WelcomeRewards;
  offers: Offers;
  price: Price;
  payment: Payment;
  ratePlanDetails: RatePlanDetails;
}

export interface Cancellation {
  title: string;
  free: boolean;
  info: string;
  refundable: boolean;
  additionalInfo?: string;
  cancellationDate?: string;
  period?: string;
}

export interface Feature {
  featureType: string;
  title: string;
  info: string;
  dataSourceInfo: string;
}

export interface Occupancy {
  maxAdults: number;
  maxChildren: number;
}

export interface Offers {
  valueAdds: any[];
}

export interface Payment {
  book: Book;
  noCCRequired: boolean;
}

export interface Book {
  caption: string;
  bookingParamsMixedRatePlan: BookingParamsMixedRatePlan;
  paymentPreference?: PaymentPreference;
}

export interface BookingParamsMixedRatePlan {
  init: boolean;
  bookingApiVersion: string;
  numberOfRoomType: string;
  orderItems: OrderItem[];
  propertyDetailsDisplayRate: string;
  currency: string;
  minPrice: string;
  marketingChannelCode: string;
  interstitial: string;
  priceConfigurationId: string;
}

export interface OrderItem {
  supplierType: string;
  rateCode: string;
  roomTypeCode: string;
  businessModel: string;
  ratePlanConfiguration: string;
  arrivalDate: string;
  departureDate: string;
  destinationId: string;
  hotelCityId: string;
  hotelId: string;
  sequenceNumber: string;
  tripId: string;
  tspid: number;
}

export interface PaymentPreference {
  options: Options;
  roomTracking: RoomTracking;
}

export interface Options {
  payNow: PayNow;
  payLater: PayLater;
}

export interface PayLater {
  displayedPrice: DisplayedPrice;
  welcomeRewards: string;
  overrideBookingParams: OverrideBookingParams;
  fullyBundledPricePerStay: string;
}

export interface DisplayedPrice {
  displayedPrice: string;
  approximated: boolean;
}

export interface OverrideBookingParams {
  businessModel: string;
  displayedCurrentPrice: string;
}

export interface PayNow {
  displayedPrice: DisplayedPrice;
  payInCurrency: boolean;
  welcomeRewards: string;
  giftCard: string;
  overrideBookingParams: OverrideBookingParams;
  fullyBundledPricePerStay: string;
}

export interface RoomTracking {
  prop49: string;
  prop71: string;
  prop75: string;
}

export interface Price {
  current: string;
  unformattedCurrent: number;
  fullyBundledPricePerStay: string;
}

export interface RatePlanDetails {
  hideInstallments: boolean;
  localCurrencySuppression: boolean;
}

export interface WelcomeRewards {
  info: string;
  collect: boolean;
  redeem: boolean;
}

export interface SmallPrint {
  alternativeNames: string[];
  mandatoryFees: any[];
  optionalExtras: string[];
  policies: string[];
  mandatoryTaxesOrFees: boolean;
  display: boolean;
}

export interface SpecialFeatures {
  sections: Section[];
}

export interface Section {
  heading: string;
  freeText: string;
  listItems: any[];
  subsections: any[];
}

export interface Transportation {
  transportLocations: TransportLocation[];
}

export interface TransportLocation {
  category: string;
  locations: Location[];
}

export interface Location {
  name: string;
  distance: string;
  distanceInTime: string;
}

export type Props = {
  openRoomModal?: boolean;
  room?: Room;
  setOpenRoomModal: Dispatch<SetStateAction<boolean>>;
};

export type LayoutProps = {
  children: JSX.Element;
};
