import { AuthApi } from '../api/client';

export const getFacebook = async () => {
    
  try {
    await AuthApi.getFacebook();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }
  throw new Error('Empty response from API');
};
