import { ISubscriptionResponse } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class SubscriptionApi {
  /**
   * Get one subscription with params.
   *
   * @static
   * @memberof SubscriptionApi
   */
  public static getSubscription = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<ISubscriptionResponse>(endpoints.GET_SUBSCRIPTION, {
      ...filters,
    });

}

export { SubscriptionApi };
