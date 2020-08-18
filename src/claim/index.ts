import { ClaimProvider } from './provider';

const instance = new ClaimProvider();

export const claim = (): ClaimProvider => instance;
