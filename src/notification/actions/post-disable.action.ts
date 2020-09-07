import { NotificationApi } from '../api/client';
import { NotificationErr, errorFactory } from '../errors';
import {
  IDisabledEnabledNotificationParameter,
  INotificationResponse,
} from '../types';

export const postDisableNotification = async (
  id: string,
  parameter: IDisabledEnabledNotificationParameter,
): Promise<INotificationResponse> => {
  // reponse ???
  const response = await NotificationApi.postDisableNotification(id, parameter);

  if (!response.data) {
    throw errorFactory.create(NotificationErr.POST_DISABLE_NOTIFICATION_FAILED);
  }

  return response.data;
};
