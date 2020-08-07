export interface IBugReportResponse {
  id: string;
  uri: string;
  consumerId: string;
  osName: string;
  browserName: string;
  windowHeight: number;
  windowWidth: number;
  contactEmail: string;
  message: string;
  createdAt: string;
}