import {
  getAnalyticsProduct,
  getAnalyticsAudience,
  getAnalyticsOne,
  getAnalyticsCA,
  getAnalyticsNotification,
} from './actions';

class AnalyticsProvider {
  /**
   * Get analytics CA.
   *
   * @param {key: "values"}
   * @returns
   * @memberof ProductProvider
   */
  public CA(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAnalyticsCA(filters);
  }

  /**
   * Get analytics notification.
   *
   * @param {key: "values"}
   * @returns
   * @memberof AnalyticsProvider
   */
  public notifications(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAnalyticsNotification(filters);
  }

  /**
   * Get analytics One.
   *
   * @param {key: "values"}
   * @returns
   * @memberof AnalyticsProvider
   */
  public one(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAnalyticsOne(filters);
  }

  /**
   *  Get analytics Audience.
   *
   * @param {key: "values"}
   * @returns
   * @memberof AnalyticsProvider
   */
  public audience(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAnalyticsAudience(filters);
  }

  /**
   *  Get analytics products.
   *
   * @param {key: "values"}
   * @returns
   * @memberof AnalyticsProvider
   */
  public products(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAnalyticsProduct(filters);
  }
}

export { AnalyticsProvider };
