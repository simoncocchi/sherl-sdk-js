import { getMe, getOneBy, getPosition, list, getConfigs } from './actions';

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
    return getOneBy(id);
  }

  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  )  {
    return list(page, itemsPerPage, filters)
  }

  public position(position: { [key: string]: any }) {
    return getPosition(position);
  }

  public config() {
    return getConfigs();
  }
}

export { PersonProvider };
