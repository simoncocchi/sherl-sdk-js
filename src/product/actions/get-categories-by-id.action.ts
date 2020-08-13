import { ICategoryResponse } from '../types';
import { ProductApi } from '../api/client';

export const getCategoriesById = async (
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  const response = await ProductApi.getCategoriesById(categoryId);
  return response.data;
};
