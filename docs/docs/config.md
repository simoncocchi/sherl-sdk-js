---
id: config
title: Config
---

## Get config

To retrieve public config

```ts
const configpublic = await sherl.config().value();
```

Return object

```ts
{
}
```

## Post configs

Set a config value

```ts
const postConfigs = await sherl.config().postConfigs({
  isPublic: true;
  code: 'string';
  value: {};
});
console.log('postConfigs', postConfigs);
```

Return object

```ts
{
  isPublic: true;
  code: 'string';
  value: {
  }
}
```
