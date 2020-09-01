import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postPrivacyPolice = async (id: string, version: string) => {
  const response = await PersonApi.postPrivacyPolice(id, version);
};
