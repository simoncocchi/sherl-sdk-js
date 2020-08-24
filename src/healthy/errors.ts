import { ErrorFactory } from '../common/errors';

export enum HealthyErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
}

export const errors = {
  [HealthyErr.FETCH_FAILED]: 'Failed to fetch healthy API',
  [HealthyErr.NOT_FOUND]: 'Healthy not found',
};

export const errorFactory = new ErrorFactory<HealthyErr>(
  'healthy',
  'Healthy',
  errors,
);
