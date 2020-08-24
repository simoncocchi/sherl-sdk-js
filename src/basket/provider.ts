import { getBasket } from './actions';

class BasketProvider {
  /**
   * Get basket.
   *
   * @param {string} customerUri
   * @returns
   * @memberof BasketProvider
   */
  public one(customerUri: string) {
    return getBasket(customerUri);
  }

}

export { BasketProvider };
