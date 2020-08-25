---
id: authentication
title: Authentication
sidebar_label: Authentication
---

All methods requires a valid authentication.

```ts
// With require
const sherl = require('@sherl/sdk');
// OR import
import sherl from '@sherl/sdk';

const promise = sherl
  .auth()
  .signInWithEmailAndPassword('mail@example.com', 'password');

promise.then(() => {
  console.log('Login successful');
});
```

## Logout 

```ts
const logout = await sherl.auth().logout()
```

## Impersonate

```ts
const impersonate = await sherl.auth().impersonate("impersonnate_id")
```

Return object 

```ts
{
  access_token: string;
}
```

## Google auth

Authentication - Google - Open HTML form for login.

```ts
const google = await sherl.auth().google();
```

Return object 

```ts
{
  
}
```

## Google auth callback

Authentication with facebook account - Callback.

```ts
const googlecallback = await sherl.auth().googleCallback();
```

Return object 

```ts
{
    id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: [
    {
      value: string;
      verified: true;
    },
  ];
  photos: [
    {
      value: string;
    },
  ];
  locale: string;
}
```

## Facebook auth

Authentication - Facebook - Open HTML form for login.

```ts
const facebook = await sherl.auth().facebook();
```

Return object 

```ts
{
  
}
```

## Facebook auth callback

Authentication with facebook account - Callback.

```ts
const facebookcallback = await sherl.auth().facebookCallback();
```

Return object 

```ts
{
    id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: [
    {
      value: string;
      verified: true;
    },
  ];
  photos: [
    {
      value: string;
    },
  ];
  locale: string;
}
```