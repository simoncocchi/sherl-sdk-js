import { getAutocomplete } from './actions';

class SearchProvider {
  public autocomplete(
    q: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAutocomplete(q, filters);
  }
}

export { SearchProvider };
