---
id: order
title: Order
---

## Get order list

```ts
const orders = await sherl.order().list(1, 10, { orderStatus: '1000' });
```

Return object

```ts
{
  "results": [
      {
        id: string;
        uri: string;
        consumerId: string;
        organization: IOrganizationResponse;
        customer: IPersonMeResponse;
        orderNumber: number;
        orderNumberOfDay: number;
        orderStatus: OrderStatusEnum;
        type: ShopProductTypeEnum;
        meansOfPayment: ShopMeansOfPaymentEnum;
        payments: IPayment[];
        acceptedOffer: IOffer[];
        price: number;
        priceTaxIncluded: number;
        priceAdvancePayment: number;
        priceCommission: number;
        priceTaxIncludedWithCommission: number;
        priceToPay: number;
        numberOfCredit: number;
        billingAddress: IAddress;
        orderedItems: IOrderItem[];
        orderStatusHistory: IOrderStatusHistory[];
        commission: IOrderCommission;
        refunds: IShopOrderRefund[];
        metadatas: any;
        sponsorshipCode: string;
        discountCode: string;
        discountToUsefull: IDiscount[];
        subscriptionBeginDate: Date;
        isFreeTrial: boolean;
        createdAt: Date;
        updatedAt: Date;
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get one order

```ts
const order = await sherl.order().one('c4911423-289c-40f9-9547-18ca8b741f18');
```

Return object

```ts
{
    id: string;
    uri: string;
    consumerId: string;
    organization: IOrganizationResponse;
    customer: IPersonMeResponse;
    orderNumber: number;
    orderNumberOfDay: number;
    orderStatus: OrderStatusEnum;
    type: ShopProductTypeEnum;
    meansOfPayment: ShopMeansOfPaymentEnum;
    payments: IPayment[];
    acceptedOffer: IOffer[];
    price: number;
    priceTaxIncluded: number;
    priceAdvancePayment: number;
    priceCommission: number;
    priceTaxIncludedWithCommission: number;
    priceToPay: number;
    numberOfCredit: number;
    billingAddress: IAddress;
    orderedItems: IOrderItem[];
    orderStatusHistory: IOrderStatusHistory[];
    commission: IOrderCommission;
    refunds: IShopOrderRefund[];
    metadatas: any;
    sponsorshipCode: string;
    discountCode: string;
    discountToUsefull: IDiscount[];
    subscriptionBeginDate: Date;
    isFreeTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
}
```

## Get automation primary

```ts
const order = await sherl.order().automationPrimary('id');
```

Return object

```ts
{
    id: string;
    uri: string;
    consumerId: string;
    organization: IOrganizationResponse;
    customer: IPersonMeResponse;
    orderNumber: number;
    orderNumberOfDay: number;
    orderStatus: OrderStatusEnum;
    type: ShopProductTypeEnum;
    meansOfPayment: ShopMeansOfPaymentEnum;
    payments: IPayment[];
    acceptedOffer: IOffer[];
    price: number;
    priceTaxIncluded: number;
    priceAdvancePayment: number;
    priceCommission: number;
    priceTaxIncludedWithCommission: number;
    priceToPay: number;
    numberOfCredit: number;
    billingAddress: IAddress;
    orderedItems: IOrderItem[];
    orderStatusHistory: IOrderStatusHistory[];
    commission: IOrderCommission;
    refunds: IShopOrderRefund[];
    metadatas: any;
    sponsorshipCode: string;
    discountCode: string;
    discountToUsefull: IDiscount[];
    subscriptionBeginDate: Date;
    isFreeTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
}
```

## Get automation secondary

```ts
const order = await sherl.order().automationSecondary('id');
```

Return object

```ts
{
    id: string;
    uri: string;
    consumerId: string;
    organization: IOrganizationResponse;
    customer: IPersonMeResponse;
    orderNumber: number;
    orderNumberOfDay: number;
    orderStatus: OrderStatusEnum;
    type: ShopProductTypeEnum;
    meansOfPayment: ShopMeansOfPaymentEnum;
    payments: IPayment[];
    acceptedOffer: IOffer[];
    price: number;
    priceTaxIncluded: number;
    priceAdvancePayment: number;
    priceCommission: number;
    priceTaxIncludedWithCommission: number;
    priceToPay: number;
    numberOfCredit: number;
    billingAddress: IAddress;
    orderedItems: IOrderItem[];
    orderStatusHistory: IOrderStatusHistory[];
    commission: IOrderCommission;
    refunds: IShopOrderRefund[];
    metadatas: any;
    sponsorshipCode: string;
    discountCode: string;
    discountToUsefull: IDiscount[];
    subscriptionBeginDate: Date;
    isFreeTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
}
```
