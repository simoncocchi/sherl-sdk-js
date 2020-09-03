import { getConfig, postConfig } from './actions';
import { IConfigParameter } from './types';

class ConfigProvider {
  public getConfig(code: string) {
    return getConfig(code);
  }

  public postConfigs(parameter: IConfigParameter) {
    return postConfig(parameter);
  }
}

export { ConfigProvider };
