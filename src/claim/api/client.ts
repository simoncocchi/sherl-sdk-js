import { IClaimResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ClaimApi {
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
