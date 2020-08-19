import { Fetcher } from '../../common/api';
import { ApiLoginResponse } from '../types';
import { endpoints } from './endpoints';
import { AuthErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class AuthApi {
  public static postRequestLoginCredential = (
    username: string,
    password: string,
  ) =>
    fetcher
      .post<ApiLoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
        username,
        password,
      })
      .catch(_err => {
        throw errorFactory.create(AuthErr.LOGIN_FAILED);
      });

  public static getImpersonate = (id: string) =>
  fetcher.get<ApiLoginResponse>(
    StringUtils.bindContext(endpoints.GET_IMPERSONATE, { id }),
  );

  public static getLogout = () =>
  (endpoints.GET_LOGOUT);

}

export { AuthApi };
