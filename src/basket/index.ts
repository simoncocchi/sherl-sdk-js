import { BasketProvider } from './provider';

const instance = new BasketProvider();

export const basket = (): BasketProvider => instance;
