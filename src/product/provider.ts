import { getProducts, getProduct } from './actions';
import { ErrorFactory } from '../common/errors';
import { getCategories } from './actions/get-categories.action';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch products API',
  'not-found': 'Product not found',
};

class ProductProvider {
  public static errorFactory = new ErrorFactory<Err>(
    'product',
    'Product',
    errors,
  );

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
}

export { ProductProvider };
