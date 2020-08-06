import { OrderProvider } from './provider';

const instance = new OrderProvider();

export const order = (): OrderProvider => instance;
