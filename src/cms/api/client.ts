import { ICmsResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class CmsApi {
  /**
   * Get list of contents.
   *
   * @static
   * @memberof CmsApi
   */
  public static getContents = (
    page = 1,
    itemsPerPage = 2,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICmsResponse[]>>(endpoints.GET_CONTENTS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one product.
   *
   * @static
   * @memberof CmsApi
   */
  public static getContent = (id: string) =>
    fetcher.get<ICmsResponse>(
      StringUtils.bindContext(endpoints.GET_CONTENT, { id }),
    );

  /**
   * Get categories.
   *
   * @static
   * @memberof CmsApi
   */
  public static getContentSlug = (slug: string) =>
  fetcher.get<ICmsResponse>(
    StringUtils.bindContext(endpoints.GET_CONTENT_SLUG, { slug }),
  );
}

export { CmsApi };
