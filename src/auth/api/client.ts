import { Fetcher, ApiResponseError } from '../../common/api';
import { ApiLoginResponse } from '../types';
import { endpoints } from './endpoints';
import { AuthProvider, AuthErr } from '../provider';

class AuthApi {
  public static postRequestLoginCredential = (
    username: string,
    password: string,
  ) =>
    Fetcher.post<ApiLoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
      username,
      password,
    }).catch((err: ApiResponseError) => {
      if (err.response && err.response.status) {
        throw AuthProvider.errorFactory.create(AuthErr.LOGIN_FAILED);
      }

      throw err;
    });
}

export { AuthApi };
