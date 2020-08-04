import { IOrganizationResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class OrganizationApi {
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

  // ///******************************************************************** */ PUBLIC ********************************************************************\\
  // /**
  //  * Get public list of products.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicProducts = (
  //   page = 1,
  //   itemsPerPage = 10,
  //   filters: { [key: string]: any },
  // ) =>
  //   fetcher.get<Pagination<IPublicProductResponse[]>>(endpoints.GET_PUBLIC_PRODUCTS, {
  //     page,
  //     itemsPerPage,
  //     ...filters,
  //   });

  // /**
  //  * Get Public product by id .
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicProduct = (id: string) =>
  //   fetcher.get<IPublicProductResponse>(
  //     StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT, { id }),
  //   );

  // /**
  //  * Get public product by slug
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicProductBySlug = (slug: string) =>
  //   fetcher.get<IPublicProductResponse>(
  //     StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT_SLUG, { slug }),
  //   );

  // /**
  //  * Get public catégories or with organization slug.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicCategories = () =>
  // fetcher.get<IPublicCategoryWithSubResponse[]>(
  //   endpoints.GET_PUBLIC_CATEGORIES,
  // );

  // /**
  //  * Get public catégories ou avec slug.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicCategoriesSlug = (slug: { [key: string]: any }) =>
  //   fetcher.get<Pagination<IPublicSubCategoryResponse[]>>(
  //     endpoints.GET_PUBLIC_CATEGORIES_SLUG,
  //     { slug },
  //   );

  // /**
  //  * Get public categories and sub.
  //  *
  //  * @static
  //  * @memberof ProductApi
  //  */
  // public static getPublicCategoriesAndSub = () =>
  //   fetcher.get<IPublicCategoryWithSubResponse[]>(
  //     endpoints.GET_PUBLIC_CATEGORIES_AND_SUB,
  //   );

  /**
   * Get one Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganization = (id: string) =>
  fetcher.get<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.GET_ORGANIZATION, { id }),
  );

  /**
   * Get list of Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganizations = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrganizationResponse[]>>(endpoints.GET_ORGANIZATIONS, {
      page,
      itemsPerPage,
      ...filters,
    });

    public static getPublicOrganizations = (
      page = 1,
      itemsPerPage = 10,
      filters: { [key: string]: any },
    ) =>
      fetcher.get<Pagination<IOrganizationResponse[]>>(endpoints.GET_PUBLIC_ORGANIZATIONS, {
        page,
        itemsPerPage,
        ...filters,
      });

  /**
   * Get one public Organization by id.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganization = (id: string) =>
  fetcher.get<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, { id }),
  );

  /**
   * Get one public Organization by slug.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganizationBySlug = (slug: string) =>
  fetcher.get<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_SLUG, { slug }),
  );
}

export { OrganizationApi };
