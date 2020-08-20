import { getConfig } from './actions';

class ConfigProvider {
  public value() {
    return getConfig();
  }
}

export { ConfigProvider };
