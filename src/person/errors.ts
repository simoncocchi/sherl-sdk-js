import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export enum PersonErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [PersonErr.FETCH_FAILED]: 'Failed to fetch products API',
  [PersonErr.NOT_FOUND]: 'Person not found',
};

export const errorFactory = new ErrorFactory<Err>('person', 'Person', errors);
