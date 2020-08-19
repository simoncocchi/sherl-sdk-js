import { AuthApi } from '../api/client';

export const getLogout = async () => {
    
  try {
    await AuthApi.getLogout();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }
  throw new Error('Empty response from API');
};
