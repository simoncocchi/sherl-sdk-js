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

const organizations = await sherl
  .organization()
  .list(number_of_page, number_of_item_per_page, { your_keys: 'your_value' });
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

### Post request

## Add Background Image from media to one organization

Add Background Image from media to one organization with id, idMedia adn image object

```ts
const postBackgroundImageFromMedia = await sherl
  .organization()
  .postBackgroundImageFromMedia(
    'id',
    'idMedia',
    {
      id: 'string';
      uri: 'string';
      width: 0;
      height: 0;
      caption: {
        contentUrl: 'string';
        description: 'string';
        duration: 'string';
        encodingFormat: 'string';
        size: 0;
        name: 'string';
        id: 'string';
      };
      thumbnail: {
        id: 'string';
        uri: 'string';
        width: 0;
        height: 0;
        caption: {
          contentUrl: 'string';
          description: 'string';
          duration: 'string';
          encodingFormat: 'string';
          size: 0;
          name: 'string';
          id: 'string';
        };
      };
    },
  );
console.log('postBackgroundImageFromMedia', postBackgroundImageFromMedia);
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
  };
}
```

## Add backgroundImage to one organization

Add backgroundImage to one organization with id and idMedia

<!-- Need image -->

```ts
const postBackgroundImage = await sherl
  .organization()
  .postBackgroundImage('id', 'idMedia');
console.log('postBackgroundImage', postBackgroundImage);
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
  };
}
```

## Create a new address to current Organization

Create a new address to current Organization with id and address object

```ts
const postAddress = await sherl
  .organization()
  .postAddress('id', {
    id: 'string';
    uri: 'string';
    country: 'string';
    locality: 'string';
    region: 'string';
    department: 'string';
    types: ['string'];
    postalCode: 'string';
    streetAddress: 'string';
    complementaryStreetAddress: 'string';
    name: 'string';
    originId: 'string';
    latitude: 0;
    longitude: 0;
    consumerId: 'string';
    createdAt: '2020-09-02T11:56:02.956Z';
    updatedAt: '2020-09-02T11:56:02.956Z';
    type: 'string';
    isDefault: true;
    googleToken: 'string';
});
console.log('postAddress', postAddress);
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
  };
}
```

## Create a new organization

Create a new organization with orgnization object

```ts
const postNewOrganization = await sherl.organization().postNewOrganization({
    id: 'string';
    legalName: 'string';
    siret: 'string';
    location: {
      id: 'string';
      country: 'string';
      locality: 'string';
      region: 'string';
      postalCode: 'string';
      streetAddress: 'string';
      uri: 'string';
      createdAt: 'Date';
      department: 'string';
      complementaryStreetAddress: 'string';
      name: 'string';
      originId: 'string';
      latitude: number;
      longitude: number;
    };
});
console.log('postNewOrganization', postNewOrganization);
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
  };
}
```

## Suggest a new organization

Suggest a new organization with orgnization object

```ts
const postSuggestOrganization = await sherl
  .organization()
  .postSuggestOrganization( {
    id: 'string';
    legalName: 'string';
    siret: 'string';
    location: {
      id: 'string';
      country: 'string';
      locality: 'string';
      region: 'string';
      postalCode: 'string';
      streetAddress: 'string';
      uri: 'string';
      createdAt: 'Date';
      department: 'string';
      complementaryStreetAddress: 'string';
      name: 'string';
      originId: 'string';
      latitude: number;
      longitude: number;
    };
});
console.log('postSuggestOrganization', postSuggestOrganization);
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
  };
}
```

## Create a new organization

Create a new organization with orgnization register object

```ts
const postNewOrganization = await sherl.organization().postNewOrganization({
    sponsoredByCode: 'string';
    organization: {
      id: 'string';
      legalName: 'string';
      siret: 'string';
      location: {
        id: 'string';
        country: 'string';
        locality: 'string';
        region: 'string';
        postalCode: 'string';
        streetAddress: 'string';
        uri: 'string';
        createdAt: 'Date';
        department: 'string';
        complementaryStreetAddress: 'string';
        name: 'string';
        originId: 'string';
        latitude: number;
        longitude: number;
      };
    };
    person: {
      id: 'string';
      firstName: 'string';
      lastName: 'string';
      address: {
        id: 'string';
        country: 'string';
        locality: 'string';
        region: 'string';
        postalCode: 'string';
        streetAddress: 'string';
        uri: 'string';
        createdAt: 'Date';
        department: 'string';
        complementaryStreetAddress: 'string';
        name: 'string';
        originId: 'string';
        latitude: number;
        longitude: number;
      };
      mobilePhoneNumber: 'string';
      nationality: 'string';
      latitude: number;
      longitude: number;
      birthDate: 'Date';
      email: 'string';
      gender: 'string';
      jobTitle: 'string';
    };
});
console.log('postNewOrganization', postNewOrganization);
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
  };
}
```

## Create a new organization to person.

Create a new organization to person with orgnization register object

