---
id: communication
title: Communication
---

## Get communications
To retrieve communications.
```ts
const me = await sherl.communication().list(1,10, {your_key: "your_values"});
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
