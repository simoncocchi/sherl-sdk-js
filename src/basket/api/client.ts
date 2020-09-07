import {
  IBasketResponse,
  ISetDiscountSponsorshipParameter,
  IClearParameter,
  IBasketAddParameter,
  ITableNumberParameter,
  ICommentParameter,
  IValidateParameter,
} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, BasketErr } from '../errors';

const fetcher = new Fetcher(errorFactory);

class BasketApi { // toute les reponse sont inconue
  /**
   * Get basket.
   *
   * @static
   * @memberof BasketApi
   */
  public static getBasket = (customerUri: string) =>
    fetcher.get<IBasketResponse>(endpoints.GET_BASKET, {
      customerUri,
    });

  public static postSetDisount = (
    parameter: ISetDiscountSponsorshipParameter,
  ) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_SET_DISCOUNT_CODE, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postSetSponsorship = (
    parameter: ISetDiscountSponsorshipParameter,
  ) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_SET_SPONSORSHIP_CODE, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postClearBasket = (parameter: IClearParameter) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_CLEAR_BASKET, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postAddBasket = (parameter: IBasketAddParameter) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_BASKET_ADD, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postTableNumber = (parameter: ITableNumberParameter) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_TABLE_NUMBER, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postComment = (parameter: ICommentParameter) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_COMMENT, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });

  public static postValidateAndPayBasket = (parameter: IValidateParameter) =>
    fetcher
      .post<IBasketResponse>(endpoints.POST_VALIDATE_AND_PAY, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(BasketErr.POST_FAILED);
      });
}

export { BasketApi };
