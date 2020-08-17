import { getCommunication } from './actions';

class CommunicationProvider {
  /**
   * Get categories.
   *
   * @param {number} page
   * @param {number} itemsPerPage
   * @param {object} {key: "values"}
   * @returns
   * @memberof ProductProvider
   */
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getCommunication(page, itemsPerPage, filters);
  }
}

export { CommunicationProvider };
