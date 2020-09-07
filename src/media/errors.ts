import { ErrorFactory } from '../common/errors';

export enum MediaErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_MEDIA_FAILED = 'post-media-failed'
}

export const errors = {
  [MediaErr.FETCH_FAILED]: 'Failed to fetch media API',
  [MediaErr.NOT_FOUND]: 'Media not found',
  [MediaErr.POST_MEDIA_FAILED]: 'Post media failed',
};

export const errorFactory = new ErrorFactory<MediaErr>(
  'media',
  'Media',
  errors,
);
