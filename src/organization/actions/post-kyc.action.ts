import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IKycParams } from '../types';

export const postCreateKyc = async (
  id: string,
  params: IKycParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCreateKyc(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_KYC_FAILED);
  }

  return response.data;
};
