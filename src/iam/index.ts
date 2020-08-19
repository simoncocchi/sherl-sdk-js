import { IAMProvider } from './provider';

const instance = new IAMProvider();

export const iam = (): IAMProvider => instance;
