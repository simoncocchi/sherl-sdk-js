export interface IPaymentResponse {
  Id: string;
  Tag: string;
  CreationDate: Date;
  UserId: string;
  AccessKey: string;
  PreregistrationData: string;
  RegistrationData: string;
  CardId: string;
  CardType: string;
  CardRegistrationURL: string;
  ResultCode: string;
  ResultMessage: string;
  Currency: string;
  Status: string;
}
