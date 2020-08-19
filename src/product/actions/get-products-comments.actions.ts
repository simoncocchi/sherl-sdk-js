import { ProductApi } from '../api/client';
import { errorFactory, ProductErr } from '../errors';

export const getProductsComment = async (
  id: string,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
) => {
  const response = await ProductApi.getProductsComment(
    id,
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(ProductErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
