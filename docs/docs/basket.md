---
id: basket
title: Basket
---

## Get basket

Get current basket.

```ts
const getBasket = await sherl.basket().getBasket('customerUri');
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post set discount code

Set discount code to basket.

```ts
const postSetDisount = await sherl.basket().postSetDisount({
  code: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post set sponsorship code

Set sponsorship code to basket.

```ts
const postSetSponsorship = await sherl.basket().postSetSponsorship({
  code: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post Clear basket

Clear to basket.

```ts
const postClearBasket = await sherl.basket().postClearBasket({
  customerUri: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post add product

Add product to basket

```ts
const postAddBasket = await sherl.basket().postAddBasket({
  id: 'string';
  organizationUri: 'string';
  orderId: 'string';
  latitude: number;
  longitude: number;
  productId: 'string';
  orderQuantity: number;
  options: [
    {
      id: 'string';
      items: [
        {
          name: 'string';
          quantity: number;
        },
      ];
    },
  ];
  schedules: [
    {
      id: 'string';
      items: [
        {
          name: 'string';
          quantity: number;
        },
      ];
    },
  ];
  offerId: number;
  metadatas: {};
  customerUri: 'string';
  isFreeTrial: true;
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post set table number

Set table number.

```ts
const postTableNumber = await sherl.basket().postTableNumber({
  tableNumber: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post set comment

Create comment

```ts
const postComment = await sherl.basket().postComment({
  comment: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```

## Post validate and pay order

Validate and pay order.

```ts
const postValidateAndPayBasket = await sherl.basket().postValidateAndPayBasket({
  meansOfPayment: {},
  orderId: 'string',
  customerUri: 'string',
});
```

Return object

<!-- Retour a changer -->

```ts
{
  id: string;
}
```
