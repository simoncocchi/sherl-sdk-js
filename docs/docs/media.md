---
id: media
title: Media
---

## Get media

To retrieve media information by id.

```ts
const me = await sherl.media().one("media_ID");
```

Return object

```ts
{
  contentUrl: string;
  description?: string;
  duration?: string;
  encodingFormat: string;
  size?: number;
  name: string;
  id: string;
}
```
