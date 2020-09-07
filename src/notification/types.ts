export interface INotificationResponse {
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  code: string;
  email: ILanguage;
  sms: ILanguage;
  push: ILanguage;
  enabled: boolean;
}

export interface ILanguage {
  fr: IMessage;
  en: IMessage;
}

export interface IMessage {
  subject: string;
  text: string;
  html: string;
}

export interface IDisabledEnabledNotificationParameter {
  organizationUri: 'string';
}

export interface IRegistrationParameter {
  token: 'string';
}

export interface INotificationParameter {
  html: 'string';
  subject: 'string';
  text: 'string';
}

export interface IRegistrationResponse {
  personId: 'string';
  registrationToken: 'string';
  createdAt: 'Date';
}
