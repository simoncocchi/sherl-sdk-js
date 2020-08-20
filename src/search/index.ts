import { SearchProvider } from './provider';

const instance = new SearchProvider();

export const search = (): SearchProvider => instance;
