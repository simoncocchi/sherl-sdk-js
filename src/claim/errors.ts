import { ErrorFactory } from '../common/errors';

export enum ClaimErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_CLAIM_REFUND_FAILED = 'post-claim-refund-failed',
  POST_CLAIM_FAILED = 'post-claim-failed',
  POST_CLAIM_REPLY_FAILED = 'post-claim-reply-failed',
}

export const errors = {
  [ClaimErr.FETCH_FAILED]: 'Failed to fetch claim API',
  [ClaimErr.NOT_FOUND]: 'Claim not found',
  [ClaimErr.POST_CLAIM_REFUND_FAILED]: 'Post claim refund failed',
  [ClaimErr.POST_CLAIM_FAILED]: 'Post claim failed',
  [ClaimErr.POST_CLAIM_REPLY_FAILED]: 'Post claim reply failed',
};

export const errorFactory = new ErrorFactory<ClaimErr>(
  'claim',
  'Claim',
  errors,
);
