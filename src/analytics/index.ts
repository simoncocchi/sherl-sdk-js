import { AnalyticsProvider } from './provider';

const instance = new AnalyticsProvider();

export const analytics = (): AnalyticsProvider => instance;
