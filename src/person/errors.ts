import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';
export enum PersonErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_ADDRESS_FAILED = 'post-address-failed',
  POST_FAVORITE_FAILED = 'post-favorite-failed',
  POST_CREATE_PERSON_FAILED = 'post-create-person-failed',
  POST_CREATE_ADMIN_FAILED = 'post-create-admin-failed',
  POST_REGISTER_EMAIL_PASSWORD_FAILED = 'post-register-email-password-failed',
  POST_REFRESH_IAM_FAILED = 'post-refresh-iam-failed',
  POST_PICTURE_FAILED = 'post-picture-failed',
  POST_ENABLE_FAILED = 'post-enable-failed',
  POST_DISABLED_FAILED = 'post-disabled-failed',
  POST_LEGAL_NOTICE_FAILED = 'post-legal-notice-failed',
  POST_PRIVACY_POLiCY_FAILED = 'post-privacy-policy-failed',
  POST_ADD_BLACK_FAILED = 'post-add-black-list-failed',
}

export const errors = {
  [PersonErr.FETCH_FAILED]: 'Failed to fetch person API',
  [PersonErr.NOT_FOUND]: 'Person not found',
  [PersonErr.POST_ADDRESS_FAILED]: 'Could not post address',
  [PersonErr.POST_FAVORITE_FAILED]: 'Could not post favorite organization',
  [PersonErr.POST_CREATE_PERSON_FAILED]: 'Could not post create person',
  [PersonErr.POST_CREATE_ADMIN_FAILED]: 'Could not post create super admin',
  [PersonErr.POST_REGISTER_EMAIL_PASSWORD_FAILED]:
    'Could not post register with email and password',
  [PersonErr.POST_REFRESH_IAM_FAILED]: 'Could not post refresh iam',
  [PersonErr.POST_PICTURE_FAILED]: 'Could not post picture',
  [PersonErr.POST_ENABLE_FAILED]: 'Could not post enable',
  [PersonErr.POST_DISABLED_FAILED]: 'Could not post disable',
  [PersonErr.POST_LEGAL_NOTICE_FAILED]: 'Could not post legal notice',
  [PersonErr.POST_PRIVACY_POLiCY_FAILED]: 'Could not post privacy policy',
  [PersonErr.POST_ADD_BLACK_FAILED]: 'Could not post add black list',
};

export const errorFactory = new ErrorFactory<PersonErr>(
  'person',
  'Person',
  errors,
);
