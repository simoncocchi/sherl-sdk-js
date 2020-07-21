import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  LOGIN_FAILED = 'login-failed',
}
export const errors = {
  [AuthErr.LOGIN_FAILED]: 'Could not login',
};

export const errorFactory = new ErrorFactory<AuthErr>('auth', 'Auth', errors);
