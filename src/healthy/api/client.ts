import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class HealthyApi {
  /**
   * Get healthy.
   *
   * @static
   * @memberof HealthyApi
   */
  public static getHealthy = () =>
    fetcher.get(endpoints.GET_HEALTHY);
}

export { HealthyApi };
