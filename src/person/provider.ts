import {
  getMe,
  getOneBy,
  getPosition,
  list,
  getConfigs,
  postRequestPersonAddress,
  postFavoriteOrganization,
  postPicture,
  postAddBlackList,
  postCreateAdmin,
  postCreatePerson,
  postDisabled,
  postEnable,
  postLegalNotice,
  postPrivacyPolice,
  postRefreshIamOne,
} from './actions';

class PersonProvider {
  public postRefreshIamOne = async (id: string) => {
    return postRefreshIamOne(id);
  };

  public postPrivacyPolice = async (id: string, version: string) => {
    return postPrivacyPolice(id, version);
  };

  public postLegalNotice = async (id: string, version: string) => {
    return postLegalNotice(id, version);
  };

  public postEnable = async (id: string) => {
    return postEnable(id);
  };

  public postDisabled = async (id: string) => {
    return postDisabled(id);
  };

  public postCreatePerson = async (
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
  ) => {
    return postCreatePerson(
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
    );
  };

  public postAddBlackList = async (id: string) => {
    return postAddBlackList(id);
  };

  public postCreateAdmin = async (
    id: string,
    firstName: string,
    lastName: string,
    email: string,
  ) => {
    return postCreateAdmin(id, firstName, lastName, email);
  };

  public postPicture = async (idPerson: string, idMedia: string) => {
    return postPicture(idPerson, idMedia);
  };

  public postAddress = async (
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
  ) => {
    return postRequestPersonAddress(
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
    );
  };

  public postOrganization = async (
    idPerson: string,
    idOrganization: string,
  ) => {
    return postFavoriteOrganization(idPerson, idOrganization);
  };

  /**
   * Get Me.
   *
   * @returns
   * @memberof PersonProvider
   */
  public me() {
    return getMe();
  }

  public findOne(id: string) {
    return getOneBy(id);
  }

  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return list(page, itemsPerPage, filters);
  }

  public position(position: { [key: string]: any }) {
    return getPosition(position);
  }

  public config() {
    return getConfigs();
  }
}

export { PersonProvider };
