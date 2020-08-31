import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postCreatePerson = async (
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
    latitude: 0;
    longitude: 0;
  },
  phoneNumber: string,
  mobilePhoneNumber: string,
  faxNumber: string,
  nationality: string,
  affiliation: {
    id: string;
    uri: string;
    legalName: string;
    location: {
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
    };
    subOrganizations: [string];
  },
  birthDate: Date,
  email: string,
  gender: string,
  jobTitle: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postCreatePerson(
    id,
    firstName,
    lastName,
    address,
    phoneNumber,
    mobilePhoneNumber,
    faxNumber,
    nationality,
    affiliation,
    birthDate,
    email,
    gender,
    jobTitle,
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_CREATE_PERSON_FAILED);
  }

  return response.data;
};
