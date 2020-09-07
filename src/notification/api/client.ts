import {
  INotificationResponse,
  IDisabledEnabledNotificationParameter,
  IRegistrationParameter,
  IRegistrationResponse,
  INotificationParameter,
} from '../types';
import { Pagination } from '../../common/api';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, NotificationErr } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class NotificationApi {
  /**
   * Get list of notification.
   *
   * @static
   * @memberof NotificationApi
   */
  public static getNotifications = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<INotificationResponse[]>>(
      endpoints.GET_NOTIFICATION,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  public static postDisableNotification = (
    id: string,
    parameter: IDisabledEnabledNotificationParameter,
  ) =>
    fetcher
      .post<INotificationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_DISABLE_NOTIFICATION, { id }),
        (endpoints.POST_DISABLE_NOTIFICATION,
        {
          ...parameter,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(
          NotificationErr.POST_DISABLE_NOTIFICATION_FAILED,
        );
      });

  public static postEnableNotification = (
    id: string,
    parameter: IDisabledEnabledNotificationParameter,
  ) =>
    fetcher
      .post<INotificationResponse>( // reponse ???
        StringUtils.bindContext(endpoints.POST_DISABLE_NOTIFICATION, { id }),
        (endpoints.POST_ENABLE_NOTIFICATION,
        {
          ...parameter,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(
          NotificationErr.POST_ENABLE_NOTIFICATION_FAILED,
        );
      });

  public static postTestNotification = () =>
    fetcher.post(endpoints.POST_TEST_NOTIFICATION, {}).catch(_err => {
      throw errorFactory.create(NotificationErr.POST_TEST_NOTIFICATION_FAILED);
    });

  public static postRegistrationNotification = (
    parameter: IRegistrationParameter,
  ) =>
    fetcher
      .post<IRegistrationResponse>(endpoints.POST_REGISTRATION_NOTIFICATION, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(
          NotificationErr.POST_REGISTRATION_NOTIFICATION_FAILED,
        );
      });

  public static postNotification = (
    type: string,
    parameter: INotificationParameter,
  ) =>
    fetcher
      .post(
        StringUtils.bindContext(endpoints.POST_DISABLE_NOTIFICATION, { type }),
        (endpoints.POST_NOTIFICATION,
        {
          ...parameter,
        }),
      )
      .catch(_err => {
        throw errorFactory.create(NotificationErr.POST_NOTIFICATION_FAILED);
      });
}

export { NotificationApi };
