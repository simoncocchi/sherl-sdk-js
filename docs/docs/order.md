---
id: order
title: Order
---

## Get order list

```ts
const orders = await sherl.order().list(1,10, {orderStatus: "1000"})
```

## Get one order

```ts
const order = await sherl.order().one("c4911423-289c-40f9-9547-18ca8b741f18")
```
