import { getSubscription } from './actions';

class SubscriptionProvider {
  public oneWithParams(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: { [key: string]: any },
  ) {
    return getSubscription(filters);
  }
}

export { SubscriptionProvider };
