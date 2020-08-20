import { IImageObject } from '../person/types';

export interface IGalleryResponse {
  [key: string]: [
    {
      id: string;
      uri: string;
      consumerId: string;
      createdAt: string;
      categoryUri: string;
      media: IImageObject;
    },
  ];
}
