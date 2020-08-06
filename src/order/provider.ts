import { getOrder, getOrders, getOrganizationOrders } from './actions';

class OrderProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getOrders(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getOrder(id);
  }

  /**
   * Get categories.
   *
   * @param {string} organizationId
   * @returns
   * @memberof ProductProvider
   */
  public organizationOrders(organizationId: string) {
    return getOrganizationOrders(organizationId);
  }
}

export { OrderProvider };
