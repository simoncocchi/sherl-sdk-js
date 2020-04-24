import { registerBearerToken } from '../common/api';
import { signInWithEmailAndPassword } from './actions';
import { ErrorFactory } from '../common/errors';

export enum AuthErr {
  LOGIN_FAILED = 'login-failed',
}
export const errors = {
  [AuthErr.LOGIN_FAILED]: 'Could not login',
};

class AuthProvider {
  public static errorFactory = new ErrorFactory<AuthErr>(
    'auth',
    'Auth',
    errors,
  );

  public token: string | undefined;

  public signInWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    const token = await signInWithEmailAndPassword(email, password);
    this.registerToken(token);
    return token;
  };

  private registerToken = (accessToken: string): void => {
    this.token = accessToken;
    registerBearerToken(accessToken);
  };
}

export { AuthProvider };
