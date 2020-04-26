# @sherl/sdk

[![Release](https://github.com/Winzana/sherl-sdk-js/workflows/Release/badge.svg?branch=master&event=push)](https://github.com/Winzana/sherl-sdk-js/actions?query=workflow%3ARelease)
[![Version](https://img.shields.io/npm/v/@sherl/sdk)](https://www.npmjs.com/package/@sherl/sdk)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Sherl SDK for JavaScript.

## Sherl

Sherl is a low-code platform created by [Winzana](https://winzana.com).

## Getting started

### Installation

```
npm install @sherl/sdk
```

### Configuration

Before calling any other methods, you need to initialize the SDK by calling `initializeApp`:

```js
// With require
const sherl = require('@sherl/sdk');
// OR import
import sherl from '@sherl/sdk';

sherl.initializeApp({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});
```

## Contributions

See [CONTRIBUTING.md](CONTRIBUTING.md)
