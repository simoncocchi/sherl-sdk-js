export interface IOrderResponse {
  orderStatus: number;
  type: string;
  price: number;
  priceTaxIncluded: number;
  priceAdvancePayment: number;
  priceCommission: number;
  priceTaxIncludedWithCommission: number;
  numberOfCredit: number;
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  organization: IOrganizationResponse;
  customer: ICustomerResponse;
  orderNumber: number;
  orderNumberOfDay: number;
  meansOfPayment: string;
  payments: [IPaymentsResponse];
  acceptedOffer: [IAcceptedOfferResponse]
  orderedItems: [IOrderedItemsResponse]
  orderStatusHistory: [IOrderStatusHistoryResponse]
  refunds: [];
}

export interface IOrderStatusHistoryResponse {
  _id: string;
  createdAt: string;
  id: string;
  status: string;
  userUri: string;
  message: string;
}


export interface IOrderedItemsResponse {
  _id: string;
  id: string;
  productId: string;
  product: IProductResponse
  orderQuantity: number;
  price: number;
  taxRate: number;
  priceTaxIncluded: number;
  options: [];
  offerId: number;
  totalPrice: number;
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
  metadatas: IMetadatasSubscriptionResponse;
  options: [];
  photos: [];
  category: ICategoryInProductResponse;
}

export interface ICategoryInProductResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  organizationUri: string;
  isPublic: boolean;
}

export interface IMetadatasSubscriptionResponse {
  package: string;
  title: string;
  content: [];
  isExactPrice: boolean;
  trialPeriod: boolean;
  monthAmount: number;
  yearAmount: number;
  actions: [IActionsResponse];
  profileUri: string;
}

export interface IActionsResponse {
  type: string;
  frequency: string;
  quotaType: string;
  amount: number;
}

export interface IOfferResponse {
    _id: string;
    price: number;
    taxRate: number;
    priceTaxIncluded: number;
    frequency: string;
}

export interface IAcceptedOfferResponse {
  _id: string;
  price: number;
  priceTaxIncluded: number;
  taxRate: number;
}

export interface IPaymentsResponse {
  _id: string;
  id: string;
  AuthorId: string;
  consumerId: string;
  customerUri: string;
  organizationUri: string;
  createdAt: string;
  amount: number;
  CreditedFunds: IFundsResponse;
  DebitedFunds: IFundsResponse;
  Fees: IFundsResponse;
  Id: string;
  CreationDate: number;
  Status: string;
}

export interface IFundsResponse {
  Amount: number;
  Currency: string;
}

export interface ICustomerResponse {
  organizationFavorites: undefined;
  mangopayCards: [];
  _id: string; 
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
  subscriptionLocation: ISubscriptionLocationResponse;
  mobilePhoneNumber: string;
  affiliation: IAffiliationResponse;
  birthDate: string;
  email: string;
}

export interface IAffiliationResponse {
  _id: string;
  id: string;
  uri: string;
  legalName: string;
  location: ILocationResponse;
  serviceType: [];
}

export interface ISubscriptionLocationResponse {
  id: string;
}

export interface IOrganizationResponse {
  type: [];
  _id: string;
  isPaymentAllowed: boolean;
  enabled: boolean;
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  legalName: string;
  location: ILocationResponse;
  employees: [];
  wallet: IWalletResponse;
  founders: IFoundersResponse;
  knowsLanguage: [];
  siret: string;
  openingHoursSpecification: [];
  photos: [];
  serviceType: [];
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