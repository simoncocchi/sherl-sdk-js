import { IMeResponse} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  /**
   * Get Me.
   *
   * @static
   * @memberof MeApi
   */
  public static getMe = () =>
    fetcher.get<IMeResponse[]>(endpoints.GET_ME);
  

  public static getOneBy = (id: string) =>
  fetcher.get<IMeResponse>(
    StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
  );
}

export { PersonApi };
