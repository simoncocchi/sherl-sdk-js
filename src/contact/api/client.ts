import { IContactParameter } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, ContactErr } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ContactApi {
  public static postContact = (parameter: IContactParameter) =>
    fetcher
      .post(endpoints.POST_CONTACT, {
        parameter,
      })
      .catch(_err => {
        throw errorFactory.create(ContactErr.POST_CONTACT_FAILED);
      });
}

export { ContactApi };
