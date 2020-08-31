import { IPersonMeResponse, ILocation, IConfigResponse } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, PersonErr } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { Pagination } from '../../common/api';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  public static postRequestPersonAddress = (
    complementaryStreetAddress: string,
    country: string,
    createdAt: string,
    department: string,
    id: string,
    latitude: number,
    locality: string,
    longitude: number,
    name: string,
    originId: string,
    postalCode: string,
    region: string,
    streetAddress: string,
    type: string,
    uri: string,
  ) =>
    fetcher
      .post<IPersonMeResponse>(endpoints.POST_ADDRESS, {
        complementaryStreetAddress,
        country,
        createdAt,
        department,
        id,
        latitude,
        locality,
        longitude,
        name,
        originId,
        postalCode,
        region,
        streetAddress,
        type,
        uri,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ADDRESS_FAILED);
      });

  public static postFavoriteOrganization = (idOrganization: string) =>
    fetcher
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_FAVORITE_ORG, {
          idOrganization,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_FAVORITE_FAILED);
      });

  /**
   * Get Me.
   *
   * @static
   * @memberof PersonApi
   */
  public static getMe = () => fetcher.get<IPersonMeResponse>(endpoints.GET_ME);

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
    fetcher.get<Pagination<ILocation[]>>(endpoints.GET_POSITION, {
      ...position,
    });

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
