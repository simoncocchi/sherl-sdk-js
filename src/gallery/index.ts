import { GalleryProvider } from './provider';

const instance = new GalleryProvider();

export const gallery = (): GalleryProvider => instance;
