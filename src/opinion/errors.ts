import { ErrorFactory } from '../common/errors';

export enum ProductErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [ProductErr.FETCH_FAILED]: 'Failed to fetch products API',
  [ProductErr.NOT_FOUND]: 'Opinion not found',
};

export const errorFactory = new ErrorFactory<ProductErr>(
  'opinion',
  'Opinion',
  errors,
);
