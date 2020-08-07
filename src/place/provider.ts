import { getPlaces } from './actions';

class PlaceProvider {
  public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getPlaces(page, itemsPerPage, filters);
  }
  
}

export { PlaceProvider };
