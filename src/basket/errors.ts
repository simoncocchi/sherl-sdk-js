import { ErrorFactory } from '../common/errors';

export enum BasketErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_FAILED= 'post-failed'
}

export const errors = {
  [BasketErr.FETCH_FAILED]: 'Failed to fetch basket API',
  [BasketErr.NOT_FOUND]: 'Basket not found',
  [BasketErr.POST_FAILED]: 'Failed to post basket API',
};

export const errorFactory = new ErrorFactory<BasketErr>(
  'basket',
  'Basket',
  errors,
);
