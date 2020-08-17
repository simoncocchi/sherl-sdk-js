import { IOpinionResonse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class OpinionApi {
  /**
   * Get list of opinion i give.
   *
   * @static
   * @memberof OpinionApi
   */
  public static getIGive = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOpinionResonse[]>>(endpoints.GET_I_GIVE, {
      page,
      itemsPerPage,
      ...filters,
    });

   /**
   * find opinion with params.
   *
   * @static
   * @memberof OpinionApi
   */
  public static getBy = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IOpinionResonse>(endpoints.GET_FIND_BY, {
      ...filters,
    });

  /**
   * get average opinion
   *
   * @static
   * @memberof OpinionApi
   */
  public static getAverage = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IOpinionResonse>(endpoints.GET_AVERAGE, {
      ...filters,
    });
}

export { OpinionApi };
