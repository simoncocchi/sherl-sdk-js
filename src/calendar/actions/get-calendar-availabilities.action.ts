import { ICalendarEventResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarAvailabilities = async (
  filters: { [key: string]: any },
): Promise<ICalendarEventResponse[]> => {
  const response = await CalendarApi.getCalendarAvailabilities(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
