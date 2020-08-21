import {
  ICalendarEventResponse,
  ICalendarResponse,
  ICheckDatesResponse,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class CalendarApi {
  /**
   * Get calendar events to current person
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarEvents = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICalendarResponse[]>>(
      endpoints.GET_CALENDAR_EVENTS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  /**
   * Find all calendar events
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarEventsCalendarId = (
    calendarId: string,
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICalendarEventResponse[]>>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_EVENTS_CALENDARID, {
        calendarId,
      }),
      (endpoints.GET_CALENDAR_EVENTS_CALENDARID,
      {
        page,
        itemsPerPage,
        ...filters,
      }),
    );

  /**
   * Get one calendar event
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarEventsEventId = (eventId: string) =>
    fetcher.get<ICalendarEventResponse>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_EVENTS_EVENTID, {
        eventId,
      }),
    );

  /**
   * Get calendar events by calendar owner uri
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarEventsOwnerUri = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICalendarResponse>>(
      endpoints.GET_CALENDAR_EVENTS_OWNER,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  /**
   * Find availabilities on calendar
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarAvailabilities = (filters: { [key: string]: any }) =>
    fetcher.get<ICalendarEventResponse[]>(
      endpoints.GET_CALENDAR_FIND_AVAILABILITIES,
      {
        ...filters,
      },
    );

  /**
   * Check availabilities for given dates
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarAvailabilitiesDates = (filters: {
    [key: string]: any;
  }) =>
    fetcher.get<ICheckDatesResponse>(endpoints.GET_CALENDAR_CHECK_DATES, {
      ...filters,
    });

  /**
   * Check if calendar is available for user location
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarLocation = (filters: { [key: string]: any }) =>
    fetcher.get<ICalendarEventResponse[]>(
      endpoints.GET_CALENDAR_CHECK_LOCATION,
      {
        ...filters,
      },
    );

  /**
   * Get one calendar
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarCalendarId = (calendarId: string) =>
    fetcher.get<ICalendarResponse>(
      StringUtils.bindContext(endpoints.GET_CALENDAR_CALENDARID, {
        calendarId,
      }),
    );

  /**
   * Find one calendar by filters
   *
   * @static
   * @memberof CalendarApi
   */
  public static getCalendarFilter = (filters: { [key: string]: any }) =>
    fetcher.get<ICalendarResponse>(endpoints.GET_CALENDAR_FIND_ONE, {
      ...filters,
    });
}

export { CalendarApi };
