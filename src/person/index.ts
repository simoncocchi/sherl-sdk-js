import { PersonProvider } from './provider';

const instance = new PersonProvider();

export const person = (): PersonProvider => instance;
