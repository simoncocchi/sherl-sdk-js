import { NotificationApi } from '../api/client';
import { NotificationErr, errorFactory } from '../errors';

export const postTestNotification = async () => {
  const response = await NotificationApi.postTestNotification();

  if (!response.data) {
    throw errorFactory.create(NotificationErr.POST_TEST_NOTIFICATION_FAILED);
  }

  return response.data;
};
