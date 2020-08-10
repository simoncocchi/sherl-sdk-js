import { ApiResponse } from '../../common/api';
import { ICmsResponse } from '../types';
import { CmsApi } from '../api/client';

export const getContentSlug = async (slug: string): Promise<ICmsResponse> => {
  let response: ApiResponse<ICmsResponse> | null = null;

  try {
    response = await CmsApi.getContentSlug(slug);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
