import { AuthApi } from '../api/client';

export const getGoogle = async () => {
    
  try {
    await AuthApi.getGoogle();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }
  throw new Error('Empty response from API');
};
