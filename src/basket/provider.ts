import {
  getBasket,
  postAddBasket,
  postClearBasket,
  postComment,
  postSetDisount,
  postSetSponsorship,
  postTableNumber,
  postValidateAndPayBasket,
} from './actions';
import {
  ISetDiscountSponsorshipParameter,
  IClearParameter,
  IBasketAddParameter,
  ITableNumberParameter,
  ICommentParameter,
  IValidateParameter,
} from './types';

class BasketProvider {
  public getBasket(customerUri: string) {
    return getBasket(customerUri);
  }

  public postSetDisount(parameter: ISetDiscountSponsorshipParameter) {
    return postSetDisount(parameter);
  }

  public postSetSponsorship(parameter: ISetDiscountSponsorshipParameter) {
    return postSetSponsorship(parameter);
  }

  public postClearBasket(parameter: IClearParameter) {
    return postClearBasket(parameter);
  }

  public postAddBasket(parameter: IBasketAddParameter) {
    return postAddBasket(parameter);
  }

  public postTableNumber(parameter: ITableNumberParameter) {
    return postTableNumber(parameter);
  }

  public postComment(parameter: ICommentParameter) {
    return postComment(parameter);
  }

  public postValidateAndPayBasket(parameter: IValidateParameter) {
    return postValidateAndPayBasket(parameter);
  }
}

export { BasketProvider };
