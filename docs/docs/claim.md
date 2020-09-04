---
id: claim
title: Claim
---

## Get claim list

To retrieve claim list.

```ts
const getClaims = await sherl.claim().getClaims();
```

Return object

<!-- ???? -->

```ts
{
  "view": {
    "itemsPerPage": 10,
    "page": 1,
    "total": 0
  },
  "results":
  [
    {
      id: 'string';
      personId: 'string';
      orderId: 'string';
      issueTitle: 'string';
      issueMessage: 'string';
      schedules: {
        allowedFromDate: 'Date';
        allowedUntilDate: 'Date';
      };
    }
  ]
}
```

## Get claim by id

To retrieve claim by id.

```ts
const getClaim = await sherl.claim().getClaim('your_id');
```

Return object

<!-- ???? -->

```ts
{
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  }
}
```

## Post reply refund

Reply to claim to refund with id

```ts
const postClaimRefund = await sherl.claim().postClaimRefund('id');
```

Return object

<!-- ???? -->

```ts
{
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  }
}
```

## Post claims

Create claim with id and claim object

```ts
const postClaim = await sherl.claim().postClaim('id', {
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  }});
```

Return object

<!-- ???? -->

```ts
{
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  }
}
```

## Post reply claim

Reply to claim with id and replu claim object

```ts
const postClaimReply = await sherl.claim().postClaimReply('id', {
  content: 'string',
});
```

Return object

<!-- ???? -->

```ts
{
  id: 'string';
  personId: 'string';
  orderId: 'string';
  issueTitle: 'string';
  issueMessage: 'string';
  schedules: {
    allowedFromDate: 'Date';
    allowedUntilDate: 'Date';
  }
}
```
