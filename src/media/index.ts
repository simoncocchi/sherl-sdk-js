import { MediaProvider } from './provider';

const instance = new MediaProvider();

export const media = (): MediaProvider => instance;
