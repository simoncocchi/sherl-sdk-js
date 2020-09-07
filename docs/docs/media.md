---
id: media
title: Media
---

## Get media

To retrieve media information by id.

```ts
const me = await sherl.media().one('media_ID');
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

## Post media

Upload media

```ts
const postMedia = await sherl.media().postMedia({
  id: 'da3be8df-4aad-47e4-9da3-c8f8a4r4f863',
  domain: 'cms',
});
```

Return object
<!-- Reponse ??? -->
```ts
{
  id: 'string';
  uri: 'string';
  width: number;
  height: number;
  caption: {
    contentUrl: 'string';
    description: 'string';
    duration: 'string';
    encodingFormat: 'string';
    size: number;
    name: 'string';
    id: 'string';
  };
  thumbnail: {
    id: 'string';
    uri: 'string';
    width: number;
    height: number;
    caption: {
      contentUrl: 'string';
      description: 'string';
      duration: 'string';
      encodingFormat: 'string';
      size: number;
      name: 'string';
      id: 'string';
    };
  };
}
```
