import { IPersonMeResponse, ILocation, IConfigResponse} from '../types';
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
    fetcher.get<IPersonMeResponse>(endpoints.GET_ME);
  

  public static getOneBy = (id: string) =>
  fetcher.get<IPersonMeResponse>(
    StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
  );

    /**
   * Get Position with longitude and latitude
   *
   * @static
   * @memberof PersonApi
   */
  public static getPosition = (position: { [key: string]: any }) =>
    fetcher.get<Pagination<ILocation[]>>(
      endpoints.GET_POSITION,
      { ...position },
    );

    /**
   * Get list of person.
   *
   * @static
   * @memberof PersonApi
   */
  public static list = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IPersonMeResponse[]>>(endpoints.GET_PERSONS, {
      page,
      itemsPerPage,
      ...filters,
    });

    public static getConfigs = () =>
    fetcher.get<IConfigResponse[]>(endpoints.GET_CONFIG);

    public static getVirtualMoney = () =>
    fetcher.get<IPersonMeResponse[]>(endpoints.GET_VIRTUAL_MONEY);
}

export { PersonApi };
