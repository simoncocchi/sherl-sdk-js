import { getPaymentSecure, getPaymentValidate } from './actions';

class PaymentProvider {
  /**
   * Validate payment card for mangopay.
   *
   * @param {string} id
   * @returns
   * @memberof PaymentProvider
   */
  public secure(id: string) {
    return getPaymentSecure(id);
  }

  /**
   * Secure payment for 3DS.
   *
   * @param {string} id
   * @returns
   * @memberof PaymentProvider
   */
  public validate(id: string) {
    return getPaymentValidate(id);
  }
}

export { PaymentProvider };
