import {
  getOrganization,
  getOrganizations,
  getPublicOrganizationBySlug,
  getPublicOrganization,
  getPublicOrganizations,
  postAddress,
  postBackgroundImage,
  postBackgroundImageFromMedia,
  postCommunication,
  postCreateEmployee,
  postCreateFounder,
  postCreateKyc,
  postCreateOpeningHours,
  postCreateRib,
  postLogo,
  postNewOrganization,
  postPicture,
  postPictureFromMedia,
  postRegisterOrgnization,
  postRegisterOrgnizationPerson,
  postSuggestOrganization,
} from './actions';

import {
  IPictureParams,
  IAddressParams,
  ICommunicationParams,
  IOpeningHoursParams,
  IFounderParams,
  IEmployeeParams,
  IRibParams,
  IOrganizationParams,
  IBackgroundParams,
  IKycParams,
  IOrganizationRegisterParams,
} from './types';

class OrganizationProvider {
  public postBackgroundImageFromMedia = async (
    id: string,
    idMedia: string,
    params: IBackgroundParams,
  ) => {
    return postBackgroundImageFromMedia(id, idMedia, params);
  };

  public postBackgroundImage = async (id: string, idMedia: string) => {
    return postBackgroundImage(id, idMedia); // pas d'image
  };

  public postAddress = async (id: string, params: IAddressParams) => {
    return postAddress(id, params);
  };

  public postNewOrganization = async (params: IOrganizationParams) => {
    return postNewOrganization(params);
  };

  public postSuggestOrganization = async (params: IOrganizationParams) => {
    return postSuggestOrganization(params);
  };

  public postRegisterOrgnization = async (
    params: IOrganizationRegisterParams,
  ) => {
    return postRegisterOrgnization(params);
  };

  public postRegisterOrgnizationPerson = async (
    params: IOrganizationRegisterParams,
  ) => {
    return postRegisterOrgnizationPerson(params);
  };

  public postCreateKyc = async (id: string, params: IKycParams) => { // failled to upload lemonway
    return postCreateKyc(id, params);
  };

  public postCreateRib = async (id: string, params: IRibParams) => { // failled to upload on lemonway
    return postCreateRib(id, params);
  };

  public postCreateEmployee = async (id: string, params: IEmployeeParams) => {
    return postCreateEmployee(id, params);
  };

  public postCreateFounder = async (id: string, params: IFounderParams) => {
    return postCreateFounder(id, params);
  };

  public postCreateOpeningHours = async (
    idOrganization: string,
    params: IOpeningHoursParams,
  ) => {
    return postCreateOpeningHours(idOrganization, params);
  };

  public postPictureFromMedia = async (
    id: string,
    idMedia: string,
    params: IPictureParams,
  ) => {
    return postPictureFromMedia(id, idMedia, params);
  };

  public postPicture = async (id: string, idMedia: string) => {
    return postPicture(id, idMedia);  // pas d'image
  };

  public postLogo = async (id: string, idMedia: string) => {
    return postLogo(id, idMedia); // pas d'image
  };

  public postCommunication = async (
    id: string,
    params: ICommunicationParams,
  ) => {
    return postCommunication(id, params);
  };

  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getOrganizations(page, itemsPerPage, filters);
  }

  public publicList(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getPublicOrganizations(page, itemsPerPage, filters);
  }

  /**
   * Get organization by id.
   *
   * @param {string} id
   * @returns
   * @memberof OrganizationProvider
   */
  public one(id: string) {
    return getOrganization(id);
  }

  /**
   * Get public organization by id.
   *
   * @param {string} id
   * @returns
   * @memberof OrganizationProvider
   */
  public publicOneId(id: string) {
    return getPublicOrganization(id);
  }

  /**
   * Get public organization by slug.
   *
   * @param {string} Id
   * @returns
   * @memberof OrganizationProvider
   */
  public publicOneSlug(slug: string) {
    return getPublicOrganizationBySlug(slug);
  }
}

export { OrganizationProvider };
