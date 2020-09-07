---
id: notification
title: Notification
---

## Get notification list

To retrieve notification list.

```ts
const me = await sherl.notification().list(1, 10, { your_key: 'your_value' });
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

## Post disable notification

Disablenable notification to organization

```ts
const postDisableNotification = await sherl
  .notification()
  .postDisableNotification('idorgnization', {
    organizationUri: 'string',
  });
```

Return object

<!-- reponse ??? -->

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

## Post enable notification

Enable notification to organization

```ts
const postEnableNotification = await sherl
  .notification()
  .postEnableNotification('idorgnization', {
    organizationUri: 'string',
  });
```

Return object

<!-- reponse ??? -->

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

## Test notification

Test notification push to user

```ts
const postTestNotification = await sherl.notification().postTestNotification();
```

Response

```ts
ok;
```

## Registration

Registration firebase token device.

```ts
const postRegistrationNotification = await sherl
  .notification()
  .postRegistrationNotification({
  token: 'string';
});
```

Return object

<!-- reponse ??? -->

```ts
{
  personId: 'string';
  registrationToken: 'string';
  createdAt: 'Date';
}
```

## Notification

Send custom notification by email or sms

```ts
const postRegistrationNotification = await sherl
  .notification()
  .postRegistrationNotification("type of notification (email or sms)", {
  html: 'string';
  subject: 'string';
  text: 'string';
});
```

No response
