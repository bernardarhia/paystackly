import {
  BasePaystackResponse,
  BaseQuery,
  BaseResponse,
  PaginationMetadata,
} from "../types";

export abstract class BaseDedicatedVirtualAccount {
  abstract create(payload: any): Promise<any>;
  abstract assign(
    payload: AssignDedicatedVirtualAccountPayload
  ): Promise<AssignDedicatedVirtualAccountResponse>;
  abstract list(
    payload: ListDedicatedVirtualAccountParams
  ): Promise<ListDedicatedVirtualAccountResponse>;
  abstract fetch(
    params: FetchDedicatedVirtualAccountParam
  ): Promise<FetchDedicatedVirtualResponse>;
  abstract queryAccount(
    params: QueryDedicatedAccountParams
  ): Promise<QueryDedicatedAccountResponse>;
  abstract deactivate(
    params: DeactivateDedicatedAccountParams
  ): Promise<SplitTransactionResponse>;
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

export interface DeactivateDedicatedAccountParams {
  /* ID of dedicated virtual account */
  dedicated_account_id: number;
}

export interface QueryDedicatedAccountParams {
  /* Virtual account number to requery */
  account_number: string;

  /* The bank's slug in lowercase, without spaces e.g. wema-bank */
  provider_slug: string;

  /* The day the transfer was made in YYYY-MM-DD format */
  date?: string;
}

export type QueryDedicatedAccountResponse = BasePaystackResponse;

export type FetchDedicatedVirtualAccountParam =
  DeactivateDedicatedAccountParams;

export type FetchDedicatedVirtualResponse = BaseResponse<{
  transactions: unknown[];
  subscriptions: unknown[];
  authorizations: unknown[];
  first_name: null | string;
  last_name: null | string;
  email: string;
  phone: null | string;
  metadata: null | Object;
  domain: string;
  customer_code: string;
  risk_action: string;
  id: number;
  integration: number;
  createdAt: string;
  updatedAt: string;
  created_at: string;
  updated_at: string;
  total_transactions: number;
  total_transaction_value: unknown[];
  dedicated_account: {
    id: number;
    account_name: string;
    account_number: string;
    created_at: string;
    updated_at: string;
    currency: string;
    active: boolean;
    assigned: boolean;
    provider: {
      id: number;
      provider_slug: string;
      bank_id: number;
      bank_name: string;
    };
    assignment: {
      assignee_id: number;
      assignee_type: string;
      account_type: string;
      integration: number;
    };
  };
}>;

export interface ListDedicatedVirtualAccountParams extends BaseQuery {
  /* Status of the dedicated virtual account */
  active: boolean;

  /* The currency of the dedicated virtual account. Only NGN is currently allowed */
  currency: "NGN";

  /* The bank's slug in lowercase, without spaces e.g. wema-bank */
  provider_slug?: string;

  /* The bank's ID e.g. 035 */
  bank_id?: string;

  /* The customer's ID */
  customer?: string;
}

export type ListDedicatedVirtualAccountResponse = BaseResponse<
  {
    customer: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      customer_code: string;
      phone: string;
      risk_action: string;
      international_format_phone: null | string;
    };
    bank: {
      name: string;
      id: number;
      slug: string;
    };
    id: number;
    account_name: string;
    account_number: string;
    created_at: string;
    updated_at: string;
    currency: string;
    split_config: {
      subaccount: string;
    };
    active: boolean;
    assigned: boolean;
  }[] &
    PaginationMetadata
>;

export interface AssignDedicatedVirtualAccountPayload {
  /* Customer email address */
  email: string;

  /* Customer's first name */
  first_name: string;

  /* Customer's last name */
  last_name: string;

  /* Customer's phone number */
  phone: string;

  /* The bank slug for preferred bank. To get a list of available banks, use the List Banks endpoint, passing pay_with_bank_transfer=true query parameter */
  preferred_bank: string;

  /* Currently accepts NG only*/
  country: "NG";

  /* Customer's account number */
  account_number?: string;

  /* Customer's Bank Verification Number */
  bvn?: string;

  /* Customer's bank code */
  bank_code?: string;

  /* Subaccount code of the account you want to split the transaction with */
  subaccount?: string;

  /* Split code consisting of the lists of accounts you want to split the transaction with */
  split_code?: string;
}

export type AssignDedicatedVirtualAccountResponse = BasePaystackResponse;
