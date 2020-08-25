import { ApiResponse } from '../../common/api';
import { IPaymentResponse } from '../types';
import { PaymentApi } from '../api/client';

export const getPaymentSecure = async (id: string): Promise<IPaymentResponse> => {
  let response: ApiResponse<IPaymentResponse> | null = null;

  try {
    response = await PaymentApi.getPaymentSecure(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
