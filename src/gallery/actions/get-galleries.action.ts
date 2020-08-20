import { ApiResponse } from '../../common/api';
import { IGalleryResponse } from '../types';
import { GalleryApi } from '../api/client';

export const getGalleries = async (): Promise<IGalleryResponse> => {
  let response: ApiResponse<IGalleryResponse> | null = null;

  try {
    response = await GalleryApi.getGalleries();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
