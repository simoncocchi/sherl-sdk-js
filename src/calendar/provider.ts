import {
  getCalendarAvailabilities,
  getCalendarAvailabilitiesDates,
  getCalendarCalendarId,
  getCalendarEvents,
  getCalendarEventsCalendarId,
  getCalendarEventsEventId,
  getCalendarEventsOwnerUri,
  getCalendarFilter,
  getCalendarLocation,
} from './actions';

class CalendarProvider {
  /**
   * Get calendar events to current person
   *
   * @param {number} [page=1]
   * @param {number} [itemsPerPage=10]
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public eventToPerson(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarEvents(page, itemsPerPage, filters);
  }

  /**
   * Find all calendar events
   *
   * @param {string} calendarId
   * @param {number} [page=1]
   * @param {number} [itemsPerPage=10]
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public eventList(
    calendarId: string,
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarEventsCalendarId(calendarId, page, itemsPerPage, filters);
  }

  /**
   * Get one calendar event
   *
   * @param {string} eventId
   * @returns
   * @memberof CalendarProvider
   */
  public eventById(eventId: string) {
    return getCalendarEventsEventId(eventId);
  }

  /**
   * Get calendar events by calendar owner uri
   *
   * @param {number} [page=1]
   * @param {number} [itemsPerPage=10]
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public eventOwnerUri(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarEventsOwnerUri(page, itemsPerPage, filters);
  }

  /**
   * Find availabilities on calendar
   *
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public availabilities(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarAvailabilities(filters);
  }

  /**
   * Check availabilities for given dates
   *
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public availabilitiesDates(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarAvailabilitiesDates(filters);
  }

  /**
   * Check if calendar is available for user location
   *
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public location(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarLocation(filters);
  }

  /**
   * Get one calendar
   *
   * @param {string} calendarId
   * @returns
   * @memberof CalendarProvider
   */
  public one(calendarId: string) {
    return getCalendarCalendarId(calendarId);
  }

  /**
   * Find one calendar by filters
   *
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof CalendarProvider
   */
  public filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCalendarFilter(filters);
  }
}

export { CalendarProvider };
