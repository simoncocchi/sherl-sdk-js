import { IMeResponse, IPosiionResponse} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { Pagination } from '../../common/api';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  /**
   * Get Me.
   *
   * @static
   * @memberof PersonApi
   */
  public static getMe = () =>
    fetcher.get<IMeResponse[]>(endpoints.GET_ME);
  

  public static getOneBy = (id: string) =>
  fetcher.get<IMeResponse>(
    StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
  );

    /**
   * Get Position with longitude and latitude
   *
   * @static
   * @memberof PersonApi
   */
  public static getPosition = (position: { [key: string]: any }) =>
    fetcher.get<Pagination<IPosiionResponse[]>>(
      endpoints.GET_POSITION,
      { ...position },
    );
}

export { PersonApi };
