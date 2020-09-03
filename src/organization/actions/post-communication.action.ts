import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ICommunicationParams } from '../types';

export const postCommunication = async (
  id: string,
  params: ICommunicationParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCommunication(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_COMMUNICATION_FAILED);
  }

  return response.data;
};
