import { OpinionProvider } from './provider';

const instance = new OpinionProvider();

export const opinion = (): OpinionProvider => instance;
