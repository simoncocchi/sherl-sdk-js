import {
  getNotifications
} from './actions';

class NotificationProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getNotifications(page, itemsPerPage, filters);
  }

}

export { NotificationProvider };
