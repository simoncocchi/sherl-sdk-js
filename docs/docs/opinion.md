---
id: opinion
title: Opinion
---

## Get opinion with params

To retrieve opinion with params.

```ts
const me = await sherl.opinion().findBy({ your_key: 'your_values' });
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

## Get average opinion

To retrieve average opinion with params.

```ts
const me = await sherl.opinion().average({ your_key: 'your_values' });
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

## Get opinion

To retrieve average opinion i give.

```ts
const me = await sherl.opinion().average({ your_key: 'your_values' });
```

Return object

```ts
{
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
  ],
  "view": {
    "total": 0,
    "page": 1,
    "itemsPerPage": 10
  }
}
```
