import {
  IUrlCategoryWithSubResponse,
  IUrlSubCategoryResponse,
  IUrlCategoryResponse,
  IUrlProductResponse,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class UrlProductApi {
  /**
   * Get url categories.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesAndSub = () =>
    fetcher.get<IUrlCategoryWithSubResponse[]>(
      endpoints.GET_URL_CATEGORIES_AND_SUB,
    );
  /**
   * Get url catégories with slug.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesSlug = (slug: { [key: string]: any}) =>
    fetcher.get<Pagination<IUrlSubCategoryResponse[]>>(endpoints.GET_URL_CATEGORIES_SLUG, {slug },
    );
  /**
   * Get url catégories with organization slug.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesOrganizationSlug = (organizationSlug: { [key: string]: any}) =>
    fetcher.get<Pagination<IUrlCategoryResponse[]>>(endpoints.GET_URL_CATEGORIES, { ...organizationSlug},
    );

  /**
   * Get url find one product .
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlProduct = (id: string) =>
    fetcher.get<IUrlProductResponse>(
      StringUtils.bindContext(endpoints.GET_URL_PRODUCT, { id }),
    );

  /**
   * Get url find one product by slug.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlProductBySlug = (slug: string) =>
    fetcher.get<IUrlProductResponse>(
      StringUtils.bindContext(endpoints.GET_URL_PRODUCT_SLUG, { slug }),
    );

  /**
   * Get url list of products.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlProducts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IUrlProductResponse[]>>(endpoints.GET_URL_PRODUCTS, {
      page,
      itemsPerPage,
      ...filters,
    });
}

export { UrlProductApi };
