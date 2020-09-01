import { PersonApi } from '../api/client';

export const postEnable = async (id: string) => {
  const response = await PersonApi.postEnable(id);
};
