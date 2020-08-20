import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch config API',
  'not-found': 'Config not found',
};

export const errorFactory = new ErrorFactory<Err>('config', 'Config', errors);
