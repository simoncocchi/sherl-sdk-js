import { HealthyProvider } from './provider';

const instance = new HealthyProvider();

export const healthy = (): HealthyProvider => instance;
