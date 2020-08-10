import { getContent, getContentSlug, getContents} from './actions';

class CMSProvider {
  public list(
    page = 1,
    itemsPerPage = 2,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getContents(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getContent(id);
  }

  /**
   * Get content by slug.
   *
   * @param {string} organizationId
   * @returns
   * @memberof CMSProvider
   */
  public oneSlug(slug: string) {
    return getContentSlug(slug);
  }
}

export { CMSProvider };
