import { IMediaResponse } from '../types';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class MediaApi {
  /**
   * Get one media.
   *
   * @static
   * @memberof MediaApi
   */
  public static getMedia = (id: string) =>
    fetcher.get<IMediaResponse>(
      StringUtils.bindContext(endpoints.GET_MEDIA, { id }),
    );
}

export { MediaApi };
