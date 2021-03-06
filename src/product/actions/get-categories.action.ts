import { ICategoryResponse } from '../types';
import { ProductApi } from '../api/client';

export const getCategories = async (
  organizationId: string,
): Promise<ICategoryResponse[]> => {
  const response = await ProductApi.getCategories(organizationId);
  return response.data;
};
