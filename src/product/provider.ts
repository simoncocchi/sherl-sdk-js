import {
  getProduct,
  getProducts,
  getPublicProducts,
  getCategoriesById,
} from './actions';
import { getCategories } from './actions/get-categories.action';
import {
  getPublicCategories,
  getPublicCategoriesSlug,
  getPublicCategoriesAndSub,
} from './actions/get-public-categories.action';

class ProductProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProducts(page, itemsPerPage, filters);
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
}

export { ProductProvider };
