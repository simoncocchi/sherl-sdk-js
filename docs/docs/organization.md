---
id: organization
title: Organization
---

## Get organizations list

To retrieve organizations list

```ts
const organizations = await sherl.organization().list(1, 10, {
  latitude: '44.94354',
  longitude: '4.541346',
  distance: '100km',
}); // These are example, use what you need

const organizations = await sherl
  .organization()
  .list(number_of_page, number_of_item_per_page);
```

Return object

```ts
{
  "results": [
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
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get one organizations by id

To retrieve an organization by ID

```ts
const organization = await sherl.organization().one('organizationId');
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

## Get public organizations list

To retrieve public organizations list

```ts
const publicorganizations = await sherl.organization().publicList(1, 10, {
  latitude: '44.94354',
  longitude: '4.541346',
  distance: '28km',
}); // These are example, use what you need

const organizations = await sherl.organization().list(number_of_page, number_of_item_per_page, { your_keys: "your_value"});
```

Return object

```ts
{
  "results": [
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
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```

## Get public one organizations by id

To retrieve public organizations by id

```ts
const publicorganizationid = await sherl
  .organization()
  .publicOneId('organizationId');
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

## Get public one organizations by slug

To retrieve public organizations by slug

```ts
const publicorganizationslug = await sherl
  .organization()
  .publicOneSlug('organizationSlug');
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
