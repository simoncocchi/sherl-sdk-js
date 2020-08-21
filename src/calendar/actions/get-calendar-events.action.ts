import { Pagination } from '../../common/api';
import { ICalendarResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarEvents = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ICalendarResponse[]>> => {
  const response = await CalendarApi.getCalendarEvents(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
