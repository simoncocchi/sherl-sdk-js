import { ILoyaltyResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class LoyaltyApi {
  /**
   * Get list of loyalty.
   *
   * @static
   * @memberof LoyaltyApi
   */
  public static getLoyaltys = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ILoyaltyResponse[]>>(endpoints.GET_LOYALTYS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one loyalty by org id.
   *
   * @static
   * @memberof LoyaltyApi
   */
  public static getLoyalty = (id: string) =>
    fetcher.get<ILoyaltyResponse>(
      StringUtils.bindContext(endpoints.GET_LOYALTY, { id }),
    );
}

export { LoyaltyApi };
