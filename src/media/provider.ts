import { getMedia, postMedia } from './actions';
import { IMediaParameter } from './types';

class MediaProvider {
  public one(id: string) {
    return getMedia(id);
  }

  public postMedia(parameter: IMediaParameter) {
    return postMedia(parameter);
  }
}

export { MediaProvider };
