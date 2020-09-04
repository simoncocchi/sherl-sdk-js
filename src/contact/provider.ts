import { postContact } from './actions';
import { IContactParameter } from './types';

class ContactProvider {
  public postContact(parameter: IContactParameter) {
    return postContact(parameter);
  }
}

export { ContactProvider };
