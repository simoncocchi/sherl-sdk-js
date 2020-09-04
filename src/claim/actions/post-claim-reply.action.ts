import { ClaimApi } from '../api/client';
import { ClaimErr, errorFactory } from '../errors';
import { IClaimResponse, IClaimReplyParameter } from '../types';

export const postClaimReply = async (
  id: string,
  parameter: IClaimReplyParameter,
): Promise<IClaimResponse> => {
  // reponse ??
  const response = await ClaimApi.postClaimReply(id, parameter);

  if (!response.data) {
    // reponse empty ?
    throw errorFactory.create(ClaimErr.POST_CLAIM_REPLY_FAILED);
  }

  return response.data;
};
