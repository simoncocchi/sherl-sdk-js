---
id: claim
title: Claim
---

## Get claim list

To retrieve claim list.

```ts
const me = await sherl.claim().list();
```

Return object

```ts
{
  "view": {
    "itemsPerPage": 10,
    "page": 1,
    "total": 0
  },
  "results": 
  [
    {
    id: string;
    uri: string;
    consumerId: string;
    userId: string;
    firstName: string;
    lastName: string;
    address: IPlace;
    myAddresses: IPlace[];
    subscriptionLocation: IGeoCoordinates;
    phoneNumber: string;
    mobilePhoneNumber: string;
    faxNumber: string;
    nationality: string;
    affiliation: IOrganization;
    birthDate: Date;
    email: string;
    gender: string;
    latitude: number;
    longitude: number;
    jobTitle: string;
    enabled: boolean;
    legalNotice: ILegalNotice;
    privacyPolicy: IPrivacyPolicy;
    createdAt: Date;
    updatedAt: Date;
    picture: IImageObject;
    settings: ISettings;
    organizationFavorites: string[];
    mangopayUserId: string;
    mangopayWalletId: string;
    mangopayCards: IMangopayCard[];
    stripe: IStripe;
    lemonway: ILemonway;
    type: IPersonTypeEnum;
    frequentedEstablishments: IFrequentedEstablishments[];
    metadatas: { [key: string]: any };
    statistics: {
        lastVisit: Date;
        firstVisit: Date;
        totalVisit: number;
        amountLastOrder: number;
        amountTotalOrder: number;
        frequentedEstablishments: IFrequentedEstablishments[];
        loyalCustomer: boolean;
    };
    }
  ]
}
```

## Get claim by id

To retrieve claim by id.

```ts
const me = await sherl.claim().one("your_id");
```

Return object

```ts

    {
    id: string;
    uri: string;
    consumerId: string;
    userId: string;
    firstName: string;
    lastName: string;
    address: IPlace;
    myAddresses: IPlace[];
    subscriptionLocation: IGeoCoordinates;
    phoneNumber: string;
    mobilePhoneNumber: string;
    faxNumber: string;
    nationality: string;
    affiliation: IOrganization;
    birthDate: Date;
    email: string;
    gender: string;
    latitude: number;
    longitude: number;
    jobTitle: string;
    enabled: boolean;
    legalNotice: ILegalNotice;
    privacyPolicy: IPrivacyPolicy;
    createdAt: Date;
    updatedAt: Date;
    picture: IImageObject;
    settings: ISettings;
    organizationFavorites: string[];
    mangopayUserId: string;
    mangopayWalletId: string;
    mangopayCards: IMangopayCard[];
    stripe: IStripe;
    lemonway: ILemonway;
    type: IPersonTypeEnum;
    frequentedEstablishments: IFrequentedEstablishments[];
    metadatas: { [key: string]: any };
    statistics: {
        lastVisit: Date;
        firstVisit: Date;
        totalVisit: number;
        amountLastOrder: number;
        amountTotalOrder: number;
        frequentedEstablishments: IFrequentedEstablishments[];
        loyalCustomer: boolean;
    };
    }

```
