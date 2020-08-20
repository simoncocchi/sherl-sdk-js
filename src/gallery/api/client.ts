import { IGalleryResponse } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class GalleryApi {
  /**
   * Get galleries.
   *
   * @static
   * @memberof GalleryApi
   */
  public static getGalleries = () =>
    fetcher.get<IGalleryResponse>(endpoints.GET_GALLERIES);
}

export { GalleryApi };
