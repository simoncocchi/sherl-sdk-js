import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IEmployeeParams } from '../types';

export const postCreateEmployee = async (
  id: string,
  params: IEmployeeParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCreateEmployee(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_EMPLOYEE_FAILED);
  }

  return response.data;
};
