import {
  getNotifications,
  postDisableNotification,
  postEnableNotification,
  postNotification,
  postRegistrationNotification,
  postTestNotification,
} from './actions';
import {
  IDisabledEnabledNotificationParameter,
  IRegistrationParameter,
  INotificationParameter,
} from './types';

class NotificationProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getNotifications(page, itemsPerPage, filters);
  }

  public postDisableNotification(
    id: string,
    parameter: IDisabledEnabledNotificationParameter,
  ) {
    return postDisableNotification(id, parameter);
  }

  public postEnableNotification(
    id: string,
    parameter: IDisabledEnabledNotificationParameter,
  ) {
    return postEnableNotification(id, parameter);
  }

  public postTestNotification() {
    return postTestNotification();
  }

  public postRegistrationNotification(parameter: IRegistrationParameter) {
    return postRegistrationNotification(parameter);
  }

  public postNotification(type: string, parameter: INotificationParameter) {
    return postNotification(type, parameter);
  }
}

export { NotificationProvider };
