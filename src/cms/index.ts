import { CMSProvider } from './provider';

const instance = new CMSProvider();

export const cms = (): CMSProvider => instance;
