import {
    BasePaystackResponse,
    BaseQuery,
    BaseResponse,
    PaginationMetadata,
    PayStackCurrency,
  } from "../types";
  
  // TRANSACTION SPLIT
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
  export type CreateTransactionSplitResponse = BaseResponse & {
    data: BaseTransactionSplitResponse;
  };
  
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
  
  export type ListTransactionSplitResponse = BaseResponse &
    PaginationMetadata & {
      data: BaseTransactionSplitResponse[];
    };
  
  export type FetchTransactionSplitResponse = CreateTransactionSplitResponse;
  
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
  
  export type UpdateTransactionSplit = CreateTransactionSplitResponse;
  
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
  
  export type TransactionSplitSubAccountResponse = CreateTransactionSplitResponse;
  
  export interface RemoveSubAccountFromSplitPayload {
    /** Split Id */
    id: string;
  
    /** This is the sub account code */
    subaccount: string;
  }
  export type RemoveSubAccountFromSplitResponse = BasePaystackResponse;
  
  export abstract class BaseTransactionSplit {
    abstract create(
      payload: CreateTransactionSplitPayload
    ): Promise<CreateTransactionSplitResponse>;
    abstract list(
      queryParams: ListTransactionSplitQuery
    ): Promise<ListTransactionSplitResponse>;
    abstract fetch(payload: {
      id: string;
    }): Promise<FetchTransactionSplitResponse>;
    abstract update(
      payload: UpdateTransactionSplitPayload
    ): Promise<UpdateTransactionSplit>;
    abstract addSubAccount(
      payload: TransactionSplitSubAccountPayload
    ): Promise<TransactionSplitSubAccountResponse>;
    abstract updateSubAccount(
      payload: TransactionSplitSubAccountPayload
    ): Promise<TransactionSplitSubAccountResponse>;
    /**@param id - The id of the split */
    abstract removeSubAccount(payload: {
      id: string;
    }): Promise<RemoveSubAccountFromSplitResponse>;
  }
  