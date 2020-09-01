import { PersonApi } from '../api/client';

export const postLegalNotice = async (id: string, version: string) => {
  const response = await PersonApi.postLegalNotice(id, version);
};
