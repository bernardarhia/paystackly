import { BaseResponse } from "../types";

export abstract class BaseDedicatedVirtualAccount {
  abstract create(payload: any): Promise<any>;
  abstract assign(payload: any): Promise<any>;
  abstract list(payload: any): Promise<any>;
  abstract fetch(params: any): Promise<any>;
  abstract queryAccount(params: any): Promise<any>;
  abstract deactivate(params: any): Promise<any>;
  abstract splitTransaction(payload: any): Promise<any>;
  abstract removeSplitTransaction(
    payload: RemoveSplitTransactionPayload
  ): Promise<RemoveSplitTransactionResponse>;
  abstract fetchBankProviders(): Promise<FetchBankProvidersResponse>;
}

export type FetchBankProvidersResponse = BaseResponse<
  {
    provider_slug: string;
    bank_id: number;
    bank_name: string;
    id: number;
  }[]
>;

export interface RemoveSplitTransactionPayload {
  /* Dedicated virtual account number */
  account_number: string;
}

export type RemoveSplitTransactionResponse = BaseResponse<{
  id: number;
  split_config: Object;
  account_name: string;
  account_number: string;
  currency: string;
  assigned: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}>;
