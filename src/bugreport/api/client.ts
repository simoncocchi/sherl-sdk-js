import { IBugReportResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class BugreportApi {
  /**
   * Get list of Bug report with params.
   *
   * @static
   * @memberof BugreportApi
   */
  public static getBugreports = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IBugReportResponse[]>>(endpoints.GET_BUGREPORTS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getBugreport = (id: string) =>
    fetcher.get<IBugReportResponse>(
      StringUtils.bindContext(endpoints.GET_BUGREPORT, { id }),
    );

}

export { BugreportApi };
