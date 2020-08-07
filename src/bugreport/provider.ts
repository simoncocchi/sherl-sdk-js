import { getBugreport, getBugreports } from './actions';

class BugreportProvider {
public list(
    page = 1,
    itemsPerPage = 10,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getBugreports(page, itemsPerPage, filters);
  }

  public one(id: string) {
    return getBugreport(id);
  }

}

export { BugreportProvider }