import { ConfigProvider } from './provider';

const instance = new ConfigProvider();

export const config = (): ConfigProvider => instance;
