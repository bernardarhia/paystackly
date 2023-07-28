import { BasePaystackResponse, BaseQuery, PayStackCurrency } from ".";

type TransactionSplitBearerType =
  | "subaccount"
  | "account"
  | "all-proportional"
  | "all";
type TransactionSplitType = "percentage" | "flat";
export interface CreateTransactionSplitPayload {
  /**
   * Name of the transaction split.
   */
  name: string;

  /**
   * The type of transaction split you want to create. Possible values: percentage | flat
   */
  type: TransactionSplitType;

  /**
   * Any of NGN, GHS, ZAR, or USD.
   */
  currency: PayStackCurrency;

  /**
   * A list of objects containing subaccount code and number of shares: [{ subaccount: 'ACT_xxxxxxxxxx', share: xxx }, { ... }]
   */
  subaccounts: { subaccount: string; share: number }[];

  /**
   * Any of subaccount | account | all-proportional | all
   */
  bearer_type: TransactionSplitBearerType;

  /**
   * Subaccount code.
   */
  bearer_subaccount: string;
}

interface BaseTransactionSplitResponse {
  id: number;
  name: string;
  type: TransactionSplitType;
  currency: PayStackCurrency;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: TransactionSplitBearerType;
  bearer_subaccount: string;
  createdAt: Date;
  updatedAt: Date;
  subaccounts: {
    subaccount: {
      id: number;
      subaccount_code: string;
      business_name: string;
      description: string;
      primary_contact_name: string | null;
      primary_contact_email: string | null;
      primary_contact_phone: string | null;
      metadata: Record<string, string | null> | null;
      percentage_charge: number;
      settlement_bank: string;
      account_number: string;
    };
    share: number;
  }[];
  total_subaccounts: number;
}
export interface CreateTransactionSplitResponse extends BasePaystackResponse {
  data: BaseTransactionSplitResponse;
}

export interface ListTransactionSplitQuery extends BaseQuery {
  /**
   * The name of the split.
   */
  name?: string;

  /**
   * Any of true or false.
   */
  active?: boolean;

  /**
   * Sort by name, defaults to createdAt date.
   */
  sort_by?: string;
}

export interface ListTransactionSplitResponse extends BasePaystackResponse {
  data: BaseTransactionSplitResponse[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}

export interface FetchTransactionSplitResponse
  extends CreateTransactionSplitResponse {}

export interface UpdateTransactionSplitPayload {
  /** Split Id */
  id: string;
  /**
   * Name of the transaction split.
   */
  name: string;

  /**
   * True or False.
   */
  active: boolean;

  /**
   * Any of the following values: subaccount | account | all-proportional | all.
   */
  bearer_type?: TransactionSplitBearerType;

  /**
   * Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount.
   */
  bearer_subaccount?: string;
}

export interface UpdateTransactionSplit
  extends CreateTransactionSplitResponse {}

export interface TransactionSplitSubAccountPayload {
  /** Split Id */
  id: string;
  /**
   * This is the subaccount code.
   */
  subaccount: string;

  /**
   * This is the transaction share for the subaccount.
   */
  share: number;
}

export interface TransactionSplitSubAccountResponse
  extends CreateTransactionSplitResponse {}

export interface RemoveSubAccountFromSplitPayload {
  /** Split Id */
  id: string;

  /** This is the sub account code */
  subaccount: string;
}
export interface RemoveSubAccountFromSplitResponse
  extends BasePaystackResponse {}
