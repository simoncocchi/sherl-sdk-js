---
id: organization
title: Organization
---


## Get organizations list

```ts
const organizations = await sherl.organization().list(1,10, {latitude: "44.94354", longitude: "4.541346", distance: "100km"}) // These are example, use what you need
```

## Get one organizations

```ts
const organization = await sherl.organization().one("organizationId")
```

## Get public organizations list

```ts
const publicorganizations = await sherl.organization().publicList(1,10, {latitude: "44.94354", longitude: "4.541346", distance: "28km"}) // These are example, use what you need
```

## Get public one organizations by id

```ts
const publicorganizationid = await sherl.organization().publicOneId("organizationId")
```

## Get public one organizations by slug

```ts
const publicorganizationslug = await sherl.organization().publicOneSlug("organizationSlug")
```