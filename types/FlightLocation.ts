export interface FlightLocation {
  headers: FlightLocationHeaders;
  statusCode: number;
  request: Request;
  body: string;
  result: Result;
  data: Datum[];
  parsed: boolean;
}

export interface Datum {
  type: string;
  subType: string;
  name: string;
  detailedName: string;
  id: string;
  self: Self;
  timeZoneOffset: string;
  iataCode: string;
  geoCode: GeoCode;
  address: Address;
  analytics: Analytics;
}

export interface Address {
  cityName: string;
  cityCode: string;
  countryName: string;
  countryCode: string;
  stateCode: string;
  regionCode: string;
}

export interface Analytics {
  travelers: Travelers;
}

export interface Travelers {
  score: number;
}

export interface GeoCode {
  latitude: number;
  longitude: number;
}

export interface Self {
  href: string;
  methods: string[];
}

export interface FlightLocationHeaders {
  "content-type": string;
}

export interface Request {
  host: string;
  port: number;
  ssl: boolean;
  scheme: string;
  verb: string;
  path: string;
  params: Params;
  queryPath: string;
  bearerToken: string;
  clientVersion: string;
  languageVersion: string;
  appId: null;
  appVersion: null;
  headers: RequestHeaders;
  ListHTTPOverride: string[];
}

export interface RequestHeaders {
  "User-Agent": string;
  Accept: string;
  Authorization: string;
  "Content-Type": string;
}

export interface Params {
  keyword: string;
  subType: string;
}

export interface Result {
  meta: Meta;
  data: Datum[];
}

export interface Meta {
  count: number;
  links: Links;
}

export interface Links {
  self: string;
}
