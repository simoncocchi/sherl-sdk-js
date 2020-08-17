import { CommunicationProvider } from './provider';

const instance = new CommunicationProvider();

export const communication = (): CommunicationProvider => instance;
