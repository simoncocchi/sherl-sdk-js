import { SubscriptionProvider } from './provider';

const instance = new SubscriptionProvider();

export const subscription = (): SubscriptionProvider => instance;
