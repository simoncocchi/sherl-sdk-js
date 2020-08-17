import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch products API',
  'not-found': 'Communication not found',
};

export const errorFactory = new ErrorFactory<Err>('communication', 'Communication', errors);
