import { ProductProvider } from './provider';

const instance = new ProductProvider();

export const product = (): ProductProvider => instance;
