---
id: analytics
title: Analytics
---

## Get Analytics CA

To retrieve analytics CA with sortBy.

```ts
const CA = await sherl
  .analytics()
  .CA({ sortBy: 'your_value', your_key: 'your_value' });
```

Return object

```ts
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
        }
      }
]
```

## Get analytics Notifications

To retrieve analytics of notifications

```ts
const analyticsnotifications = await sherl
  .analytics()
  .notifications({ your_key: 'your_value' });
```

Return object

```ts
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
    }
}
```

## Get analytics one

To retrieve analytics of one

```ts
const analyticsone = await sherl
  .analytics()
  .one({ your_key: 'your_value' });
```

Return object

```ts
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
        }
  }
```

## Get analytics audience

To retrieve analytics of audience with filterByDate. 

```ts
const analyticsaudience = await sherl
  .analytics()
  .audience({ filterByDate: 'your_value', your_key: 'your_value' });
```

Return object

```ts
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
    }
}
]
```

## Get analytics Products

To retrieve analytics of product with sortBy. 

```ts
const analyticsproducts = await sherl
  .analytics()
  .products({ sortBy: 'your_value', your_key: 'your_value' });
```

Return object

```ts
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
    }
}
]
```
