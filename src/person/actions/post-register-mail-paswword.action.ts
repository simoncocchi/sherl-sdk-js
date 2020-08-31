import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postRegisterEmailPassword = async (
  id: string,
  firstName: string,
  lastName: string,
  address: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    uri: string;
    createdAt: Date;
    department: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: number;
    longitude: number;
  },
  phoneNumber: string,
  birthDate: Date,
  email: string,
  password: string,
  confirmPassword: string,
): Promise<Object> => { // reponse ??
  const response = await PersonApi.postRegisterEmailPassword(
    id,
    firstName,
    lastName,
    address,
    phoneNumber,
    birthDate,
    email,
    password,
    confirmPassword,
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_REGISTER_EMAIL_PASSWORD_FAILED);
  }

  return response.data;
};
