export interface IDiscountResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  ownerUri: string;
  availableFrom: string;
  availableUntil: string;
  visibleToPublic: boolean;
  enabled: boolean;
  discountType: string;
  percentage: number;
  customers: [];
  productRestrictions: [IProductRestrictionsResponse];
  dateRestrictions: [];
  owner: IOwnerResponse;
}

export interface IProductRestrictionsResponse {
  _id: string;
  productUri: string;
  requiredQuantity: number;
  product: IProductResponse;
  dateRestrictions: [];
  owner: IOwnerResponse
}

export interface IProductResponse {
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  categoryUri: string;
  categoryUris: [];
  offers: [IOfferResponse];
  metadatas: IMetadatasResponse;
  options: [IOptionResponse];
  organizationUri: string;
  isCustom: boolean;
  photos: [];
  category: ICategoryResponse;
  categories: [ICategoryResponse];
}

export interface IOfferResponse {
  _id: string;
  price: number;
  taxRate: number;
  priceTaxIncluded: number;
  frequency: string;
}

export interface IOptionResponse {
  id: string;
  items: IItemResponse[];
  name: string;
  required: boolean;
  rangeMin: number;
}


export interface IItemResponse {
  name: string;
  priceTaxIncluded: number;
}

export interface ICategoryResponse {
  id: string;
  uri: string; 
  consumerId: string;
  createdAt: string;
  parentUri: string;
  globalUri: string;
  name: string;
  color: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  parent: ICategoryResponse
  aggCategory: string;
  updatedAt: string;
  subCategories?: ICategoryResponse[];
}

export interface IOwnerResponse {
  isPaymentAllowed: boolean;
  enabled: boolean;
  metadatas: IMetadatasResponse;
  quotas: IQuotasResponse;
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
  myAddresses: [IMyAddressResponse];
  employees: [];
  wallet: IWalletResponse;
  founders: [IFoundersResponse];
  knowsLanguage: [];
  logo: ILogoResponse;
  backgroundImage: IBackgroundImageResponse;
  slogan: number;
  siret: string;
  openingHoursSpecification: [];
  photos: [IPhotoResponse];
  serviceType: [];
  types: [];
  blackListPersons: [];
  isRoaming: boolean;
  thirdParty: IThirdPartyResponse;
  geopoint: string;
  displayed: IDisplayedResponse;
}

export interface IPhotoResponse {
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
  createdAt: string;
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
  weekTime: [];
  metadatas: IMetadatasResponse
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

export interface IMyAddressResponse {
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
  quotas: IQuotasResponse;
  restriction: [];
  phoneNumber: string;
  degreeOfAlcohol: string;
  duration: number;
}

export interface IQuotasResponse {
  type: string;
  amount: number;
}