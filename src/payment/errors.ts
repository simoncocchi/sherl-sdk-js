import { ErrorFactory } from '../common/errors';

export enum PaymentErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [PaymentErr.FETCH_FAILED]: 'Failed to fetch payment API',
  [PaymentErr.NOT_FOUND]: 'Payment not found',
};

export const errorFactory = new ErrorFactory<PaymentErr>(
  'payment',
  'Payment',
  errors,
);
