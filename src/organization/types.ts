export interface IOrganizationResponse {
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
  myAddresses: IMyAddressResponse;
  employees: [];
  wallet: IWalletResponse;
  founders: IFoundersResponse;
  knowsLanguage: []
  logo: ILogoResponse;
  backgroundImage: IThumbnailResponse;
  slogan: string;
  siret: number;
  openingHoursSpecification: [];
  photos: [];
  serviceType: [];
  types: []; //////////????????????????????? test
  blackListPersons: [];
  isRoaming: boolean;
  thirdParty: IThirdPartyResponse;
  geopoint: string;
  displayed: IDisplayedResponse;
  statistics: IStatisticsResponse;
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

export interface ICaptionResponse {
  id: string;
  size: number;
  contentUrl: string;
  description: string;
  name: string;
  encodingFormat: string;
}

export interface IThumbnailResponse {
  caption: ICaptionResponse;
  width: number;
  height: number;
}

export interface IStatisticsResponse {
  firstVisit: string;
  totalOrder: number;
  amountTotalOrder: number;
  subscription: ISubscriptionResponse
  opinion: undefined; ///////////// ????????????????????
  opinionCount: number;
}

export interface ISubscriptionResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  ownerUri: string;
  activeFrom: string;
  activeUntil: string;
  enabled: boolean;
  frequency: string;
  sourceUri: string;
  contextUri: string;
  metadatas: IMetadatasSubscriptionResponse
  offer: IOfferResponse
}

export interface IOfferResponse {
  price: number;
  taxRate: number;
  priceTaxIncluded: number;
  frequency: string;
}

export interface IMetadatasSubscriptionResponse {
  package: string;
  title: string;
  content: []; ///////////// ??????????????????????????
  isExactPrice: boolean;
  trialPeriod: boolean;
  id: string;
  monthAmount: number;
  yearAmount: number;
  actions: IActionsResponse[]
  profileUri: string;
}

export interface IActionsResponse {
  type: string;
  frequency: string;
  quotaType: string;
  amount: number;
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

export interface IMetadatasResponse {
  quotas: IQuotasResponse[];
  restriction: [];
  phoneNumber: string;
  socials: ISocialResponse
}

export interface ISocialResponse {
  linkedin: string;
  instagram: string;
  facebook: string;
  snapchat: string;
}

export interface IQuotasResponse {
  type: string;
  amount: number;
  'notification:sms': INotificationSMSResponse
  "notification:email": INotificationSMSResponse
  "shop:product:service": undefined /// ???? ??????????????????????
}

export interface INotificationSMSResponse {
  id: string;
  ownerUri: string;
  type: string;
  amount: number;
  consumerId: string;
  createdAt: string;
  uri: string;
  sources: ISourcesResponse[];
  updatedAt: string;
}

export interface ISourcesResponse {
  amount: number;
  createdFrom: string;
  id: string;
  lastApply: string;
  nextApply: string;
  remaining: number;
  uri: string;
  createdAt: string;
}

// /////trash
// export interface ICategoryResponse {
//   id: string;
//   uri: string;
//   taxeValue: number;
//   consumerId: string;
//   parentUri: string;
//   name: string;
//   organizationUri: string;
//   createdAt: string;
//   updatedAt: string;
//   subCategories?: ICategoryResponse[];
// }

// export interface IProductResponse {
//   isEnable: boolean;
//   id: string;
//   uri: string;
//   consumerId: string;
//   name: string;
//   slogan: string;
//   description: string;
//   categoryUri: string;
//   offers: IOfferResponse[];
//   metadatas: IMetadatasResponse;
//   options: IOptionResponse[];
//   organizationUri: string;
//   createdAt: string;
//   updatedAt: string;
//   category: null;
// }

// export interface IMetadatasResponse {

// }

// export interface IOptionResponse {
//   id: string;
//   items: IItemResponse[];
//   name: string;
//   required: boolean;
//   rangeMin: number;
// }

// export interface IItemResponse {
//   name: string;
//   priceTaxIncluded: number;
// }


// //******************************************************************************** PUBLIC ************************************************************************************ */

// export interface IPublicCategoryWithSubResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
//   subCategories?: IPublicSubCategoryResponse[];
// }

// export interface IPublicSubCategoryResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   parentUri: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
// }

// export interface IPublicCategoryResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
// }

// export interface IPublicProductResponse {
//   isEnable: boolean;
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   updatedAt: string;
//   type: string;
//   name: string;
//   slug: string;
//   slogan: string;
//   description:string;
//   categoryUri: string;
//   categoryUris: [];
//   offers: [IOfferResponse];
//   metadatas: IMetadataResponse;
//   options: [];
//   photos: [];
//   category: ICategoryInProductResponse;

// }

// export interface IOfferResponse {
//     _id: string;
//     price: number;
//     taxRate: number;
//     priceTaxIncluded: number;
// }

// export interface IMetadataResponse {
//   quotaType: string;
//   quotaValue: number;
// }

// export interface ICategoryInProductResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   updatedAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
//   isPublic: boolean;
// }