import { IMeResponse} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class MeApi {
  /**
   * Get Me.
   *
   * @static
   * @memberof MeApi
   */
  public static getMe = () =>
    fetcher.get<IMeResponse[]>(endpoints.GET_ME);
}

export { MeApi };
