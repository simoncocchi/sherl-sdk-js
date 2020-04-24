import { AuthApi } from '../api/client';
import { AuthProvider, AuthErr } from '../provider';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  const response = await AuthApi.postRequestLoginCredential(email, password);

  if (response.status !== 200 || !response.data.access_token) {
    throw AuthProvider.errorFactory.create(AuthErr.LOGIN_FAILED);
  }

  return response.data.access_token;
};
