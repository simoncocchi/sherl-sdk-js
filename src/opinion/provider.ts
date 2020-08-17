import {
  getAverage,
  getBy,
  getIGive
} from './actions';

class OpinionProvider {
  public iGive(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getIGive(page, itemsPerPage, filters);
  }

  public findBy(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getBy(filters);
  }

  public average(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getAverage(filters);
  }
}

export { OpinionProvider };
