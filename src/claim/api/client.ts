import {
  IClaimResponse,
  IClaimParameter,
  IClaimReplyParameter,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, ClaimErr } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ClaimApi {
  public static postClaimRefund = (id: string) =>
    fetcher
      .post<IClaimResponse>( // reponse ????
        StringUtils.bindContext(endpoints.POST_CLAIM_REFUND, { id }),
      )
      .catch(_err => {
        throw errorFactory.create(ClaimErr.POST_CLAIM_REFUND_FAILED);
      });

  public static postClaim = (id: string, parameter: IClaimParameter) =>
    fetcher
      .post<IClaimResponse>( // reponse ????
        StringUtils.bindContext(endpoints.POST_CLAIM, { id }),
        (endpoints.POST_CLAIM, { ...parameter }),
      )
      .catch(_err => {
        throw errorFactory.create(ClaimErr.POST_CLAIM_REFUND_FAILED);
      });

  public static postClaimReply = (id: string, parameter: IClaimReplyParameter) =>
    fetcher
      .post<IClaimResponse>( // reponse ????
        StringUtils.bindContext(endpoints.POST_CLAIM, { id }),
        (endpoints.POST_CLAIM, { ...parameter }),
      )
      .catch(_err => {
        throw errorFactory.create(ClaimErr.POST_CLAIM_REFUND_FAILED);
      });

  /**
   * Get list of claims
   *
   * @static
   * @memberof ClaimApi
   */
  public static getClaims = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IClaimResponse[]>>(endpoints.GET_CLAIMS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one claims.
   *
   * @static
   * @memberof ClaimApi
   */
  public static getClaim = (id: string) =>
    fetcher.get<IClaimResponse>(
      StringUtils.bindContext(endpoints.GET_CLAIM, { id }),
    );
}

export { ClaimApi };
