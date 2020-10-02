import { OrganizationProvider } from './provider';

const instance = new OrganizationProvider();

export const organization = (): OrganizationProvider => instance;
