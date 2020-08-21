import { IGeoCoordinates } from '../common/types';

export interface ICalendarResponse {
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

export interface ICalendarEventResponse {
  id?: string;
  uri?: string;
  aboutUri?: string;
  calendarUri?: string;
  startDate?: Date;
  endDate?: Date;
  location?: IGeoCoordinates;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICheckDatesResponse {
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
