// import { } from './actions';
import { getUrlCategories, getUrlCategoriesSlug, getUrlCategoriesOrganizationSlug } from './actions/get-categories.action';

class UrlProductProvider {
  // public list(
  //   page = 1,
  //   itemsPerPage = 10,
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   filters: { [key: string]: any },
  // ) {
  //   return getProducts(page, itemsPerPage, filters);
  // }

  // public one(id: string) {
  //   return getProduct(id);
  // }

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

  public categoriesSlug(slug: string) {
    return getUrlCategoriesSlug(slug);
  }
  public categoriesOrganizationSlug(organizationslug: string) {
    return getUrlCategoriesOrganizationSlug(organizationslug);
  }
}

export { UrlProductProvider };
