---
id: product
title: Product
---

## Get product list

To retrieve product list.

```ts
const products = await sherl.product().list(1, 10);
```

Return object

```ts
{
  "results": [
    {
      isEnable: boolean;
      id: string;
      uri: string;
      consumerId: string;
      name: string;
      slogan: string;
      description: string;
      categoryUri: string;
      offers: IOffer[];
      metadatas: IMetadatas;
      options: IOption[];
      organizationUri: string;
      createdAt: string;
      updatedAt: string;
      category: null;
    }
  ],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
}
```

## Get one product

To retrieve one product by id.

```ts
const product = await sherl.product().one(productId);
```

Return object

```ts
{
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  slogan: string;
  description: string;
  categoryUri: string;
  offers: IOffer[];
  metadatas: IMetadatas;
  options: IOption[];
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  category: null;
}
```

## Get Categories of an organization

To retrieve Categories of an organization with organization Id

```ts
const categoriesbyid = await sherl
  .product()
  .categoriesById('402a8a37-a716-4e78-b361-4b2c67d03a37');
```

Return object

```ts
{
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories: ICategoryResponse[];
}
```

## Get SubCategories of a Categorie

To retrieve SubCategories of a Categorie with parent categorie ID

```ts
const categories = await sherl.product().categories('organizationID');
```

Return object

```ts
{
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories: ICategoryResponse[];
}
```

## Get public product

To retrieve public product list

```ts
const urlproducts = await sherl.product().publicproductlist(1, 10);
// you can add parameter
const urlproducts = await sherl
  .product()
  .publicproductlist(1, 10, { key: 'parameter' });
```

Return object

```ts
{
  "results": [
    {
      id: string;
      uri: string;
      consumerId: string;
      type: ShopProductTypeEnum;
      parentUri: string;
      parent: IPublicProductResponse;
      name: string;
      slug: string;
      slogan: string;
      description: string;
      categoryUri: string;
      categoryUris: string[];
      category: IPublicCategoryResponse;
      categories: IPublicCategoryResponse[];
      isEnable: boolean;
      offers: IOffer[];
      metadatas: any;
      options: IOption[];
      organizationUri: string;
      isCustom: boolean;
      photos: IImageObject[];
      restrictions: { [key: string]: string[] };
      createdAt: Date;
      updatedAt: Date;
    }
  ],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
}
```

## Get public product by id

To retrieve one public product by id.

```ts
const urlFindOne = await sherl.product().PublicProductById('your_id');
```

Return object

```ts
{
  id: string;
  uri: string;
  consumerId: string;
  type: ShopProductTypeEnum;
  parentUri: string;
  parent: IPublicProductResponse;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  categoryUri: string;
  categoryUris: string[];
  category: IPublicCategoryResponse;
  categories: IPublicCategoryResponse[];
  isEnable: boolean;
  offers: IOffer[];
  metadatas: any;
  options: IOption[];
  organizationUri: string;
  isCustom: boolean;
  photos: IImageObject[];
  restrictions: { [key: string]: string[] };
  createdAt: Date;
  updatedAt: Date;
}
```

## Get public product by slug

To retrieve one public product by slug.

```ts
const urlFindBySlug = await sherl.product().PublicProductBySlug('your_slug');
```

Return object

```ts
{
  id: string;
  uri: string;
  consumerId: string;
  type: ShopProductTypeEnum;
  parentUri: string;
  parent: IPublicProductResponse;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  categoryUri: string;
  categoryUris: string[];
  category: IPublicCategoryResponse;
  categories: IPublicCategoryResponse[];
  isEnable: boolean;
  offers: IOffer[];
  metadatas: any;
  options: IOption[];
  organizationUri: string;
  isCustom: boolean;
  photos: IImageObject[];
  restrictions: { [key: string]: string[] };
  createdAt: Date;
  updatedAt: Date;
}
```

## Get public categories

To retrieve public categories list

```ts
const publicCategories = await sherl.product().PublicCategories();
```

Return object

```ts
[{
  id: string;
  uri: string;
  consumerId: string;
  parentUri: string;
  globalUri: string;
  parent: IPublicCategoryResponse;
  color: string;
  name: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  subCategories: IPublicCategoryResponse[];
  createdAt: Date;
  updatedAt: Date;
  aggCategory: string;
  is: false;
}]
```

## Get public categories by slug

To retrieve one public categories by slug.

```ts
const publicCategoriesBySlug = await sherl
  .product()
  .PublicCategoriesSlug('your_slug');
```

Return object

```ts
{
  id: string;
  uri: string;
  consumerId: string;
  parentUri: string;
  globalUri: string;
  parent: IPublicCategoryResponse;
  color: string;
  name: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  subCategories: IPublicCategoryResponse[];
  createdAt: Date;
  updatedAt: Date;
  aggCategory: string;
  is: false;
}
```

## Get public categories and subcategories

To retrieve public categories with subcategories list

```ts
const publicCategoriesAndSub = await sherl.product().PublicCategoriesAndSub();
```

Return object

```ts
[{
  id: string;
  uri: string;
  consumerId: string;
  parentUri: string;
  globalUri: string;
  parent: IPublicCategoryResponse;
  color: string;
  name: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  subCategories: IPublicCategoryResponse[];
  createdAt: Date;
  updatedAt: Date;
  aggCategory: string;
  is: false;
}]
```

## Get product comment

To retrieve comment on a product with id

```ts
const productcomment = await sherl.product().commentList("product_id",page ,items_per_page, {your_key: "your_value"})
```

Return object

```ts
{
  "results": [
    {
      mon objet
    }
  ],
  "view": {
    "total": 0,
    "page": "1",
    "itemsPerPage": "2"
  }
}
```

## Get like product

To retrieve comment you like
```ts
const productcomment = await sherl.product().commentList("product_id",page ,items_per_page, {your_key: "your_value"})
```

Return object

```ts
{
  "results": [
    {
      mon objet
    }
  ],
  "view": {
    "total": 0,
    "page": "1",
    "itemsPerPage": "2"
  }
}
```
