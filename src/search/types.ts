import { IOrganizationResponse } from '../organization/types';
import { ICategoryResponse } from '../product/types';

export interface IAutocompleteResponse {
  organization: IOrganizationResponse[];
  category: ICategoryResponse[];
}
