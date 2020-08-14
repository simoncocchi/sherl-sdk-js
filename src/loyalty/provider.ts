import { getLoyalty, getLoyaltys } from './actions';

class LoyaltyProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getLoyaltys(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getLoyalty(id);
  }
}

export { LoyaltyProvider };
