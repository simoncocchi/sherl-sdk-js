import { PaymentProvider } from './provider';

const instance = new PaymentProvider();

export const payment= (): PaymentProvider => instance;
