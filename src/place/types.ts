export interface IPlaceResponse {
  id: string;
  uri: string;
  createdAt: string;
  country: string;
  locality: string;
  region: string;
  department: string;
  postalCode: string;
  streetAddress: string;
  complementaryStreetAddress: string;
  name: string;
  originId: string;
  latitude: number;
  longitude: number;
}