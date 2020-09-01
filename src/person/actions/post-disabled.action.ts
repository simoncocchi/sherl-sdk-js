import { PersonApi } from '../api/client';

export const postDisabled = async (id: string) => {
  const response = await PersonApi.postDisabled(id);
};
