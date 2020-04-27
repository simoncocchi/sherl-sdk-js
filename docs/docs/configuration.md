---
id: configuration
title: Configuration
---

Before calling any other methods, you need to initialize the SDK by calling `initializeApp`:

```ts
// With require
const sherl = require('@sherl/sdk');
// OR import
import sherl from '@sherl/sdk';

sherl.initializeApp({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});
```
