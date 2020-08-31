import { getMe, getOneBy, getPosition, list, getConfigs, postRequestPersonAddress, postFavoriteOrganization } from './actions';

class PersonProvider {
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
    idOrganization: string
  ) => {
    return postFavoriteOrganization(
      idOrganization
    );
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
