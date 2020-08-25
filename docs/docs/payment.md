---
id: payment
title: Payment
---

## Get payment validate

Validate payment card for mangopay.

```ts
const me = await sherl.payment().validate('id');
```

Return object

```ts
{
  Id: string;
  Tag: string;
  CreationDate: Date;
  UserId: string;
  AccessKey: string;
  PreregistrationData: string;
  RegistrationData: string;
  CardId: string;
  CardType: string;
  CardRegistrationURL: string;
  ResultCode: string;
  ResultMessage: string;
  Currency: string;
  Status: string;
}
```

## Get payment secure

Secure payment for 3DS.

```ts
const me = await sherl.payment().secure('id');
```

Return object

```ts
{
  Id: string;
  Tag: string;
  CreationDate: Date;
  UserId: string;
  AccessKey: string;
  PreregistrationData: string;
  RegistrationData: string;
  CardId: string;
  CardType: string;
  CardRegistrationURL: string;
  ResultCode: string;
  ResultMessage: string;
  Currency: string;
  Status: string;
}
```
