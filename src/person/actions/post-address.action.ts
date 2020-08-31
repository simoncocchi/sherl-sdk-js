import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postRequestPersonAddress = async (
  complementaryStreetAddress: string,
  country: string,
  createdAt: string,
  department: string,
  id: string,
  latitude: number,
  locality: string,
  longitude: number,
  name: string,
  originId: string,
  postalCode: string,
  region: string,
  streetAddress: string,
  type: string,
  uri: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postRequestPersonAddress(
    complementaryStreetAddress,
    country,
    createdAt,
    department,
    id,
    latitude,
    locality,
    longitude,
    name,
    originId,
    postalCode,
    region,
    streetAddress,
    type,
    uri,
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_ADDRESS_FAILED);
  }

  return response.data;
};
