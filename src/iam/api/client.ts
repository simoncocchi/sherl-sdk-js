import { IProfileResponse, IRoleResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class IAMApi {
  /**
   * Get list of profiles.
   *
   * @static
   * @memberof IAMApi
   */
  public static getProfiles = (
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IProfileResponse[]>>(endpoints.GET_PROFILES, {
      ...filters,
    });

  /**
   * Get one profile.
   *
   * @static
   * @memberof IAMApi
   */
  public static getProfile = (id: string) =>
    fetcher.get<IProfileResponse>(
      StringUtils.bindContext(endpoints.GET_PROFILE, { id }),
    );

  /**
   * Get one Role.
   *
   * @static
   * @memberof IAMApi
   */
  public static getRole = (id: string) =>
  fetcher.get<IRoleResponse>(
    StringUtils.bindContext(endpoints.GET_ROLE, { id }),
  );

}

export { IAMApi };
