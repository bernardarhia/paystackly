import { BaseQuery, BaseResponse, PaginationMetadata } from "./Paystack";
import { BaseTransactionResponse } from "./Transaction";

export interface ListSettlementQuery extends BaseQuery{
    /** Fetch settlements based on their state. Value can be one of success, processing, pending or failed. */
    status?: string
    /**
     * rovide a subaccount ID to export only settlements for that subaccount. Set to none to export only transactions for the account.
    */
    subaccount?: string
}

interface Settlement {
    id: number;
    domain: string;
    status: string;
    currency: string;
    integration: number;
    total_amount: number;
    effective_amount: number;
    total_fees: number;
    total_processed: number;
    deductions: any;
    settlement_date: string;
    settled_by: any;
    createdAt: string;
    updatedAt: string;
  }
  
  export type ListSettlementsResponse = BaseResponse & {
    data: Settlement[];
    meta: PaginationMetadata;
  }
  
  export interface ListSettlementTransactionQuery extends BaseQuery {
    /** The settlement ID in which you want to fetch its transactions */
    id: string;
  }
  
  export type ListSettlementTransactionsResponse = BaseResponse & {
    data: BaseTransactionResponse[];
    meta: PaginationMetadata;
  }
  