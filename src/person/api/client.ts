import {
  IPersonMeResponse,
  ILocation,
  IConfigResponse,
  IAdminParameter,
  IPersonParameter,
  IAddressParameter,
  IVersionParameter,
  IRegisterEmailPasswordParameter,
} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, PersonErr } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { Pagination } from '../../common/api';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  public static postRequestPersonAddress = (parameter: IAddressParameter) =>
    fetcher
      .post<IPersonMeResponse>(endpoints.POST_ADDRESS, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ADDRESS_FAILED);
      });

  public static postCreatePerson = (parameter: IPersonParameter) =>
    fetcher // Reponse ???
      .post(endpoints.POST_CREATE_PERSON, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_CREATE_PERSON_FAILED);
      });

  public static postCreateAdmin = (parameter: IAdminParameter) =>
    fetcher // Reponse ???
      .post<IPersonMeResponse>(endpoints.POST_CREATE_ADMIN, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_CREATE_ADMIN_FAILED);
      });

  public static postRegisterEmailPassword = (
    parameter: IRegisterEmailPasswordParameter,
  ) =>
    fetcher // Reponse ???
      .post<IPersonMeResponse>(endpoints.POST_REGISTER_EMAIL_PASSWORD, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(
          PersonErr.POST_REGISTER_EMAIL_PASSWORD_FAILED,
        );
      });

  public static postRefreshIam = () =>
    fetcher
      .post<IPersonMeResponse>(endpoints.POST_REFRESH_IAM, {})
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_REFRESH_IAM_FAILED);
      });

  public static postPicture = (idPerson: string, idMedia: string) =>
    fetcher
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_PICTURE, {
          idPerson,
          idMedia,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_PICTURE_FAILED);
      });

  public static postFavoriteOrganization = (
    idPerson: string,
    idOrganization: string,
  ) =>
    fetcher
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_FAVORITE_ORG, {
          idPerson,
          idOrganization,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_FAVORITE_FAILED);
      });

  public static postRefreshIamOne = (id: string) =>
    fetcher // reponse ???
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_REFRESH_IAM_TO_ONE, { id }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_REFRESH_IAM_FAILED);
      });

  public static postEnable = (id: string) =>
    fetcher // reponse ???
      .post(StringUtils.bindContext(endpoints.POST_ENABLE, { id }))
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postDisabled = (id: string) =>
    fetcher // reponse ???
      .post(StringUtils.bindContext(endpoints.POST_DISABLED, { id }))
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postLegalNotice = (id: string, parameter: IVersionParameter) =>
    fetcher // reponse ???
      .post(
        StringUtils.bindContext(endpoints.POST_LEGAL_NOTICE, { id }),
        (endpoints.POST_LEGAL_NOTICE, { ...parameter }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postPrivacyPolice = (
    id: string,
    parameter: IVersionParameter,
  ) =>
    fetcher // reponse ???
      .post(
        StringUtils.bindContext(endpoints.POST_PRIVACY_POLICY, { id }),
        (endpoints.POST_LEGAL_NOTICE, { ...parameter }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postAddBlackList = (id: string) =>
    fetcher // reponse ???
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_ADD_BLACK_LIST, { id }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
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
