import axios, { AxiosResponse, AxiosError } from 'axios';
import { getGlobalObject } from './store';
import { ErrorFactory, CommonErr } from './errors';

class Fetcher {
  public static async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return axios.get<T>(url, { params });
  }

  public static async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return axios.post<T>(url, data);
  }
}

export { Fetcher };

const errorFactory = new ErrorFactory('api', 'API');

/**
 * Axios configuration
 */
export const initializeApi = (apiUrl?: string): void => {
  axios.defaults.baseURL = apiUrl || 'https://api.winzana.space';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
  axios.defaults.headers.get.Authorization = 'Bearer';
  axios.defaults.headers.put.Authorization = 'Bearer';

  axios.interceptors.request.use(
    config => {
      const globalObject = getGlobalObject();

      if (
        typeof globalObject.SHERL_API_KEY === 'undefined' ||
        typeof globalObject.SHERL_API_SECRET === 'undefined'
      ) {
        throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
      }

      config.headers.common['X-WZ-API-KEY'] = globalObject.SHERL_API_KEY;
      config.headers.common['X-WZ-API-SECRET'] = globalObject.SHERL_API_SECRET;
      return config;
    },
    error => Promise.reject(error),
  );
};

export const registerBearerToken = (token: string): void => {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    error => Promise.reject(error),
  );
};

export type ApiResponse<T> = AxiosResponse<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponseError<T = any> = AxiosError<T>;

export interface Pagination<Data> {
  results: Data;
  view: View;
}

export interface View {
  total: number;
  page: number;
  itemsPerPage: number;
}
