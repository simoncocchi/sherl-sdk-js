import { registerBearerToken } from '../common/api';
import {
  signInWithEmailAndPassword,
  getLogout,
  getImpersonate,
} from './actions';

class AuthProvider {
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

  public impersonate(id: string) {
    return getImpersonate(id);
  }

  public logout() {
    return getLogout();
  }
}

export { AuthProvider };
