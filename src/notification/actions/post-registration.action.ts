import { NotificationApi } from '../api/client';
import { NotificationErr, errorFactory } from '../errors';
import { IRegistrationResponse, IRegistrationParameter } from '../types';

export const postRegistrationNotification = async (
  parameter: IRegistrationParameter,
): Promise<IRegistrationResponse> => {
  const response = await NotificationApi.postRegistrationNotification(
    parameter,
  );

  if (!response.data) {
    throw errorFactory.create(
      NotificationErr.POST_REGISTRATION_NOTIFICATION_FAILED,
    );
  }

  return response.data;
};
