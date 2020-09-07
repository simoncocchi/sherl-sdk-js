import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  FETCH_FAILED = 'fetch-failed',
  NOT_FOUND = 'not-found',
  POST_DISABLE_NOTIFICATION_FAILED = 'post-disable-notification-failed',
  POST_ENABLE_NOTIFICATION_FAILED = 'post-enable-notification-failed',
  POST_TEST_NOTIFICATION_FAILED = 'post-test-notification-failed',
  POST_REGISTRATION_NOTIFICATION_FAILED = 'post-registration-notification-failed',
  POST_NOTIFICATION_FAILED = 'post-notification-failed',
}

export const errors = {
  [NotificationErr.FETCH_FAILED]: 'Failed to fetch products API',
  [NotificationErr.NOT_FOUND]: 'Notification not found',
  [NotificationErr.POST_DISABLE_NOTIFICATION_FAILED]: 'Post disable notification failed',
  [NotificationErr.POST_ENABLE_NOTIFICATION_FAILED]: 'Post notification failed',
  [NotificationErr.POST_TEST_NOTIFICATION_FAILED]: 'Post test notification failed',
  [NotificationErr.POST_REGISTRATION_NOTIFICATION_FAILED]: 'Post registration notification failed',
  [NotificationErr.POST_NOTIFICATION_FAILED]: 'Post notification failed',
};

export const errorFactory = new ErrorFactory<NotificationErr>(
  'notification',
  'Notification',
  errors,
);
