import { IUrlCategoryWithSubResponse, IUrlSubCategoryResponse, IUrlCategoryResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class UrlProductApi {
  // /**
  //  * Get list of products.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getProducts = (
  //   page = 1,
  //   itemsPerPage = 10,
  //   filters: { [key: string]: any },
  // ) =>
  //   fetcher.get<Pagination<IProductResponse[]>>(endpoints.GET_PRODUCTS, {
  //     page,
  //     itemsPerPage,
  //     ...filters,
  //   });

  // /**
  //  * Get one product.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getProduct = (id: string) =>
  //   fetcher.get<IProductResponse>(
  //     StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
  //   );

  // /**
  //  * Get categories.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getCategories = (organizationId: string) =>
  //   fetcher.get<ICategoryResponse[]>(endpoints.CATEGORIES_ALL, {
  //     organizationId,
  //   });
  /**
   * Get url categories.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesAndSub = () =>
    fetcher.get<IUrlCategoryWithSubResponse[]>(endpoints.GET_URL_CATEGORIES_AND_SUB);
  /**
   * Get url catégories with slug.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesSlug = (slug: string) =>
    fetcher.get<IUrlSubCategoryResponse>(
      StringUtils.bindContext(endpoints.GET_URL_CATEGORIES_SLUG, { slug }),
    );

  /**
   * Get url catégories with organization slug.
   *
   * @static
   * @memberof UrlProductApi
   */
  public static getUrlCategoriesOrganizationSlug = (organizationslug: string) =>
    fetcher.get<IUrlCategoryResponse>(
      StringUtils.bindContext(endpoints.GET_URL_CATEGORIES, { organizationslug }),
    );


}

export { UrlProductApi };
