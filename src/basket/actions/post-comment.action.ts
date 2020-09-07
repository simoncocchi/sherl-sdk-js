import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, ICommentParameter } from '../types';

export const postComment = async (
  parameter: ICommentParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postComment(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
