---
id: discount
title: Discount
---

## Get discount list

To retrieve a list of all public discount, witch you can filter with parameters

```ts
const discountlist = await sherl.discount().list(1,10 {your_key: "Your_value"})
```

Return object

```ts
{
  "results": [
      {
        id: string;
        uri: string;
        name: string;
        ownerUri: string;
        owner: IOrganizationResponse;
        consumerId: string;
        availableFrom: Date;
        availableUntil: Date;
        public: boolean;
        visibleToPublic: boolean;
        enabled: boolean;
        highlight: boolean;
        cumulative: boolean;
        discountType: DiscountTypeEnum;
        code: string;
        percentage: number;
        amount: number;
        quantity: number;
        quantityPerUser: number;
        customers: string[];
        productRestrictions: IProductRestriction[];
        dateRestrictions: IDateRestriction[];
        createdAt: Date;
        updatedAt: Date;
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get discount public list

To retrieve a list of all public discount, witch you can filter with parameters

```ts
const discountpublicList = await sherl
  .discount()
  .publicList(1, 10, { your_key: 'Your_value' });
```

Return object

```ts
{
  "results": [
      {
        id: string;
        uri: string;
        name: string;
        ownerUri: string;
        owner: IOrganizationResponse;
        consumerId: string;
        availableFrom: Date;
        availableUntil: Date;
        public: boolean;
        visibleToPublic: boolean;
        enabled: boolean;
        highlight: boolean;
        cumulative: boolean;
        discountType: DiscountTypeEnum;
        code: string;
        percentage: number;
        amount: number;
        quantity: number;
        quantityPerUser: number;
        customers: string[];
        productRestrictions: IProductRestriction[];
        dateRestrictions: IDateRestriction[];
        createdAt: Date;
        updatedAt: Date;
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get one discount by id

To retrieve a discount with is ID

```ts
const discountone = await sherl
  .discount()
  .one('836ba098-5059-474b-b46e-7b6fff5d5c7f');
```

Return object

```ts
{
    id: string;
    uri: string;
    name: string;
    ownerUri: string;
    owner: IOrganizationResponse;
    consumerId: string;
    availableFrom: Date;
    availableUntil: Date;
    public: boolean;
    visibleToPublic: boolean;
    enabled: boolean;
    highlight: boolean;
    cumulative: boolean;
    discountType: DiscountTypeEnum;
    code: string;
    percentage: number;
    amount: number;
    quantity: number;
    quantityPerUser: number;
    customers: string[];
    productRestrictions: IProductRestriction[];
    dateRestrictions: IDateRestriction[];
    createdAt: Date;
    updatedAt: Date;
}
```

## Get one discount by params

To retrieve a discount with parameters

```ts
const discountoneParams = await sherl
  .discount()
  .oneParams({ your_key: 'Your_value', your_key: 'Your_value' });
```

Return object

```ts
{
    id: string;
    uri: string;
    name: string;
    ownerUri: string;
    owner: IOrganizationResponse;
    consumerId: string;
    availableFrom: Date;
    availableUntil: Date;
    public: boolean;
    visibleToPublic: boolean;
    enabled: boolean;
    highlight: boolean;
    cumulative: boolean;
    discountType: DiscountTypeEnum;
    code: string;
    percentage: number;
    amount: number;
    quantity: number;
    quantityPerUser: number;
    customers: string[];
    productRestrictions: IProductRestriction[];
    dateRestrictions: IDateRestriction[];
    createdAt: Date;
    updatedAt: Date;
}
```

## Post Discount

Create a discount

```ts
const postDiscount = await sherl.discount().postDiscount({
  id: 'string';
  name: 'string';
  availableFrom: 'Date';
  availableUntil: 'Date';
  enabled: boolean;
  highlight: boolean;
  cumulative: boolean;
  discountType: 'percent';
  code: 'string';
  percentage: number;
  amount: number;
  quantity: number;
  quantityPerUser: number;
  customers: ['string'];
  visibleToPublic: boolean;
  productRestrictions: [
    {
      requiredQuantity: number;
      productUri: 'string';
      categoryUri: 'string';
    },
  ];
  dateRestrictions: [
    {
      date: 'Date';
      dayOfWeek: 'string';
      fromHour: 'Date';
      toHour: 'Date';
    },
  ];
})
```

Return object

```ts
{
    id: string;
    uri: string;
    name: string;
    ownerUri: string;
    owner: IOrganizationResponse;
    consumerId: string;
    availableFrom: Date;
    availableUntil: Date;
    public: boolean;
    visibleToPublic: boolean;
    enabled: boolean;
    highlight: boolean;
    cumulative: boolean;
    discountType: DiscountTypeEnum;
    code: string;
    percentage: number;
    amount: number;
    quantity: number;
    quantityPerUser: number;
    customers: string[];
    productRestrictions: IProductRestriction[];
    dateRestrictions: IDateRestriction[];
    createdAt: Date;
    updatedAt: Date;
}
```
