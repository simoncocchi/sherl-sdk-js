import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch person API',
  'not-found': 'Person not found',
};

export const errorFactory = new ErrorFactory<Err>('person', 'Person', errors);
