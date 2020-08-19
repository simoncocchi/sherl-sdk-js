import { getProfile, getProfiles, getRole } from './actions';

class IAMProvider {
  public profileList(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getProfiles(filters);
  }

  public profileOne(id: string) {
    return getProfile(id);
  }

  public roleOne(id: string) {
    return getRole(id);
  }

}

export { IAMProvider };
