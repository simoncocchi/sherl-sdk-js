export interface ICmsResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  slug: string;
  resume: string;
  organizationUri: string;
  type: string;
  authorUri: string;
  beginDate: string;
  endDate: string;
  status: string;
  media: IMediaResponse;
  author: IAuthorResponse;
}

export interface IAuthorResponse {
  organizationFavorites: string;
  mangopayUserId: string;
  mangopayWalletId: string;
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IAddressResponse;
  myAddresses: [IAddressResponse];
  subscriptionLocation: ISubscriptionLocationResponse;
  phoneNumber: string;
  affiliation: IAffiliationResponse;
  birthDate: string;
  email: string;
  legalNotice: ILegalNoticeResponse;
  mangopayCards: [];
  lemonway: ILemonwayResponse;
  type: string;
  frequentedEstablishments: IFrequentedResponse;
}

export interface IFrequentedResponse {
  organizationId: string;
  organizationName: string;
  isCustomer: boolean;
  firstVisit: string;
}

export interface ILemonwayResponse { 
  cards: [ICardsResponse]
}

export interface ICardsResponse {
  id: number;
  transactionId: string;
  webKitToken: string;
  default: boolean;
  authorizationNumber: string;
  country: string;
  is3DS: boolean;
  maskedNumber: string;
  type: string;
  
}

export interface ILegalNoticeResponse {
  version : string;
  dateOfAcceptance: string;
}

export interface IAffiliationResponse {
  isPaymentAllowed: boolean;
  enabled: boolean;
  metadatas : IMetadatasResponse
  quotas: IQuotasResponse
  configs: [];
  id: string;
  uri: string;
  sponsorshipCode: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  isPublic: boolean;
  legalName: string;
  location: ILocationResponse;
  myAddresses: [IAddressResponse];
  employees: [];
  wallet: IWalletResponse;
  founders: [IFoundersResponse];
  knowsLanguage: []
  logo: ILogoResponse;
  backgroundImage: IBackgroundImageResponse;
  slogan: string;
  siret: number;
  openingHoursSpecification: [IOpeningResponse];
  photos: [IPhotosResponse];
  serviceType: [];
  types: [];
  blackListPersons: [];
  isRoaming: boolean;
  thirdParty: IThirdPartyResponse;
  geopoint: string;
  displayed: IDisplayedResponse;
  // statistics: IStatisticsResponse;
}

export interface IDisplayedResponse {
  backgroundImg: string;
  highlightImg: string;
  logoImg: string;
  actualityContent: undefined; ///////??????????????
  actualityTitle: undefined;  ///////??????????????
  city: string;
  id: string;
  isBarService: boolean;
  isOpen: boolean;
  latitude: number;
  longitude: number;
  name: string;
  position: string;
  type: string;
  weekTime: [IWeekTimeResponse];
  metadatas: IMetadatasResponse
}

export interface IWeekTimeResponse {
  day: string;
  closed: boolean;
  morningTime: string;
  nightTime: string;
}

export interface IThirdPartyResponse {
  facebook: IFacebookResponse;
}

export interface IFacebookResponse {
  accessToken: string;
  userID: string;
  longLivedUserAccessToken: string;
  expirationDate: string;
}

export interface IPhotosResponse {
  thumbnail: IThumbnailResponse;
  _id: string;
  id: string;
  uri: string;
  width: number;
  height: number; 
  caption: ICaptionResponse;
  domain: string;
  consumerId: string;
  createdAt: string;
}

export interface IOpeningResponse {
  _id: string;
  id: string;
  dayOfWeek: string;
  closes: string;
  opens: string;
}

export interface IBackgroundImageResponse {
  thumbnail: IThumbnailResponse;
  _id: string;
  id: string;
  uri: string;
  width: number;
  height: number; 
  caption: ICaptionResponse;
  domain: string;
  consumerId: string;
  createdAt: string;
}

export interface ILogoResponse {
  thumbnail: IThumbnailResponse;
  _id: string;
  id: string;
  uri: string;
  width: number;
  height: number; 
  caption: ICaptionResponse;
  domain: string;
  consumerId: string;
}

export interface IFoundersResponse {
  _id: string;
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
}

export interface IWalletResponse {
  userId: string;
  walletId: string;
}

export interface ILocationResponse {
  types: [];
  _id: string;
  id: string;
  uri: string;
  createdAt: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  originId: string;
  latitude: number;
  longitude: number;
}

export interface IMetadatasResponse {
  isItinerant: boolean;
  quotas: [IQuotasResponse];
  restriction: [];
  phoneNumber: string;
}

export interface IQuotasResponse {
  type: string;
  amount: number;
}

export interface ISubscriptionLocationResponse {
  id: string;
}

export interface IAddressResponse {
  types: [];
  _id: string;
  id: string;
  uri: string;
  createdAt: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  originId: string;
  latitude: string;
  longitude: string;
}


export interface IMediaResponse {
  thumbnail: IThumbnailResponse;
  _id: string;
  id: string;
  uri: string;
  width: number;
  height: number;
  caption: ICaptionResponse;
  domain: string;
  consumerId: string;
  createdAt: string;
}

export interface IThumbnailResponse {
  caption: ICaptionResponse;
  width: number;
  height: number;
}

export interface ICaptionResponse {
  id: string;
  size: number;
  contentUrl: string;
  description: string;
  name: string;
  encodingFormat: string;
}
