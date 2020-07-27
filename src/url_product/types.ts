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

