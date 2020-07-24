import { MeProvider } from './provider';

const instance = new MeProvider();

export const me = (): MeProvider => instance;
