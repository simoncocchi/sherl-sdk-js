import {
  getClaims,
  getClaim,
  postClaim,
  postClaimRefund,
  postClaimReply,
} from './actions';
import { IClaimParameter, IClaimReplyParameter } from './types';

class ClaimProvider {
  public postClaimRefund(id: string) {
    return postClaimRefund(id);
  }

  public postClaim(id: string, parameter: IClaimParameter) {
    return postClaim(id, parameter);
  }

  public postClaimReply(id: string, parameter: IClaimReplyParameter) {
    return postClaimReply(id, parameter);
  }

  public getClaims(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getClaims(page, itemsPerPage, filters);
  }

  public getClaim(id: string) {
    return getClaim(id);
  }
}

export { ClaimProvider };
