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

## Get user config

To retrieve pro user config

```ts
const me = await sherl.person().config();
```

Return object

```ts
{
  id: string;
  code: string;
  value: any;
  consumer: string;
  position: number;
  appliedTo?: string;
  isPublic?: boolean;
}
```

### Post request

## Add person to black list.

For a pro account add a person to black list with is id

```ts
const postAddBlackList = await sherl.person().postAddBlackList('person_id');
console.log('postAddBlackList', postAddBlackList);
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

## Create a new super administrator.

Create a super admin with id, name, first name and mail in object

```ts
const postCreateAdmin = await sherl
  .person()
  .postCreateAdmin({
  id: 'string';
  firstName: 'string';
  lastName: 'string';
  email: 'string';
});
console.log('postCreateAdmin', postCreateAdmin);
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

## Create a new address to current Person.

Add a new adress to person with adress object

```ts
const postAddress = await sherl
  .person()
  .postAddress({
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
  latitude: number;
  longitude: number;
  consumerId: 'string';
  createdAt: 'Date';
  updatedAt: 'Date';
  type: 'string';
  isDefault: boolean;
  googleToken: 'string';
});
console.log('postAddress', postAddress);
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

## Create a new Person.

Create a new Person with person object

```ts
const postCreatePerson = await sherl.person().postCreatePerson({
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
  phoneNumber: 'string';
  mobilePhoneNumber: 'string';
  faxNumber: 'string';
  nationality: 'string';
  affiliation: {
    id: 'string';
    uri: 'string';
    legalName: 'string';
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
    subOrganizations: ['string'];
  };
  birthDate: 'Date';
  email: 'string';
  gender: 'string';
  jobTitle: 'string';
};
```

No response from this post request

## Create a new person with email and password

Create a new person with person object

```ts
const registerEmailPassword = await sherl.person().postRegisterEmailPassword({
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
  phoneNumber: 'string';
  birthDate: 'Date';
  email: 'string';
  password: 'string';
  confirmPassword: 'string';
});
console.log('registerEmailPassword', registerEmailPassword);
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

## Enable one Person.

Enable one Person with id

```ts
const postEnable = await sherl.person().postEnable('id');
```

No response from this post request

## Disable one Person.

Disable one Person with id

```ts
const postDisabled = await sherl.person().postDisabled('id');
```

No response from this post request

## Accept legal notice for one Person.

Accept legal notice for one Person with id and version object

```ts
const postLegalNotice = await sherl.person().postLegalNotice('id', { version: 'string'; });
```

No response from this post request

## Accept Privacy Policy for one Person. // dont work and not found in connectilib

Accept Privacy Policy for one Person with id and version object

```ts
const postPrivacyPolice = await sherl
  .person()
  .postPrivacyPolice('id', { version: 'string'; });
```

No response from this post request

## Add picture to one person. // don't work in test, i don't know how to upload image in post

Add picture to one person with idPerson and idMedia

```ts
const postPicture = await sherl.person().postPicture('idPerson', 'idMedia');
console.log('postPicture', postPicture);
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

## Add organization to person favorite

Add organization to person favorite with idPerson and idOrganization

```ts
const postOrganization = await sherl
  .person()
  .postOrganization('idPerson', 'idOrganization');
console.log('postOrganization', postOrganization);
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

## Refresh Iam // don't work in test

Refresh Iam

```ts
const postRefreshIam = await sherl.person().postRefreshIam();
console.log('postRefreshIam', postRefreshIam);
```

Return object

```ts
```

## Refresh Iam One // don't work in test

Refresh Iam one with id

```ts
const postRefreshIamOne = await sherl.person().postRefreshIamOne('id');
console.log('postRefreshIamOne', postRefreshIamOne);
```

Return object

```ts
```
