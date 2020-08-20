import { IAutocompleteResponse } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class SearchApi {
  /**
   * Get Search.
   *
   * @static
   * @memberof SearchApi
   */
  public static getAutocomplete = (
    q: string,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<IAutocompleteResponse>(endpoints.GET_AUTOCOMPLETE, {
      q,
      ...filters,
    });
}

export { SearchApi };
