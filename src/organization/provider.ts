import {
  getOrganization,
  getOrganizations,
  getPublicOrganizationBySlug,
  getPublicOrganization,
  getPublicOrganizations,
} from './actions';

class OrganizationProvider {
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
