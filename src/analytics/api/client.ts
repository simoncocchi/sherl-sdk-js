import { ICAResponse, INotificationsResponse, IAudienceResponse, IOneResponse, IAnalyticsProductResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class AnalyticsApi {
  /**
   * Get analytics of CA with params.
   *
   * @static
   * @memberof AnalyticsApi
   */
  public static getAnalyticsCA = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<ICAResponse[]>(endpoints.GET_ANALYTICS_CA, {
      ...filters,
    });

  /**
   * Get analytics Notifications with params.
   *
   * @static
   * @memberof AnalyticsApi
   */
  public static getAnalyticsNotification = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<INotificationsResponse>(endpoints.GET_ANALYTICS_NOTIFICATIONS, {
      ...filters,
    });

  /**
   * Get analytics find one with params.
   *
   * @static
   * @memberof AnalyticsApi
   */
  public static getAnalyticsOne = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IOneResponse>(endpoints.GET_ANALYTICS_ONE, {
      ...filters,
    });

      /**
   * Get analytics Audience with params.
   *
   * @static
   * @memberof AnalyticsApi
   */
  public static getAnalyticsAudience = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IAudienceResponse[]>(endpoints.GET_ANALYTICS_AUDIENCE, {
      ...filters,
    });

          /**
   * Get analytics Products with params.
   *
   * @static
   * @memberof AnalyticsApi
   */
  public static getAnalyticsProduct = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IAnalyticsProductResponse[]>(endpoints.GET_ANALYTICS_PRODUCT, {
      ...filters,
    });
}

export { AnalyticsApi };
