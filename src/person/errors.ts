import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';
export enum PersonErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_ADDRESS_FAILED = 'post-address-failed',
  POST_FAVORITE_FAILED = 'post-favorite-failed'
}

export const errors = {
  [PersonErr.FETCH_FAILED]: 'Failed to fetch person API',
  [PersonErr.NOT_FOUND]: 'Person not found',
  [PersonErr.POST_ADDRESS_FAILED]: 'Could not post address',
  [PersonErr.POST_FAVORITE_FAILED]: 'Could not post favorite organization',
};

export const errorFactory = new ErrorFactory<PersonErr>(
  'person',
  'Person',
  errors,
);
