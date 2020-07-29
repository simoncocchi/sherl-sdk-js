---
id: product
title: Product
---

## Get product list

```ts
const products = await sherl.product().list(1, 10);
```

## Get one product

```ts
const product = await sherl.product().one(productId);
```

## Get public product

```ts
const urlproducts = await sherl.product().publicproductlist(1,10);
// you can add parameter
const urlproducts = await sherl.product().publicproductlist(1,10, {key: 'parameter'});
```

## Get public product by id 
```ts
const urlFindOne = await sherl.product().PublicProductById("your_id")
```

## Get public product by slug
```ts
const urlFindBySlug = await sherl.product().PublicProductBySlug("your_slug")
```

## Get public categories
```ts
const publicCategories = await sherl.product().PublicCategories()
```

## Get public categories by slug
```ts
const publicCategoriesBySlug = await sherl.product().PublicCategoriesSlug("your_slug")
```

## Get public categories and subcategories
```ts
const publicCategoriesAndSub = await sherl.product().PublicCategoriesAndSub()
```