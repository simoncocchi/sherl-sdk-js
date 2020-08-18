import { INotificationResponse } from '../types';
import { Pagination } from '../../common/api';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class NotificationApi {
  /**
   * Get list of notification.
   *
   * @static
   * @memberof ProductApi
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
}

export { NotificationApi };
