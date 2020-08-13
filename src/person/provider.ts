import { getMe } from './actions';

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
}

export { PersonProvider };
