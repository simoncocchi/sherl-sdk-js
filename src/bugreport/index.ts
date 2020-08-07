import { BugreportProvider } from './provider';

const instance = new BugreportProvider();

export const bugreport = (): BugreportProvider => instance;
