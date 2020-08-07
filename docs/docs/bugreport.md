---
id: bugreport
title: Bugreport
---

## Get bugreport list

```ts
const bugreports = await sherl.bugreport().list(1,10, {your_key: "Your_value"})
```

## Get one bugreport by id

```ts
const bugreport = await sherl.bugreport().one("Your_id")
```
