---
id: person
title: Person
---

## Get galleries

To retrieve galleries.

```ts
onst gallery = await sherl.gallery().all()
```

Return object

```ts
{
  [key: string]: [
   {
     id: string;
     uri: string;
     consumerId: string;
     createdAt: string;
     categoryUri: string;
     media: IImageObject;
   },
  ];
}
```
