import { getMe, getOneBy } from './actions';

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
}

export { PersonProvider };
