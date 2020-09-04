import { ErrorFactory } from '../common/errors';

export enum ContactErr {
  POST_CONTACT_FAILED = 'post-contact-failed',
}

export const errors = {
  [ContactErr.POST_CONTACT_FAILED]: 'Failed to post contact',
};

export const errorFactory = new ErrorFactory<ContactErr>(
  'contact',
  'Contact',
  errors,
);
