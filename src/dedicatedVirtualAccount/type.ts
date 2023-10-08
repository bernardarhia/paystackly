import { BaseResponse } from "../types";

export abstract class BaseDedicatedVirtualAccount {
  abstract create(payload: any): Promise<any>;
  abstract assign(payload: any): Promise<any>;
  abstract list(payload: any): Promise<any>;
  abstract fetch(params: any): Promise<any>;
  abstract queryAccount(params: any): Promise<any>;
  abstract deactivate(params: any): Promise<any>;
  abstract splitTransaction(
    payload: SplitTransactionPayload
  ): Promise<SplitTransactionResponse>;
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

export interface SplitTransactionPayload {
  /* Customer ID or code */
  customer: string;

  /* Subaccount code of the account you want to split the transaction with */
  subaccount?: string;

  /* Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string;

  /* The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint */
  preferred_bank?: string;
}

export type SplitTransactionResponse = BaseResponse<{
  bank: {
    name: string;
    id: number;
    slug: string;
  };
  account_name: string;
  account_number: string;
  assigned: boolean;
  currency: string;
  metadata: null | Object;
  active: boolean;
  id: number;
  created_at: string;
  updated_at: string;
  assignment: {
    integration: number;
    assignee_id: number;
    assignee_type: string;
    expired: boolean;
    account_type: string;
    assigned_at: string;
    expired_at: null | string;
  };
  split_config: {
    split_code: string;
  };
  customer: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    customer_code: string;
    phone: null | string;
    metadata: null | Object;
    risk_action: string;
  };
}>;
