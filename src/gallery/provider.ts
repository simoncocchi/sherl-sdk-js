import { getGalleries } from './actions';

class GalleryProvider {
  /**
   * Get galeries.
   *
   * @returns
   * @memberof PersonProvider
   */
  public all() {
    return getGalleries();
  }
}

export { GalleryProvider };
