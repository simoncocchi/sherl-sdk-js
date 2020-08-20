import { IConfigResponse } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ConfigApi {


  /**
   * Get one product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getConfig = () =>
    fetcher.get<IConfigResponse>(endpoints.GET_CONFIG);

}

export { ConfigApi };
