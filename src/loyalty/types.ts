import { IOrganizationResponse } from "../organization/types";

export interface ILoyaltyResponse {
  id: string;
  uri: string;
  ownerUri: string;
  owner: IOrganizationResponse;
  discountType: DiscountTypeEnum;
  percentage: number;
  amount: number;
  amountUsed?: number;
  rewards: ILoyaltyCardReward[];
  enabled: boolean;
  consumerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoyaltyCardReward {
  requiredValue: number;
  discountType: DiscountTypeEnum;
  amount?: number;
  percentage?: number;
  discountUri: string;
}

export enum DiscountTypeEnum {
  PERCENT = 'percent',
  AMOUNT = 'amount',
}