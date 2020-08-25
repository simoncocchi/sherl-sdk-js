export interface IApiLoginResponse {
  access_token: string;
}

export interface IAuthCallbackResponse {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: [
    {
      value: string;
      verified: true;
    },
  ];
  photos: [
    {
      value: string;
    },
  ];
  locale: string;
}
