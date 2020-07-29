// import { } from './actions';
import {
  getUrlCategories,
  getUrlCategoriesSlug,
  getUrlCategoriesOrganizationSlug,
} from './actions/get-url-categories.action';
import { getUrlProduct, getUrlProductBySlug, getUrlProducts } from './actions';

class UrlProductProvider {
  /**
   * Get categories.
   *
   *
   * @returns
   * @memberof UrlProductProvider
   */
  public categoriesAndSub() {
    return getUrlCategories();
  }

  public categoriesSlug(slug: { [key: string]: any }) {
    return getUrlCategoriesSlug(slug);
  }

  public categoriesOrganizationSlug(organizationSlug: { [key: string]: any }) {
    return getUrlCategoriesOrganizationSlug(organizationSlug);
  }

  public UrlProductById(id: string) {
    return getUrlProduct(id);
  }

  public UrlProductBySlug(slug: string) {
    return getUrlProductBySlug(slug);
  }

  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getUrlProducts(page, itemsPerPage, filters);
  }
}

export { UrlProductProvider };
