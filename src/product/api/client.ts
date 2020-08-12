import { IProductResponse, ICategoryResponse, IPublicProductResponse, IPublicCategoryResponse} from '../types';
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

  ///******************************************************************** */ PUBLIC ********************************************************************\\
  /**
   * Get public list of products.
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicProducts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IPublicProductResponse[]>>(
      endpoints.GET_PUBLIC_PRODUCTS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  /**
   * Get Public product by id .
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicProduct = (id: string) =>
    fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT, { id }),
    );

  /**
   * Get public product by slug
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicProductBySlug = (slug: string) =>
    fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT_SLUG, { slug }),
    );

  /**
   * Get public catégories or with organization slug.
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicCategories = () =>
    fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES,
    );

  /**
   * Get public catégories ou avec slug.
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicCategoriesSlug = (slug: { [key: string]: any }) =>
    fetcher.get<Pagination<IPublicCategoryResponse>>(
      endpoints.GET_PUBLIC_CATEGORIES_SLUG,
      { slug },
    );

  /**
   * Get public categories and sub.
   *
   * @static
   * @memberof ProductApi
   */
  public static getPublicCategoriesAndSub = () =>
    fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES_AND_SUB,
    );
}

export { ProductApi };
