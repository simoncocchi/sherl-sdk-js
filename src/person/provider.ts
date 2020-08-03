import { getMe, getOneBy, getPosition } from './actions';

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

  public position(position: { [key: string]: any }) {
    return getPosition(position);
  }
}

export { PersonProvider };
