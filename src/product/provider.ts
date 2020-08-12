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
