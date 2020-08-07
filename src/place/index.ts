import { PlaceProvider } from './provider';

const instance = new PlaceProvider();

export const place = (): PlaceProvider => instance;
