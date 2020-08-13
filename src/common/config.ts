import { getGlobalObject } from './store';
import { initializeApi } from './api';
import { ErrorFactory, CommonErr } from './errors';

export interface InitOptions {
  apiKey: string;
  apiSecret: string;
  apiUrl?: string;
}

const errorFactory = new ErrorFactory('config', 'Config');

export function initializeApp(options: InitOptions): void {
  if (
    typeof options.apiKey === 'undefined' ||
    typeof options.apiSecret === 'undefined'
  ) {
    throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
  }

  if (options.apiUrl && !options.apiUrl.match(/https?:\/\/[\w-.]+\/?$/)) {
    throw errorFactory.create(CommonErr.INVALID_URI);
  }

  const globalObject = getGlobalObject();
  globalObject.SHERL_API_KEY = options.apiKey;
  globalObject.SHERL_API_SECRET = options.apiSecret;

  initializeApi(options.apiUrl);
}
