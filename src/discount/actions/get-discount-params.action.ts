import { IDiscountResponse } from '../types';
import { DiscountApi } from '../api/client';
import { Pagination } from '../../common/api';

export const getDiscountParams = async (slug: { [key: string]: any },
  ): Promise<Pagination<IDiscountResponse>> => {
    const response = await DiscountApi.getDiscountParams( slug);
  
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch products API (status: ${response.status})`,
      );
    }
  
    return response.data;
  };