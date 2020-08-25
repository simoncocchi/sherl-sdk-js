import { Fetcher } from '../../common/api';
import { IApiLoginResponse, IAuthCallbackResponse } from '../types';
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
      .post<IApiLoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
        username,
        password,
      })
      .catch(_err => {
        throw errorFactory.create(AuthErr.LOGIN_FAILED);
      });

  public static getImpersonate = (id: string) =>
    fetcher.get<IApiLoginResponse>(
      StringUtils.bindContext(endpoints.GET_IMPERSONATE, { id }),
    );

  public static getLogout = () => endpoints.GET_LOGOUT;

  public static getGoogle = () => fetcher.get(endpoints.GET_GOOGLE); // pas d'interface ????

  public static getFacebook = () => fetcher.get(endpoints.GET_FACEBOOK); // pas d'interface ????

  public static getGoogleCallback = () =>
    fetcher.get<IAuthCallbackResponse>(endpoints.GET_GOOGLE_CALLBACK);

  public static getFacebookCallback = () =>
    fetcher.get<IAuthCallbackResponse>(endpoints.GET_FACEBOOK_CALLBACK);
}

export { AuthApi };
