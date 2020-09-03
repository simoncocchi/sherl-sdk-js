import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';
export enum OrganizationErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_BACKGROUND_MEDIA_FAILED = 'post-background-media-failed',
  POST_BACKGROUD_FAILED = 'post-background-failed',
  POST_ADDRESS_FAILED = 'post-address-failed',
  POST_CREATE_ORGANIZATION_FAILED = 'post-create-organization-failed',
  POST_ORGANIZATION_SUGGEST_FAILED = 'post-organization-suggest-failed',
  POST_ORANIZATION_REGISTER_FAILED = 'post-organization-register-failed',
  POST_ORANIZATION_REGISTER_PERSON_FAILED = 'post-organization-register-person-failed',
  POST_KYC_FAILED = 'post-kyc-failed',
  POST_RIB_FAILED = 'post-rib-failed',
  POST_EMPLOYEE_FAILED = 'post-employee-failed',
  POST_FOUNDER_FAILED = 'post-founder-failed',
  POST_OPENING_HOURS_FAILED = 'post-opening-hours-failed',
  POST_PICTURE_MEDIA_FAILED = 'post-picture-media-failed',
  POST_PICTURE_FAILED = 'post-picture-failed',
  POST_LOGO_FAILED = 'post-logo-failed',
  POST_COMMUNICATION_FAILED = 'post-communication-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch products API',
  'not-found': 'Product not found',
  [OrganizationErr.POST_BACKGROUND_MEDIA_FAILED]: 'Could not post add Background Image from media to one organization',
  [OrganizationErr.POST_BACKGROUD_FAILED]: 'Could not post add backgroundImage to one organization',
  [OrganizationErr. POST_ADDRESS_FAILED]: 'Could not post create a new address to current Organization',
  [OrganizationErr.POST_CREATE_ORGANIZATION_FAILED]: 'Could not post create a new organization.',
  [OrganizationErr. POST_ORGANIZATION_SUGGEST_FAILED]:
    'Could not post suggest a new organization',
  [OrganizationErr.POST_ORANIZATION_REGISTER_FAILED]: 'Could not post register create a new organization',
  [OrganizationErr.POST_ORANIZATION_REGISTER_PERSON_FAILED]: 'Could not post create a new organization to person',
  [OrganizationErr.POST_KYC_FAILED]: 'Could not post create a new organization KYC document',
  [OrganizationErr.POST_RIB_FAILED]: 'Could not post create a new organization Rib document',
  [OrganizationErr.POST_EMPLOYEE_FAILED]: 'Could not post create a new Organization employee',
  [OrganizationErr.POST_FOUNDER_FAILED]: 'Could not post create a new Organization founder',
  [OrganizationErr.POST_OPENING_HOURS_FAILED]: 'Could not post create a new Organization open hours specification',
  [OrganizationErr.POST_PICTURE_MEDIA_FAILED]: 'Could not post add picture from media to one organization',
  [OrganizationErr.POST_PICTURE_FAILED]: 'Could not post add picture to one organization',
  [OrganizationErr.POST_LOGO_FAILED]: 'Could not post add logo to one organization',
  [OrganizationErr.POST_COMMUNICATION_FAILED]: 'Could not post set communication to Organization',
};

export const errorFactory = new ErrorFactory<OrganizationErr>('organization', 'Organization', errors);
