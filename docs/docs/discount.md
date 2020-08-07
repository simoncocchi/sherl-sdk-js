---
id: discount
title: Discount
---

## Get discount list

```ts
const discountlist = await sherl.discount().list(1,10 {your_key: "Your_value"})
```

## Get discount public list

```ts
const discountpublicList = await sherl.discount().publicList(1,10, {your_key: "Your_value"})
```

## Get one discount by id

```ts
const discountone = await sherl.discount().one("836ba098-5059-474b-b46e-7b6fff5d5c7f")
```

## Get one discount by params

```ts
const discountoneParams = await sherl.discount().oneParams( {your_key: "Your_value", your_key: "Your_value"})
```