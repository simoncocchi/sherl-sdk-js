import { IPersonMeResponse} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  /**
   * Get Me.
   *
   * @static
   * @memberof MeApi
   */
  public static getMe = () =>
    fetcher.get<IPersonMeResponse>(endpoints.GET_ME);
}

export { PersonApi };
