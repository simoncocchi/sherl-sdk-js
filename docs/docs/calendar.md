---
id: person
title: Person
---

## Get calendar events

Get calendar events to current person

```ts
const eventToPerson = await sherl.calendar().eventToPerson(1, 10, {
  id: 'your_id',
  aboutUri: 'your_aboutUri',
  ownerUri: 'ownerUri',
  startDate: 'your_startDate',
  endDate: 'your_endDate',
});
```

Return object

```ts
{
  "results": [
    {
      id: string;
      uri: string;
      availabilities: [string];
      unavailabilities: [string];
      ownerUri: string;
      aboutUri: string;
      consumerId: string;
      createdAt: string;
      updatedAt: string;
      metadatas: {};
    }
  ],
  "view": {
    "total": 1,
    "page": 1,
    "itemsPerPage": 10
  }
}
```

## Get all calendar events

Find all calendar events with calendarId

```ts
const eventList = await sherl.calendar().eventList('calendar_ID', 1, 10, {
  id: 'your_id',
  aboutUri: 'your_aboutUri',
  ownerUri: 'ownerUri',
  startDate: 'your_startDate',
  endDate: 'your_endDate',
});
```

Return object

```ts
{
  "results": [
    {
      id: string;
      uri: string;
      availabilities: [string];
      unavailabilities: [string];
      ownerUri: string;
      aboutUri: string;
      consumerId: string;
      createdAt: string;
      updatedAt: string;
      metadatas: {};
    }
  ],
  "view": {
    "total": 1,
    "page": 1,
    "itemsPerPage": 10
  }
}
```

## Get one calendar event

Get one calendar event with event ID

```ts
const eventById = await sherl.calendar().eventById('event_ID');
```

Return object

```ts
{
  id: string;
  uri: string;
  availabilities: [string];
  unavailabilities: [string];
  ownerUri: string;
  aboutUri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  metadatas: {};
}
```

## Get calendar events

Get calendar events by calendar owner uri

```ts
const eventOwnerUri = await sherl.calendar().eventOwnerUri(1, 10, {
  calendarOwnerUri: 'your_calendarOwnerUri',
  aboutUri: 'your_aboutUri',
  ownerUri: 'your_ownerUri',
  startDate: 'your_startDate',
  endDate: 'your_endDate',
});
```

Return object

```ts
{
  "results": [
    {
      id: string;
      uri: string;
      availabilities: [string];
      unavailabilities: [string];
      ownerUri: string;
      aboutUri: string;
      consumerId: string;
      createdAt: string;
      updatedAt: string;
      metadatas: {};
    }
  ],
  "view": {
    "total": 1,
    "page": 1,
    "itemsPerPage": 10
  }
}
```

## Get calendar availabilities

Find availabilities on calendar

```ts
const availabilities = await sherl
  .calendar()
  .availabilities({
    ownerUri: 'your_ownerUri',
    aboutUri: 'your_aboutUri',
    userPlaceUri: 'your_userPlaceUri',
    metadatas: 'your_metadatas',
    startDate: 'your_startDate',
    endDate: 'your_endDate',
    scale: 'your_scale',
    scaleValue: 'your_scaleValue',
    available: 'your_available'
  });
```

Return object

```ts
[
  {
    id: string;
    uri: string;
    availabilities: [string];
    unavailabilities: [string];
    ownerUri: string;
    aboutUri: string;
    consumerId: string;
    createdAt: string;
    updatedAt: string;
    metadatas: {};
  }
  ]
```

## Get calendar availabilities by dates

Check availabilities for given dates

```ts
const availabilities = await sherl
  .calendar()
  .availabilitiesDates({
    ownerUri: 'owner_uri',
    metadatas: 'your_metadatas',
    dates: 'your_metadatas',
  });
```

Return object

```ts
{
  ownerUri: string;
  metadatas: {};
  dates: [
    {
      from: string;
      to: string;
      available: boolean;
    },
  ];
}
```

## Get calendar availabilities

Check if calendar is available for user location

```ts
const availabilities = await sherl
  .calendar()
  .location({
    calendarOwnerUri: 'owner_uri',
    country : 'your_metadatas',
    locality: 'your_metadatas',
    region: 'your_region',
    postalCode: 'your_postalCode',
    streetAddress: 'your_streetAddress',
  });
```

Return object

```ts
[
  {
    id: string;
    uri: string;
    availabilities: [string];
    unavailabilities: [string];
    ownerUri: string;
    aboutUri: string;
    consumerId: string;
    createdAt: string;
    updatedAt: string;
    metadatas: {};
  }
]
```

## Get one calendar

Get one calendar 

```ts
const availabilities = await sherl
  .calendar()
  .one("calendarId");
```

Return object

```ts
{
  id: string;
  uri: string;
  availabilities: [string];
  unavailabilities: [string];
  ownerUri: string;
  aboutUri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  metadatas: {};
}
```

## Get one calendar with filter

Find one calendar by filters

```ts
const availabilities = await sherl
  .calendar()
  .filter({
    id: 'owner_id',
    uri : 'your_uri',
    aboutUri: 'your_aboutUri',
    ownerUri: 'your_ownerUri',
    metadatas: 'your_metadatas',
  });
```

Return object

```ts
{
  id: string;
  uri: string;
  availabilities: [string];
  unavailabilities: [string];
  ownerUri: string;
  aboutUri: string;
  consumerId: string;
  createdAt: string;
  updatedAt: string;
  metadatas: {};
}
```