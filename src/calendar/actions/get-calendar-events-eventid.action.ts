import { ApiResponse } from '../../common/api';
import { ICalendarEventResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarEventsEventId = async (eventId: string): Promise<ICalendarEventResponse> => {
  let response: ApiResponse<ICalendarEventResponse> | null = null;

  try {
    response = await CalendarApi.getCalendarEventsEventId(eventId);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
