import { Pagination } from '../../common/api';
import { INotificationResponse } from '../types';
import { NotificationApi } from '../api/client';

export const getNotifications = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<INotificationResponse[]>> => {
  const response = await NotificationApi.getNotifications(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
