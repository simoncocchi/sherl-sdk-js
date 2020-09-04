import { ClaimApi } from '../api/client';
import { ClaimErr, errorFactory } from '../errors';
import { IClaimResponse, IClaimParameter } from '../types';

export const postClaim = async (
  id: string,
  parameter: IClaimParameter,
): Promise<IClaimResponse> => {
  // reponse ??
  const response = await ClaimApi.postClaim(id, parameter);

  if (!response.data) {
    // reponse empty ?
    throw errorFactory.create(ClaimErr.POST_CLAIM_REPLY_FAILED);
  }

  return response.data;
};
