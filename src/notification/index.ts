import { NotificationProvider } from './provider';

const instance = new NotificationProvider();

export const notification = (): NotificationProvider => instance;
