export interface IMediaResponse {
  id: 'string';
  uri: 'string';
  width: number;
  height: number;
  caption: {
    contentUrl: 'string';
    description: 'string';
    duration: 'string';
    encodingFormat: 'string';
    size: number;
    name: 'string';
    id: 'string';
  };
  thumbnail: {
    id: 'string';
    uri: 'string';
    width: number;
    height: number;
    caption: {
      contentUrl: 'string';
      description: 'string';
      duration: 'string';
      encodingFormat: 'string';
      size: number;
      name: 'string';
      id: 'string';
    };
  };
}

export interface IMediaParameter {
  id: 'string';
  domain: 'string';
  type: object;
}
