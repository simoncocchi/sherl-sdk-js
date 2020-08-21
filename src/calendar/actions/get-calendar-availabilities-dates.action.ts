import { ICheckDatesResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarAvailabilitiesDates = async (
  filters: { [key: string]: any },
): Promise<ICheckDatesResponse> => {
  const response = await CalendarApi.getCalendarAvailabilitiesDates(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
