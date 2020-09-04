import { ClaimApi } from '../api/client';
import { ClaimErr, errorFactory } from '../errors';
import { IClaimResponse } from '../types';

export const postClaimRefund = async (id: string): Promise<IClaimResponse> => {
  // reponse ??
  const response = await ClaimApi.postClaimRefund(id);

  if (!response.data) {
    // reponse empty ?
    throw errorFactory.create(ClaimErr.POST_CLAIM_REPLY_FAILED);
  }

  return response.data;
};
