import { NotificationApi } from '../api/client';
import { NotificationErr, errorFactory } from '../errors';
import {
  IDisabledEnabledNotificationParameter,
  INotificationResponse,
} from '../types';

export const postEnableNotification = async (
  id: string,
  parameter: IDisabledEnabledNotificationParameter,
): Promise<INotificationResponse> => {
  // reponse ???
  const response = await NotificationApi.postEnableNotification(id, parameter);

  if (!response.data) {
    throw errorFactory.create(NotificationErr.POST_ENABLE_NOTIFICATION_FAILED);
  }

  return response.data;
};
