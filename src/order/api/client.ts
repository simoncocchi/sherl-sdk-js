import { IOrderResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class OrderApi {
  /**
   * Get list of products.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrders = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrderResponse[]>>(endpoints.GET_CUSTOMER_ORDERS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one order.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrder = (id: string) =>
    fetcher.get<IOrderResponse>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );

 /**
   * Get organization order.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrganizationOrders = (id: string) =>
    fetcher.get<IOrderResponse[]>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );
}

export { OrderApi };
