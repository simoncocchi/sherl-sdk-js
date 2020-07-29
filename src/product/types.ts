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


//******************************************************************************** PUBLIC ************************************************************************************ */

export interface IPublicCategoryWithSubResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  slug: string;
  organizationUri: string;
  subCategories?: IPublicSubCategoryResponse[];
}

export interface IPublicSubCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  parentUri: string;
  name: string;
  slug: string;
  organizationUri: string;
}

export interface IPublicCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  slug: string;
  organizationUri: string;
}

export interface IPublicProductResponse {
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
  description:string;
  categoryUri: string;
  categoryUris: [];
  offers: [IOfferResponse];
  metadatas: IMetadataResponse;
  options: [];
  photos: [];
  category: ICategoryInProductResponse;

}

export interface IOfferResponse {
    _id: string;
    price: number;
    taxRate: number;
    priceTaxIncluded: number;
}

export interface IMetadataResponse {
  quotaType: string;
  quotaValue: number;
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