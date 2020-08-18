import { getClaims, getClaim } from './actions';

class ClaimProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getClaims(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getClaim(id);
  }
}

export { ClaimProvider };
