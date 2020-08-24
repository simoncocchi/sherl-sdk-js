import { getHealthy } from './actions';

class HealthyProvider {
  public one() {
    return getHealthy();
  }
}

export { HealthyProvider };
