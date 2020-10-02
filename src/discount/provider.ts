import {
  getDiscount,
  getDiscountParams,
  ListDiscount,
  ListPublicDiscount,
  postDiscount,
} from './actions';
import { IDiscountParameter } from './types';

class DiscountProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return ListDiscount(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getDiscount(id);
  }

  public oneParams(params: { [key: string]: any }) {
    return getDiscountParams(params);
  }

  public publicList(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return ListPublicDiscount(page, itemsPerPage, filters);
  }

  public postDiscount(parameter: IDiscountParameter) {
    return postDiscount(parameter);
  }
}

export { DiscountProvider };
