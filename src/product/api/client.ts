import { IProductResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { ProductProvider } from '../provider';
import { getErrorCodeByHttpStatus } from '../../common/errors';

class ProductApi {
  /**
   * Get list of products.
   *
   * @static
   * @memberof ProductApi
   */
  public static getProducts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    Fetcher.get<Pagination<IProductResponse[]>>(endpoints.GET_PRODUCTS, {
      params: {
        page,
        itemsPerPage,
        ...filters,
      },
    }).catch(err => {
      if (err.response && err.response.status) {
        throw ProductProvider.errorFactory.create(
          getErrorCodeByHttpStatus(err.response.status),
        );
      }

      throw err;
    });

  /**
   * Get one product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getProduct = (id: string) =>
    Fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    ).catch(err => {
      if (err.response && err.response.status) {
        throw ProductProvider.errorFactory.create(
          getErrorCodeByHttpStatus(err.response.status),
        );
      }

      throw err;
    });
}

export { ProductApi };
