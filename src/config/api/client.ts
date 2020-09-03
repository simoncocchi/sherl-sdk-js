import { IConfigResponse, IConfigParameter } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, ConfigErr } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class ConfigApi {
  /**
   * Get one product.
   *
   * @static
   * @memberof ProductApi
   */
  public static getConfig = (code: string) =>
    fetcher.get<IConfigResponse>(
      StringUtils.bindContext(endpoints.GET_CONFIG, { code }),
    );

  public static postConfig = (parameter: IConfigParameter) =>
    fetcher
      .post<IConfigResponse>(endpoints.POST_CONFIGS, {
        // reponse ???
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(ConfigErr.POST_CONFIG_FAILED);
      });
}

export { ConfigApi };
