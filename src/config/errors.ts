import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export enum ConfigErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_CONFIG_FAILED = 'post-config-failed',
}

export const errors = {
  [ConfigErr.FETCH_FAILED]: 'Failed to fetch config API',
  [ConfigErr.NOT_FOUND]: 'Config not found',
  [ConfigErr.POST_CONFIG_FAILED]: 'Could not post config',
};

export const errorFactory = new ErrorFactory<ConfigErr>(
  'config',
  'Config',
  errors,
);
