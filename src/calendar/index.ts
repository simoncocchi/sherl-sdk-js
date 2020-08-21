import { CalendarProvider } from './provider';

const instance = new CalendarProvider();

export const calendar = (): CalendarProvider => instance;
