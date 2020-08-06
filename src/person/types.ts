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

<<<<<<< HEAD
export interface ILemonwayResponse {
=======
export interface ILemonwayResponse { // ????????? une reponse dans un tableau ? 
>>>>>>> 30f19296486571e08023f711e1ef6d0fbdd9e19f
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

<<<<<<< HEAD
export interface IFavoritesResponse { 
=======
export interface IFavoritesResponse { // ????????? pas de propiété sur le JSON
>>>>>>> 30f19296486571e08023f711e1ef6d0fbdd9e19f
  organizationFavorites: string;
}