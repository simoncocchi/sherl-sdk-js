---
id: person
title: Person
---

## Get person me

```ts
const me = await sherl.person().me();
// If you want a particular information inside me 
me["email"];
```


## Get person findOneBy 

```ts
 const personGetOneByUserId = await sherl.person().findOne("userId");
```

## Get person position 

```ts
const position = await sherl.person().position({ longitude: "your_longitude",latitude: "your_latitude"})
```

