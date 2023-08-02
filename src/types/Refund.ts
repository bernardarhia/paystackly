import { BaseQuery, BaseResponse } from "../types";

// REFUND
export interface RefundPayload {
  /**
   * Transaction reference or ID.
   */
  transaction: string;

  /**
   * Amount (in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR) to be refunded to the customer.
   * This field is optional and defaults to the original transaction amount if not provided.
   * The refund amount cannot exceed the original transaction amount.
   */
  amount?: number;

  /**
   * Three-letter ISO currency code. Allowed values are: NGN, GHS, ZAR, or USD.
   */
  currency?: string;

  /**
   * Customer's reason for the refund.
   */
  customer_note?: string;

  /**
   * Merchant's reason for the refund.
   */
  merchant_note?: string;
}

export type RefundResponse = BaseResponse & {
  data: {
    transaction: {
      id: number;
      domain: string;
      reference: string;
      amount: number;
      paid_at: string;
      channel: string;
      currency: string;
      authorization: {
        exp_month: number | null;
        exp_year: number | null;
        account_name: string | null;
      };
      customer: {
        international_format_phone: string | null;
      };
      plan: Record<string, any>;
      subaccount: {
        currency: string | null;
      };
      split: Record<string, any>;
      order_id: string | null;
      paidAt: string;
      pos_transaction_data: Record<string, any> | null;
      source: Record<string, any> | null;
      fees_breakdown: Record<string, any> | null;
    };
    integration: number;
    deducted_amount: number;
    channel: string | null;
    merchant_note: string;
    customer_note: string;
    status: string;
    refunded_by: string;
    expected_at: string;
    currency: string;
    domain: string;
    amount: number;
    fully_deducted: boolean;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
};

export interface ListRefundQuery extends BaseQuery {
  /**
   * Identifier for transaction to be refunded
   */
  transaction?: string;
  /**
   * Three-letter ISO currency. Allowed values are: NGN, GHS, ZAR or USD
   */
  currency?: string;
}
export interface ListRefundResponseData {
  id: number;
  integration: number;
  domain: string;
  transaction: number;
  dispute: number;
  amount: number;
  deducted_amount: number | null;
  currency: string;
  channel: string;
  fully_deducted: number | null;
  refunded_by: string;
  refunded_at: string;
  expected_at: string;
  settlement: any | null; // The actual structure of the 'settlement' property is unknown from the provided data.
  customer_note: string;
  merchant_note: string;
  created_at: string;
  updated_at: string;
  status: string;
}

export type ListRefundResponse = BaseResponse & {
  data: ListRefundResponseData[];
};

export interface FetchRefundParam {
  reference: string;
}

export type FetchReFundReponse = BaseResponse & {
  data: {
    integration: number;
    transaction: number;
    dispute: number | null;
    settlement: any | null; // The actual structure of the 'settlement' property is unknown from the provided data.
    domain: string;
    amount: number;
    deducted_amount: number;
    fully_deducted: boolean;
    currency: string;
    channel: string;
    status: string;
    refunded_by: string;
    refunded_at: string;
    expected_at: string;
    customer_note: string;
    merchant_note: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
};

export abstract class BaseRefund {
  abstract create(payload: RefundPayload): Promise<RefundResponse>;
  abstract list(queryParams: ListRefundQuery): Promise<ListRefundResponseData>;
  abstract fetch(param: FetchRefundParam): Promise<FetchReFundReponse>;
}
