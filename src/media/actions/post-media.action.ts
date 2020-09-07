import { MediaApi } from '../api/client';
import { MediaErr, errorFactory } from '../errors';
import { IMediaParameter, IMediaResponse } from '../types';

export const postMedia = async (
  parameter: IMediaParameter,
): Promise<IMediaResponse> => {
  // reponse ??
  const response = await MediaApi.postMedia(parameter);

  if (!response.data) {
    throw errorFactory.create(MediaErr.POST_MEDIA_FAILED);
  }

  return response.data;
};
