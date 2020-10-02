import { DiscountProvider } from './provider';

const instance = new DiscountProvider();

export const discount = (): DiscountProvider => instance;
