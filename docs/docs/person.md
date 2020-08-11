---
id: person
title: Person
---

## Get person me

To retrieve user information.

```ts
const me = await sherl.person().me();
// If you want a particular information inside me
me['email'];
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
  address: IPlaceResponse;
  myAddresses: IPlaceResponse[];
  subscriptionLocation: IGeoCoordinatesResponse;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganizationResponse;
  birthDate: Date;
  email: string;
  gender: string;
  latitude: number;
  longitude: number;
  jobTitle: string;
  enabled: boolean;
  legalNotice: ILegalNoticeResponse;
  privacyPolicy: IPrivacyPolicyResponse;
  createdAt: Date;
  updatedAt: Date;
  picture: IImageObjectResponse;
  settings: ISettingsResponse;
  organizationFavorites: string[];
  mangopayUserId: string;
  mangopayWalletId: string;
  mangopayCards: IMangopayCardResponse[];
  stripe: IStripeResponse;
  lemonway: ILemonwayResponse;
  type: IPersonTypeEnumResponse;
  frequentedEstablishments: IFrequentedEstablishmentsResponse[];
  metadatas: { [key: string]: any };
  statistics: {
    lastVisit: Date;
    firstVisit: Date;
    totalVisit: number;
    amountLastOrder: number;
    amountTotalOrder: number;
    frequentedEstablishments: IFrequentedEstablishmentsResponse[];
    loyalCustomer: boolean;
  };
}
```
