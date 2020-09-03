import { ConfigApi } from '../api/client';
import { ConfigErr, errorFactory } from '../errors';
import { IConfigResponse, IConfigParameter } from '../types';

export const postConfig = async (
  parameter: IConfigParameter,
): Promise<IConfigResponse> => {
  // reponse ??
  const response = await ConfigApi.postConfig(parameter);

  if (!response.data) {
    throw errorFactory.create(ConfigErr.POST_CONFIG_FAILED);
  }

  return response.data;
};
