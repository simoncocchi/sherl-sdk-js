---
id: place
title: Place
---

## Get place list with !QUERY!

To retrieve place with a query and parameter

```ts
const places = await sherl.place().list(1, 10, { query: 'your_query_value' });

const places = await sherl.place().list(number_of_page, number_of_item_per_page, { query: 'your_query_value', your_key: "your_value" });
```

Return object

```ts
{
  "results": [
      {
        id: string;
        uri: string;
        country: string;
        locality: string;
        region: string;
        department: string;
        types: string[];
        postalCode: string;
        streetAddress: string;
        complementaryStreetAddress: string;
        name: string;
        originId: string;
        latitude: number;
        longitude: number;
        consumerId: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        isDefault: boolean;
      }],
  "view": {
    "total": number_of_item,
    "page": "1",
    "itemsPerPage": "10"
  }
```
