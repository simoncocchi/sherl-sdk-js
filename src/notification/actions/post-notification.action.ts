import { NotificationApi } from '../api/client';
import { INotificationParameter } from '../types';

export const postNotification = async (
  type: string,
  parameter: INotificationParameter,
) => {
  const response = await NotificationApi.postNotification(type, parameter);
};
