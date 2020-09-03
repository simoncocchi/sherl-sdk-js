import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IAddressParams } from '../types';

export const postAddress = async (
  id: string,
  params: IAddressParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postAddress(
    id,
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_ADDRESS_FAILED);
  }

  return response.data;
};
