import { ErrorFactory } from '../common/errors';

export enum ProductErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_FAILED = 'post-failed',
}

export const errors = {
  [ProductErr.FETCH_FAILED]: 'Failed to fetch products API',
  [ProductErr.NOT_FOUND]: 'Product not found',
  [ProductErr.POST_FAILED]: 'Failed to post products',
};

export const errorFactory = new ErrorFactory<ProductErr>(
  'product',
  'Product',
  errors,
);
