import { ErrorFactory } from '../common/errors';

export enum BasketErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [BasketErr.FETCH_FAILED]: 'Failed to fetch basket API',
  [BasketErr.NOT_FOUND]: 'Basket not found',
};

export const errorFactory = new ErrorFactory<BasketErr>(
  'basket',
  'Basket',
  errors,
);
