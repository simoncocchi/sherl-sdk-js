import { getMe } from './actions';

class MeProvider {
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
   * Get Me.
   *
   * 
   */
  public me() {
    return getMe();
  }
}

export { MeProvider };
