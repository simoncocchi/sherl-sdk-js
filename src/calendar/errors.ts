import { ErrorFactory } from '../common/errors';

export enum CalendarErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [CalendarErr.FETCH_FAILED]: 'Failed to fetch calendar API',
  [CalendarErr.NOT_FOUND]: 'Calendar not found',
};

export const errorFactory = new ErrorFactory<CalendarErr>(
  'calendar',
  'Calendar',
  errors,
);
