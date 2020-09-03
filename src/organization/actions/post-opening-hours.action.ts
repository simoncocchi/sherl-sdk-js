import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOpeningHoursParams } from '../types';

export const postCreateOpeningHours = async (
  id: string,
  params: IOpeningHoursParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCreateOpeningHours(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_OPENING_HOURS_FAILED);
  }

  return response.data;
};
