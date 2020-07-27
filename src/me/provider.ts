import { getMe } from './actions';

class MeProvider {

  /**
   * Get Me.
   *
   * @returns
   * @memberof MeProvider
   */
  public list() {
    return getMe();
  }
}

export { MeProvider };
