import {
  getMe,
  getPersonById,
  getCurrentAddress,
  getPersons,
  getConfigs,
} from './actions';

class PersonProvider {
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
    return getPersonById(id);
  }

  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: string },
  ) {
    return getPersons(page, itemsPerPage, filters);
  }

  public position(position: { [key: string]: string }) {
    return getCurrentAddress(position);
  }

  public config() {
    return getConfigs();
  }
}

export { PersonProvider };
