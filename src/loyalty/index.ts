import { LoyaltyProvider } from './provider';

const instance = new LoyaltyProvider();

export const loyalty = (): LoyaltyProvider => instance;
