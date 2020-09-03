import {
  IOrganizationResponse,
  IBackgroundParams,
  IAddressParams,
  IOrganizationParams,
  IOrganizationRegisterParams,
  IKycParams,
  IRibParams,
  IEmployeeParams,
  IFounderParams,
  IOpeningHoursParams,
  IPictureParams,
  ICommunicationParams,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, OrganizationErr } from '../errors';

const fetcher = new Fetcher(errorFactory);

class OrganizationApi {
  public static postBackgroundImageFromMedia = (
    id: string,
    idMedia: string,
    params: IBackgroundParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_BACKGROUND_IMAGE_FROM_MEDIA, {
          id,
          idMedia,
        }),
        {
          ...params,
        },
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_BACKGROUND_MEDIA_FAILED);
      });

  public static postBackgroundImage = (
    id: string,
    idMedia: string, // comment post image ???
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_BACKGROUND_IMAGE, {
          id,
          idMedia,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_BACKGROUND_MEDIA_FAILED);
      });

  public static postAddress = (id: string, params: IAddressParams) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_ADRESS_ORGANIZATION, {
          id,
        }),
        {
          ...params,
        },
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_ADDRESS_FAILED);
      });

  public static postNewOrganization = (params: IOrganizationParams) =>
    fetcher
      .post<IOrganizationResponse>(endpoints.POST_CREATE_ORGANIZATION, {
        // reponse ???
        ...params,
      })
      .catch(_err => {
        throw errorFactory.create(
          OrganizationErr.POST_CREATE_ORGANIZATION_FAILED,
        );
      });

  public static postSuggestOrganization = (params: IOrganizationParams) =>
    fetcher
      .post<IOrganizationResponse>(endpoints.POST_CREATE_ORGANIZATION_SUGGEST, {
        // reponse ???
        ...params,
      })
      .catch(_err => {
        throw errorFactory.create(
          OrganizationErr.POST_ORGANIZATION_SUGGEST_FAILED,
        );
      });

  public static postRegisterOrgnization = (
    params: IOrganizationRegisterParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        endpoints.POST_CREATE_ORGANIZATION_REGISTER,
        {
          ...params,
        },
      )
      .catch(_err => {
        throw errorFactory.create(
          OrganizationErr.POST_ORANIZATION_REGISTER_FAILED,
        );
      });

  public static postRegisterOrgnizationPerson = (
    params: IOrganizationRegisterParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>(endpoints.POST_CREATE_ORGANISATION_PERSON, {
        // reponse ???
        ...params,
      })
      .catch(_err => {
        throw errorFactory.create(
          OrganizationErr.POST_ORANIZATION_REGISTER_PERSON_FAILED,
        );
      });

  public static postCreateKyc = (id: string, params: IKycParams) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_KYC, { id }),
        (endpoints.POST_KYC,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_KYC_FAILED);
      });

  public static postCreateRib = (id: string, params: IRibParams) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_RIB, { id }),
        (endpoints.POST_RIB,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_RIB_FAILED);
      });

  public static postCreateEmployee = (id: string, params: IEmployeeParams) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_EMPLOYEE, { id }),
        (endpoints.POST_EMPLOYEE,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_EMPLOYEE_FAILED);
      });

  public static postCreateFounder = (id: string, params: IFounderParams) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_FOUNDER, { id }),
        (endpoints.POST_FOUNDER,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_FOUNDER_FAILED);
      });

  public static postCreateOpeningHours = (
    idOrganization: string,
    params: IOpeningHoursParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_HOURS_ORGANIZATION, {
          idOrganization,
        }),
        (endpoints.POST_HOURS_ORGANIZATION,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_OPENING_HOURS_FAILED);
      });

  public static postPictureFromMedia = (
    id: string,
    idMedia: string,
    params: IPictureParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(
          endpoints.POST_PICTURE_ORGANIZATION_FROM_MEDIA,
          {
            id,
            idMedia,
          },
        ),
        (endpoints.POST_PICTURE_ORGANIZATION_FROM_MEDIA,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_PICTURE_MEDIA_FAILED);
      });

  public static postPicture = (
    // comment mettre l'image ????
    id: string,
    idMedia: string,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_PICTURE_ORGANIZATION, {
          id,
          idMedia,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_PICTURE_FAILED);
      });

  public static postLogo = (
    // comment mettre l'image ????
    id: string,
    idMedia: string,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_LOGO_ORGANIZATION, {
          id,
          idMedia,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_LOGO_FAILED);
      });

  public static postCommunication = (
    id: string,
    params: ICommunicationParams,
  ) =>
    fetcher
      .post<IOrganizationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_COMMUNICATION_ORGANIZATION, {
          id,
        }),
        (endpoints.POST_COMMUNICATION_ORGANIZATION,
        {
          ...params,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(OrganizationErr.POST_COMMUNICATION_FAILED);
      });

  /**
   * Get one Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganization = (id: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION, { id }),
    );

  /**
   * Get list of Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganizations = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrganizationResponse[]>>(
      endpoints.GET_ORGANIZATIONS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  public static getPublicOrganizations = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrganizationResponse[]>>(
      endpoints.GET_PUBLIC_ORGANIZATIONS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  /**
   * Get one public Organization by id.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganization = (id: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, { id }),
    );

  /**
   * Get one public Organization by slug.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganizationBySlug = (slug: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_SLUG, { slug }),
    );
}

export { OrganizationApi };
