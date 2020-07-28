export interface IUrlCategoryWithSubResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  slug: string;
  organizationUri: string;
  subCategories?: IUrlSubCategoryResponse[];
}

export interface IUrlSubCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  parentUri: string;
  name: string;
  slug: string;
  organizationUri: string;
}

export interface IUrlCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  createdAt: string;
  name: string;
  slug: string;
  organizationUri: string;
}

export interface IUrlProductResponse {
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
  category: ICategoryinproductResponse;

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

export interface ICategoryinproductResponse {
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