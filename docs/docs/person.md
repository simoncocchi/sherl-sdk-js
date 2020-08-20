---
id: person
title: Person
---

## Get person me

To retrieve user informations.

```ts
const me = await sherl.person().me();
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

## Get person by id

To retrieve user informations with is id

```ts
const me = await sherl.person().findOne('ID');
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

## Get list of users informations

To retrieve users informations

```ts
const me = await sherl.person().list(1, 10);
```

Return object

```ts
{
  "results":[{
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
}],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get user position

To retrieve user position

```ts
const me = await sherl
  .person()
  .position({ longitude: 'your_longitude', latitude: 'your_latitude' });
```

Return object

```ts
{
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: string;
  longitude: string;
}
```

## Get person favorite organization

To retrieve user favorite organization

```ts
const me = await sherl
  .person()
  .favoriteOrganization("83e361e0-58cf-4594-9ede-5a94a6483cc9", 1, 10);
```

Return object

```ts
{
  "results": 
  [
    {
      id: string;
      uri: string;
      sponsorshipCode: string;
      sponsoredByCode: string;
      sponsoredByUri: string;
      slug: string;
      consumerId: string;
      legalName: string;
      location: IPlace;
      myAddresses: IGeoCoordinates[];
      aggregateRating: number;
      subOrganizations: IOrganizationResponse[];
      email: string;
      employees: IEmployee[];
      wallet: IWallet;
      isPaymentAllowed: boolean;
      enabled: boolean;
      faxNumber: string;
      phoneNumber: string;
      website: string;
      founders: IFounder[];
      foundingDate: Date;
      knowsLanguage: ITaxonomy[];
      logo: IImageObject;
      backgroundImage: IImageObject;
      numberOfEmployees: number;
      parentOrganization: IOrganizationResponse;
      slogan: string;
      siret: number;
      smokingAllowed: boolean;
      openNow: boolean;
      openingHoursSpecification: IOpeningHoursSpecification[];
      isAccessibleForFree: boolean;
      isComingSoon: boolean;
      photos: IImageObject[];
      serviceType: ITaxonomy[];
      types: string[];
      advertisingText: string;
      communication: IOrganizationCommunication;
      geopoint: string;
      createdAt: Date;
      updatedAt: Date;
      metadatas: { [key: string]: any };
      categories: ICategoryResponse[];
      products: IProductResponse[];
      events: ICalendarEvent[];
      isRoaming: boolean;
      is: boolean;
      calendarId: string;
      opinion: number;
      opinionCount: number;
      blackListPersons: string[];
      thirdParty: {
        facebook: {
          accessToken: string;
          longLivedUserAccessToken: string;
          expirationDate: Date;
          userID: string;
        };
      };
      statistics: {
        firstVisit: Date;
        totalOrder: number;
        amountTotalOrder: number;
        subscription: ISubscription;
        opinion: number;
      };
      quotas: { [key: string]: IQuotas };
      configs: IPersonConfigValue[];
      displayed: {
        actualityContent: string;
        actualityTitle: string;
        backgroundImg: string;
        logoImg: string;
        highlightImg: string;
        city: string;
        id: string;
        isBarService: boolean;
        isOpen: boolean;
        latitude: number;
        longitude: number;
        name: string;
        position: string;
        type: string;
        weekTime: IDays[];
        metadatas: any;
      };
    }
  ],
  "aggregations": {},
  "view": {
    "total": 5,
    "page": 1,
    "itemsPerPage": 10
  }
}
```
