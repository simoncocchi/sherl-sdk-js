---
id: iam
title: IAM
---

## Get IAM profiles

To retrieve iam profiles.

```ts
const iamprofilelist = await sherl.iam().profileList();
```

Return object

```ts
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
```

## Get IAM profile by id

To retrieve on iam profile by id.

```ts
const iamprofile = await sherl.iam().profileOne("profile_ID);
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

## Get IAM role

To retrieve on iam role by id.

```ts
const iamrole = await sherl.iam().roleOne("role_ID);
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
