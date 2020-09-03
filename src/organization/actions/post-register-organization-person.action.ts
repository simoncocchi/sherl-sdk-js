import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOrganizationRegisterParams } from '../types';

export const postRegisterOrgnizationPerson = async (
  params: IOrganizationRegisterParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postRegisterOrgnizationPerson(
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_ORANIZATION_REGISTER_PERSON_FAILED);
  }

  return response.data;
};
