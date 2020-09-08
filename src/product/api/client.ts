import {
  IProductResponse,
  ICategoryResponse,
  IPublicProductResponse,
  IPublicCategoryResponse,
  ICommentResponse,
  ILikeResponse,
  IViewResponse,
  IAddOptionParameter,
  ICalculatePriceParameter,
  ICommentProductParameter,
  ICreateCategoriesParameter,
  ICreateProductParameter,
  ICreateSubCategoriesParameter,
  ICalculatePriceResponse,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, ProductErr } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ProductApi {
  public static postProductCalculatePrice = (
    parameter: ICalculatePriceParameter,
  ) =>
    fetcher
      .post<ICalculatePriceResponse>(endpoints.POST_PRODUCT_CALCULATE_PRICE, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postCreateProduct = (parameter: ICreateProductParameter) =>
    fetcher
      .post<IPublicProductResponse>(endpoints.POST_PRODUCT_CREATE, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postProductEnable = (id: string) =>
    fetcher
      .post<IPublicProductResponse>(
        StringUtils.bindContext(endpoints.POST_PRODUCT_ENABLE, {
          id,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postProductDisable = (id: string) =>
    fetcher
      .post<IPublicProductResponse>(
        StringUtils.bindContext(endpoints.POST_PRODUCT_DISABLE, {
          id,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postProductIndex = () =>
    fetcher.post(endpoints.POST_PRODUCT_INDEX, {}).catch(_err => {
      throw errorFactory.create(ProductErr.POST_FAILED);
    });

  public static postProductView = (id: string) =>
    fetcher
      .post<IPublicProductResponse>( // reponse inconue
        StringUtils.bindContext(endpoints.POST_PRODUCT_VIEW, {
          id,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postProductLike = (id: string) =>
    fetcher
      .post<IPublicProductResponse>( // reponse inconue
        StringUtils.bindContext(endpoints.POST_PRODUCT_LIKE, {
          id,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postCreateCategory = (parameter: ICreateCategoriesParameter) =>
    fetcher
      .post<IPublicCategoryResponse>(endpoints.POST_PRODUCT_CREATE_CATEGORY, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postCreateSubCategory = (
    id: string,
    parameter: ICreateSubCategoriesParameter,
  ) =>
    fetcher
      .post<IPublicCategoryResponse>(
        StringUtils.bindContext(endpoints.POST_PRODUCT_LIKE, {
          id,
        }),
        (endpoints.POST_PRODUCT_CREATE_SUBCATEGORY,
        {
          ...parameter,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

  public static postAddProductOption = (
    id: string,
    parameter: ICreateSubCategoriesParameter,
  ) =>
    fetcher
      .post<IPublicCategoryResponse>(
        StringUtils.bindContext(endpoints.POST_PRODUCT_LIKE, {
          id,
        }),
        (endpoints.POST_PRODUCT_CREATE_SUBCATEGORY,
        {
          ...parameter,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(ProductErr.POST_FAILED);
      });

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
   * Get list comment of a product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getProductsComment = (
    id: string,
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICommentResponse[]>>(
      StringUtils.bindContext(endpoints.GET_COMMENT_PRODUCT, { id }),
      (endpoints.GET_COMMENT_PRODUCT,
      {
        page,
        itemsPerPage,
        ...filters,
      }),
    );

  /**
   * Get list of like product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getProductsLike = (
    id: string,
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ILikeResponse[]>>(
      StringUtils.bindContext(endpoints.GET_LIKE_PRODUCT, { id }),
      (endpoints.GET_LIKE_PRODUCT,
      {
        page,
        itemsPerPage,
        ...filters,
      }),
    );

  /**
   * Get list of view product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getProductsViews = (
    id: string,
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IViewResponse[]>>(
      StringUtils.bindContext(endpoints.GET_VIEW_PRODUCT, { id }),
      (endpoints.GET_VIEW_PRODUCT,
      {
        id,
        page,
        itemsPerPage,
        ...filters,
      }),
    );

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

  ///******************************************************************** */ PUBLIC ********************************************************************\\
  /**

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
    fetcher.get<IPublicCategoryResponse[]>(endpoints.GET_PUBLIC_CATEGORIES);

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
