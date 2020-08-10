import { IProductResponse, ICategoryResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

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
    fetcher.get<Pagination<IProductResponse[]>>(endpoints.GET_PRODUCTS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get list of products from public endpoint.
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicProducts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IProductResponse[]>>(endpoints.GET_PUBLIC_PRODUCTS, {
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
  public static getProduct = (id: string) =>
    fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    );

  /**
   * Get categories.
   *
   * @static
   * @memberof ProductApi
   */
  public static getCategories = (organizationId: string) =>
    fetcher.get<ICategoryResponse[]>(endpoints.CATEGORIES_ALL, {
      organizationId,
    });

  /**
   * Get categories by parent ID.
   *
   * @static
   * @memberof ProductApi
   */
  public static getCategoriesById = (categoryId: string) =>
    fetcher.get<ICategoryResponse[]>(
      StringUtils.bindContext(endpoints.GET_CATEGORY, { id: categoryId }),
    );
}

export { ProductApi };
