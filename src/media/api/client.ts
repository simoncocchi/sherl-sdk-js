import { IMediaResponse, IMediaParameter } from '../types';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, MediaErr } from '../errors';

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

  public static postMedia = (parameter: IMediaParameter) =>
    fetcher
      .post<IMediaResponse>(endpoints.POST_MEDIA, { ...parameter })
      .catch(_err => {
        throw errorFactory.create(MediaErr.POST_MEDIA_FAILED);
      });
}

export { MediaApi };
