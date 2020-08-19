import {
  getProducts,
  getProduct,
  getPublicProduct,
  getPublicProductBySlug,
  getPublicCategoriesAndSub,
  getPublicCategoriesSlug,
  getPublicProducts,
  getPublicCategories,
  getCategories,
  getCategoriesById,
  getProductsComment,
  getProductsLike,
  getProductsViews,
} from './actions';

class ProductProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProducts(page, itemsPerPage, filters);
  }

  public commentList(
    id: string,
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProductsComment(id, page, itemsPerPage, filters);
  }

  public likeList(
    id: string,
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProductsLike(id, page, itemsPerPage, filters);
  }

  public viewList(
    id: string,
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProductsViews(id, page, itemsPerPage, filters);
  }

  /**
   * Get list of products from public endpoint.
   *
   * @param {number} [page=1]
   * @param {number} [itemsPerPage=10]
   * @param {{ [key: string]: any }} filters
   * @returns
   * @memberof ProductProvider
   */
  public publicList(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getPublicProducts(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getProduct(id);
  }

  /**
   * Get categories.
   *
   * @param {string} organizationId
   * @returns
   * @memberof ProductProvider
   */
  public categories(organizationId: string) {
    return getCategories(organizationId);
  }

  /**
   * Get categories by parent ID.
   *
   * @param {string} categoryId
   * @returns
   * @memberof ProductProvider
   */
  public categoriesById(categoryId: string) {
    return getCategoriesById(categoryId);
  }

  //********************************************************************************* PUBLIC **********************************************************************************/

  /**
   * Get categories.
   *
   *
   * @returns
   * @memberof ProductProvider
   */
  public PublicCategoriesAndSub() {
    return getPublicCategoriesAndSub();
  }

  public PublicCategoriesSlug(slug: { [key: string]: any }) {
    return getPublicCategoriesSlug(slug);
  }

  public PublicCategories() {
    return getPublicCategories();
  }

  public PublicProductById(id: string) {
    return getPublicProduct(id);
  }

  public PublicProductBySlug(slug: string) {
    return getPublicProductBySlug(slug);
  }

  public publicproductlist(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getPublicProducts(page, itemsPerPage, filters);
  }
}

export { ProductProvider };
