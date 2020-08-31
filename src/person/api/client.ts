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

  public static postCreatePerson = (
    id: string,
    firstName: string,
    lastName: string,
    address: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      uri: string;
      createdAt: Date;
      department: string;
      complementaryStreetAddress: string;
      name: string;
      originId: string;
      latitude: 0;
      longitude: 0;
    },
    phoneNumber: string,
    mobilePhoneNumber: string,
    faxNumber: string,
    nationality: string,
    affiliation: {
      id: string;
      uri: string;
      legalName: string;
      location: {
        id: string;
        country: string;
        locality: string;
        region: string;
        postalCode: string;
        streetAddress: string;
        uri: string;
        createdAt: Date;
        department: string;
        complementaryStreetAddress: string;
        name: string;
        originId: string;
        latitude: number;
        longitude: number;
      };
      subOrganizations: [string];
    },
    birthDate: Date,
    email: string,
    gender: string,
    jobTitle: string,
  ) =>
    fetcher // Reponse ???
      .post<IPersonMeResponse>(endpoints.POST_CREATE_PERSON, {
        id,
        firstName,
        lastName,
        address,
        phoneNumber,
        mobilePhoneNumber,
        faxNumber,
        nationality,
        affiliation,
        birthDate,
        email,
        gender,
        jobTitle,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_CREATE_PERSON_FAILED);
      });

  public static postCreateAdmin = (
    id: string,
    firstName: string,
    lastName: string,
    email: string,
  ) =>
    fetcher // Reponse ???
      .post<IPersonMeResponse>(endpoints.POST_CREATE_ADMIN, {
        id,
        firstName,
        lastName,
        email,
      })
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_CREATE_ADMIN_FAILED);
      });

  public static postRegisterEmailPassword = (
    id: string,
    firstName: string,
    lastName: string,
    address: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      uri: string;
      createdAt: Date;
      department: string;
      complementaryStreetAddress: string;
      name: string;
      originId: string;
      latitude: number;
      longitude: number;
    },
    phoneNumber: string,
    birthDate: Date,
    email: string,
    password: string,
    confirmPassword: string,
  ) =>
    fetcher // Reponse ???
      .post<IPersonMeResponse>(endpoints.POST_REGISTER_EMAIL_PASSWORD, {
        id,
        firstName,
        lastName,
        address,
        phoneNumber,
        birthDate,
        email,
        password,
        confirmPassword,
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
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_ENABLE, { id }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postDisabled = (id: string) =>
    fetcher // reponse ???
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_DISABLED, { id }),
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postLegalNotice = (id: string, version: string) =>
    fetcher // reponse ???
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_LEGAL_NOTICE, { id }),(endpoints.POST_LEGAL_NOTICE, { version })
      )
      .catch(_err => {
        throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
      });

  public static postPrivacyPolice = (id: string, version: string) =>
    fetcher // reponse ???
      .post<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.POST_PRIVACY_POLICY, { id }), (endpoints.POST_LEGAL_NOTICE, { version })
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
