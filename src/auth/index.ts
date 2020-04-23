import { AuthProvider } from './provider';

const authProvider = new AuthProvider();

export const auth = (): AuthProvider => authProvider;
