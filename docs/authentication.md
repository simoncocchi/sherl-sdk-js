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
