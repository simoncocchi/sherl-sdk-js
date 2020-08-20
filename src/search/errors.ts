import { ErrorFactory } from '../common/errors';

export enum SearchErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [SearchErr.FETCH_FAILED]: 'Failed to fetch search API',
  [SearchErr.NOT_FOUND]: 'Search not found',
};

export const errorFactory = new ErrorFactory<SearchErr>(
  'search',
  'Search',
  errors,
);
