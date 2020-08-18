---
id: notification
title: Notification
---

## Get notification list

To retrieve notification list.

```ts
const me = await sherl.notification().list(1,10, {your_key: "your_value"});
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
    "total": 17,
    "page": 1,
    "itemsPerPage": 10
  }
}
```
