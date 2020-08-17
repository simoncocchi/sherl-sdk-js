import { ICommunicationResponse } from '../types';
import { Pagination } from '../../common/api';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class CommunicationApi {
  /**
   * Get list of products.
   *
   * @static
   * @memberof CommunicationApi
   */
  public static getCommunication = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<ICommunicationResponse[]>>(endpoints.GET_COMMUNICATION, {
      page,
      itemsPerPage,
      ...filters,
    });
}

export { CommunicationApi };
