import { ICalendarEventResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarLocation = async (
  filters: { [key: string]: any },
): Promise<ICalendarEventResponse[]> => {
  const response = await CalendarApi.getCalendarLocation(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