```ts
const postRegisterOrgnizationPerson = await sherl
  .organization()
  .postRegisterOrgnizationPerson({
    sponsoredByCode: 'string';
    organization: {
      id: 'string';
      legalName: 'string';
      siret: 'string';
      location: {
        id: 'string';
        country: 'string';
        locality: 'string';
        region: 'string';
        postalCode: 'string';
        streetAddress: 'string';
        uri: 'string';
        createdAt: 'Date';
        department: 'string';
        complementaryStreetAddress: 'string';
        name: 'string';
        originId: 'string';
        latitude: number;
        longitude: number;
      };
    };
    person: {
      id: 'string';
      firstName: 'string';
      lastName: 'string';
      address: {
        id: 'string';
        country: 'string';
        locality: 'string';
        region: 'string';
        postalCode: 'string';
        streetAddress: 'string';
        uri: 'string';
        createdAt: 'Date';
        department: 'string';
        complementaryStreetAddress: 'string';
        name: 'string';
        originId: 'string';
        latitude: number;
        longitude: number;
      };
      mobilePhoneNumber: 'string';
      nationality: 'string';
      latitude: number;
      longitude: number;
      birthDate: 'Date';
      email: 'string';
      gender: 'string';
      jobTitle: 'string';
    };
});
console.log('postRegisterOrgnizationPerson', postRegisterOrgnizationPerson);
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
  };
}
```

## Create a new organization KYC document

Create a new organization KYC document with id and kyc object

<!-- Lemonway bug -->

```ts
const postCreateKyc = await sherl
  .organization()
  .postCreateKyc('id', {
    id: 'string';
    type: {};
    media: {};
}
);
console.log('postCreateKyc', postCreateKyc);
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
  };
}
```

## Create a new organization Rib document

Create a new organization Rib document with id and rib object

<!-- Lemonway bug -->

```ts
const postCreateRib = await sherl
  .organization()
  .postCreateRib('id', {
    iban: 'string';
    bic: 'string';
});
console.log('postCreateRib', postCreateRib);
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
  };
}
```

## Create a new Organization employee

Create a new Organization employee with id and employee object

```ts
const postCreateEmployee = await sherl
  .organization()
  .postCreateEmployee('id', {
    id: 'string';
    firstName: 'string';
    lastName: 'string';
    email: 'string';
});
console.log('postCreateEmployee', postCreateEmployee);
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
  };
}
```

## Create a new Organization founder

Create a new Organization founder with id and founder object

```ts
const postCreateFounder = await sherl
  .organization()
  .postCreateFounder('id', {
    id: 'string';
    firstName: 'string';
    lastName: 'string';
    birthDate: '2018-11-21T06:20:32.232Z';
    email: 'string';
});
console.log('postCreateFounder', postCreateFounder);
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
  };
}
```

## Create a new Organization open hours specification

Create a new Organization open hours specification with id and opening hours object

```ts
const postCreateOpeningHours = await sherl
  .organization()
  .postCreateOpeningHours('id', {
    id: 'string';
    dayOfWeek: 'string';
    closes: '2020-09-02T11:34:28.196Z';
    opens: '2020-09-02T11:34:28.196Z';
    validFrom: '2020-09-02T11:34:28.196Z';
    validThrough: '2020-09-02T11:34:28.196Z';
});
console.log('postCreateOpeningHours', postCreateOpeningHours);
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
  };
}
```

## Add picture from media to one organization

Add picture from media to one organization with id, idMedia and picture object

```ts
const postPictureFromMedia = await sherl
  .organization()
  .postPictureFromMedia(
    'id',
    'idMedia',
    {
      id: 'string';
      uri: 'string';
      width: 0;
      height: 0;
      caption: {
        contentUrl: 'string';
        description: 'string';
        duration: 'string';
        encodingFormat: 'string';
        size: 0;
        name: 'string';
        id: 'string';
      };
      thumbnail: {
        id: 'string';
        uri: 'string';
        width: 0;
        height: 0;
        caption: {
          contentUrl: 'string';
          description: 'string';
          duration: 'string';
          encodingFormat: 'string';
          size: 0;
          name: 'string';
          id: 'string';
        };
      };
    },
  );
console.log('postPictureFromMedia', postPictureFromMedia);
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
  };
}
```

## Add picture to one organization

Add picture to one organization with id and idMedia

<!-- Manque image -->

```ts
const postPicture = await sherl.organization().postPicture('id', 'idMedia');
console.log('postPicture', postPicture);
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
  };
}
```

## Add logo to one organization

Add logo to one organization with id and idMedia

<!-- Manque image -->

```ts
const postLogo = await sherl.organization().postLogo('id', 'idMedia');
console.log('postLogo', postLogo);
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
  };
}
```

## Set communication to Organization

Set communication to Organization with id and communication object

```ts
const postCommunication = await sherl
  .organization()
  .postCommunication('id', {
    title: 'string';
    message: 'string';
    icon: 'string';
  });
console.log('postCommunication', postCommunication);
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
  };
}
```
