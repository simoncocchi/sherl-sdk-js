import { ApiResponse } from '../../common/api';
import { ICalendarResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarCalendarId = async (calendarId: string): Promise<ICalendarResponse> => {
  let response: ApiResponse<ICalendarResponse> | null = null;

  try {
    response = await CalendarApi.getCalendarCalendarId(calendarId);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
