---
id: cms
title: CMS
---

## Get CMS list

```ts
const contents = await sherl.cms().list(1, 2);
```

## Get CMS one by id

```ts
const content = await sherl.cms().one(cmsId);
```

## Get CMS one by slug

```ts
const contentSlug = await sherl.cms().oneSlug(cmsSlug);
```