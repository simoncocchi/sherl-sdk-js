import { ContactProvider } from './provider';

const instance = new ContactProvider();

export const contact = (): ContactProvider => instance;
