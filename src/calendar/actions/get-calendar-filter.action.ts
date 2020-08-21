import { ICalendarResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarFilter = async (
  filters: { [key: string]: any },
): Promise<ICalendarResponse> => {
  const response = await CalendarApi.getCalendarFilter(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
