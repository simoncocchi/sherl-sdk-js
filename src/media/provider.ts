import { getMedia } from './actions';

class MediaProvider {
  public one(id: string) {
    return getMedia(id);
  }
}

export { MediaProvider };
