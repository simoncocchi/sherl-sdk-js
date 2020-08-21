import { Pagination } from '../../common/api';
import { ICalendarEventResponse  } from '../types'
import { CalendarApi } from '../api/client';
import { errorFactory, CalendarErr } from '../errors';

export const getCalendarEventsCalendarId = async (
    calendarId: string,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ICalendarEventResponse[]>> => {
  const response = await CalendarApi.getCalendarEventsCalendarId(
    calendarId,
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(CalendarErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};