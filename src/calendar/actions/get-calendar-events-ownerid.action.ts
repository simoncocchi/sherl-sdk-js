import { Pagination } from '../../common/api';
import { ICalendarResponse } from '../types';
import { CalendarApi } from '../api/client';

export const getCalendarEventsOwnerUri = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ICalendarResponse>> => {
  const response = await CalendarApi.getCalendarEventsOwnerUri(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch calendar API (status: ${response.status})`,
    );
  }

  return response.data;
};
