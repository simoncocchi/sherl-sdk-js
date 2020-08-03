export interface IMeResponse {
  organizationFavorites: IFavoritesResponse[];
  mangopayUserId: string;
  mangopayWalletId: string;
  id: string;
  uri: string;
  consumerId: string;
  updatedAt: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IAddressResponse[];
  subscriptionLocation: ISubscriptionLocationResponse[];
  email: string;
  enabled: boolean;
  legalNotice: ILegalNoticeResponse[];
  settings:  ISettingsResponse[];
  lemonway: ILemonwayResponse[];
  type: string;
}

export interface ILemonwayResponse {
  cards: [ICardsResponse[]]
}
export interface ICardsResponse {
  id: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  expiration: string;
  type: string;
  default: boolean;
}

export interface ISettingsResponse {
  notification: INotificationResponse[];
}

export interface INotificationResponse {
  smsmsEnables: boolean;
  emailEnable: boolean;
  pushEnable: boolean;
}

export interface ILegalNoticeResponse {
  version : string;
  dateOfAcceptance: string;
}

export interface ISubscriptionLocationResponse {
  id: string;
}

export interface IAddressResponse {
  types: [];
  _id: string;
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
}

export interface IFavoritesResponse { 
  organizationFavorites: string;
}

export interface IPosiionResponse {
  latitude: string;
  longitude: string;
  id: string;
  country: string;
  locality: string;
  postalCode: string;
  streetAddress: string;
}