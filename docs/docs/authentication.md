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

## Googel auth

```ts
const google = await sherl.auth().google();
```

Return object 

```ts
{
  access_token: string;
}
```