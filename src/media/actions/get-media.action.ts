import { ApiResponse } from '../../common/api';
import { IMediaResponse } from '../types';
import { MediaApi } from '../api/client';

export const getMedia = async (id: string): Promise<IMediaResponse> => {
  let response: ApiResponse<IMediaResponse> | null = null;

  try {
    response = await MediaApi.getMedia(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
