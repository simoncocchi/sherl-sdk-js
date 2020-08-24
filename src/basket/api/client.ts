import { IBasketResponse } from '../types';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class BasketApi {
  /**
   * Get basket.
   *
   * @static
   * @memberof BasketApi
   */
  public static getBasket = (customerUri: string) =>
    fetcher.get<IBasketResponse>(
      StringUtils.bindContext(endpoints.GET_BASKETS, { customerUri }),
    );
}

export { BasketApi };
