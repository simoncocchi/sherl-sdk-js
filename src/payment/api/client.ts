import { IPaymentResponse } from '../types';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class PaymentApi {
  /**
   * Validate payment card for mangopay.
   *
   * @static
   * @memberof PaymentApi
   */
  public static getPaymentValidate = (id: string) =>
    fetcher.get<IPaymentResponse>(
      StringUtils.bindContext(endpoints.GET_PAYMENT_VALIDATE, { id }),
    );

  /**
   * Secure payment for 3DS.
   *
   * @static
   * @memberof PaymentApi
   */
  public static getPaymentSecure = (id: string) =>
    fetcher.get<IPaymentResponse>(           //surement pas la bonne interface mais aucune réponse trouvé
      StringUtils.bindContext(endpoints.GET_PAYMENT_SECURE, { id }),
    );
}

export { PaymentApi };
