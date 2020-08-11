import { IGeoCoordinatesResponse, IPlaceResponse } from '../common/types';

export interface IPersonMeResponse {
  id: string;
  uri: string;
  consumerId: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IPlaceResponse;
  myAddresses: IPlaceResponse[];
  subscriptionLocation: IGeoCoordinatesResponse;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganizationResponse;
  birthDate: Date;
  email: string;
  gender: string;
  latitude: number;
  longitude: number;
  jobTitle: string;
  enabled: boolean;
  legalNotice: ILegalNoticeResponse;
  privacyPolicy: IPrivacyPolicyResponse;
  createdAt: Date;
  updatedAt: Date;
  picture: IImageObjectResponse;
  settings: ISettingsResponse;
  organizationFavorites: string[];
  mangopayUserId: string;
  mangopayWalletId: string;
  mangopayCards: IMangopayCardResponse[];
  stripe: IStripeResponse;
  lemonway: ILemonwayResponse;
  type: IPersonTypeEnumResponse;
  frequentedEstablishments: IFrequentedEstablishmentsResponse[];
  metadatas: { [key: string]: any };
  statistics: {
    lastVisit: Date;
    firstVisit: Date;
    totalVisit: number;
    amountLastOrder: number;
    amountTotalOrder: number;
    frequentedEstablishments: IFrequentedEstablishmentsResponse[];
    loyalCustomer: boolean;
  };
}

export interface IImageObjectResponse {
  id?: string;
  consumerId?: string;
  domain?: string;
  uri?: string;
  width?: number;
  height?: number;
  caption: IMediaObjectResponse;
  thumbnail?: IImageObjectResponse;
  createdAt?: Date;
}

export interface IMediaObjectResponse {
  contentUrl: string;
  description?: string;
  duration?: string;
  encodingFormat: string;
  size?: number;
  name: string;
  id: string;
}

export interface IPersonTypeEnumResponse {
  frequentedEstablishment: {
    organizationId: string;
    isCustomer: boolean;
  };
}

export interface IMangopayCardResponse {
  ExpirationDate: string;
  Alias: string;
  CardType: string;
  CardProvider: string;
  Country: string;
  Product: string;
  BankCode: string;
  Active: boolean;
  Currency: string;
  Validity: string;
  Id: string;
  Tag: string | null;
  CreationDate: number;
  Fingerprint: string;
  default: boolean;
}

export interface ILemonwayResponse {
  customerId: string;
  cards: ILemonwayCardResponse[];
}

export interface IStripeResponse {
  customerId: string;
  cards: IStripeCardResponse[];
}

export interface ILemonwayCardResponse {
  id: number;
  transactionId: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  type: string;
  default: boolean;
  webKitToken: string;
}

export interface IStripeCardResponse {
  id: string;
  object: string;
  address_city: string;
  address_country: string;
  address_line1: string;
  address_line1_check: string;
  address_line2: string;
  address_state: string;
  address_zip: string;
  address_zip_check: string;
  brand: string;
  country: string;
  customer: string;
  cvc_check: string;
  dynamic_last4: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  metadata: object;
  name: string;
  tokenization_method: string;
  default: boolean;
}

export interface IFrequentedEstablishmentsResponse {
  organizationId: string;
  organizationName: string;
  firstVisit: Date;
  lastVisit: Date;
  isCustomer: boolean;
}

export interface IPrivacyPolicyResponse {
  version: string;
  dateOfAcceptance: Date;
}

export interface ISettingsResponse {
  notifications: {
    emailEnable: boolean;
    smsEnable: boolean;
    pushEnable: boolean;
  };
}

interface ILegalNoticeResponse {
  version: string;
  dateOfAcceptance: Date;
}

interface IOrganizationResponse {
  location: ILocationResponse;
  types: string[];
  id: string;
  employees: any[];
  founders: any[];
  knowsLanguage: any[];
  openingHoursSpecification: IOpeningHoursSpecificationResponse[];
  photos: any[];
  serviceType: IServiceTypeResonse[];
  isPaymentAllowed: boolean;
  enabled: boolean;
  uri: string;
  consumerId: string;
  legalName: string;
}

export interface IServiceTypeResonse {
  parent: null;
  childrens: any[];
  id: string;
  values: IValueResponse[];
  uri: string;
  code: string;
  createdAt: string;
}

export interface IValueResponse {
  language: string;
  value: string;
  createdAt: string;
}

export interface ILocationResponse {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: string;
  longitude: string;
}

export interface IOpeningHoursSpecificationResponse {
  id: string;
  dayOfWeek: string;
  closes: Date;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}

export interface ILemonwayCardResponse {
  id: number;
  transactionId: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  type: string;
  default: boolean;
  webKitToken: string;
}
