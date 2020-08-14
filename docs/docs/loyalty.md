---
id: loyalty
title: Loyalty
---

## Get loyalty list

To retrieve loyalty list.

```ts
const me = await sherl.loyalty().list(1, 10);
```

Return object

```ts
{
  "results": [
    {
    id: string;
    uri: string;
    ownerUri: string;
    owner: IOrganizationResponse;
    discountType: DiscountTypeEnum;
    percentage: number;
    amount: number;
    amountUsed?: number;
    rewards: ILoyaltyCardReward[];
    enabled: boolean;
    consumerId: string;
    createdAt: Date;
    updatedAt: Date;
    }
  ],
  "view": {
    "total": 0,
    "itemsPerPage": 10,
    "page": 1
  }
}
```

## Get loyalty 

To retrieve one loyalty by organization id

```ts
const me = await sherl.loyalty().one("OrganizationID");
```

Return object

```ts
{
   id: string;
  uri: string;
  ownerUri: string;
  owner: IOrganizationResponse;
  discountType: DiscountTypeEnum;
  percentage: number;
  amount: number;
  amountUsed?: number;
  rewards: ILoyaltyCardReward[];
  enabled: boolean;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
}
```
