import { IOrganizationResponse } from "../organization/types";

export interface ICAResponse {

}

export interface INotificationsResponse {
  
}

export interface IAudienceResponse {
  
}

export interface IOneResponse {
  id: string;
  consumerId: string;
  action: string;
  // user: User; 
  value: number;
  organization: IOrganizationResponse
  year: number;
  month: number;
  day: number;
  objectUri: string;
  createdAt: string;
}

export interface IAnalyticsProductResponse {
  key: string;
  value: number;
  number: number;
  metadata: { [key: string]: any };
}



/// old
export interface ICategoryResponse {
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories?: ICategoryResponse[];
}

export interface IProductResponse {
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  slogan: string;
  description: string;
  categoryUri: string;
  offers: IOfferResponse[];
  metadatas: IMetadatasResponse;
  options: IOptionResponse[];
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  category: null;
}

export interface IMetadatasResponse {
  degreeOfAlcohol: string;
}

export interface IOfferResponse {
  price: number;
  taxRate: number;
  priceTaxIncluded: number;
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
