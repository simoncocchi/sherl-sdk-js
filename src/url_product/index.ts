import { UrlProductProvider } from './provider';

const instance = new UrlProductProvider();

export const url_product = (): UrlProductProvider => instance;
