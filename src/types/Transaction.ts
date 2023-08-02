import {
  BaseTransactionPayload,
  BasePaystackResponse,
  BaseQuery,
  CardBrand,
  ChargeAuthorizationPayload,
  PayStackCurrency,
  BaseResponse,
} from "../types";

// TRANSACTIONS
export interface InitializePaymentPayload extends BaseTransactionPayload {
  callback_url?: string;
  /**
   * If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount
   *
   */
  plan?: string;
  /**
   * Number of times to charge customer during subscription to plan
   *
   */
  invoice_limit?: number;
  /**
   * The split code of the transaction split. e.g. SPL_98WF13Eb3w
   *
   */
  split_code?: string;
}

export type InitializeTransactionResponse = BaseResponse & {
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};

export type BaseTransactionResponse = {
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: null;
    gateway_response: string;
    paid_at: Date;
    created_at: Date;
    channel: string;
    currency: PayStackCurrency;
    ip_address: string;
    metadata: string;
    log: {
      start_time: number;
      time_spent: number;
      attempts: number;
      errors: number;
      success: boolean;
      mobile: boolean;
      input: any[];
      history: {
        type: string;
        message: string;
        time: number;
      }[];
    };
    fees: number;
    fees_split: null | number;
    authorization: {
      authorization_code: string;
      bin: string;
      last4: string;
      exp_month: string;
      exp_year: string;
      channel: string;
      card_type: string;
      bank: string;
      country_code: string;
      brand: CardBrand;
      reusable: boolean;
      signature: string;
      account_name: null | string;
    };
    customer: {
      id: number;
      first_name: null | string;
      last_name: null | string;
      email: string;
      customer_code: string;
      phone: null | string;
      metadata: null | Record<string, string | number>;
      risk_action: string;
      international_format_phone: null | string;
    };
    plan: null | string;
    split: any;
    order_id: null | number;
    paidAt: Date;
    createdAt: Date;
    requested_amount: number;
    pos_transaction_data: null | Record<string, string | number>;
    source: null | string;
    fees_breakdown: null | any;
    transaction_date: Date;
    plan_object: any;
    subaccount: any;
  };
};
export type TransactionResponse = BaseResponse & BaseTransactionResponse;
export interface ListTransactionsQuery extends BaseQuery {
  /**
   * Specify an ID for the customer whose transactions you want to retrieve
   */
  customer?: number;
  /**
   *
   * The Terminal ID for the transactions you want to retrieve
   */

  terminalId?: string;
  /**
   * Filter transactions by status ('failed', 'success', 'abandoned')
   */

  status?: "failed" | "success" | "abandoned";
  /**
   * Filter transactions by amount. Specify the amount (in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR)
   */

  amount?: number;
}
export type ListTransactionsResponse = BaseResponse & {
  data: BaseTransactionResponse[];
};

export interface TransactionTimelineResponse extends BasePaystackResponse {
  data: {
    time_spent: number;
    attempts: number;
    authentication: null | any;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: any[];
    channel: string;
    history: {
      type: string;
      message: string;
      time: number;
    }[];
  };
}

export interface TransactionTotalQueryParams extends BaseQuery {}
export interface TransactionTotalResponse extends BasePaystackResponse {
  data: {
    total_transactions: number;
    unique_customers: number;
    total_volume: number;
    total_volume_by_currency: {
      currency: PayStackCurrency;
      amount: number;
    }[];
    pending_transfers: number;
    pending_transfers_by_currency: {
      currency: PayStackCurrency;
      amount: number;
    }[];
  };
}
export interface ExportTransactionQueryParams extends BaseQuery {
  /**
   *Specify an ID for the customer whose transactions you want to retrieve
   */
  customer?: number;
  /**
   *Filter transactions by status ('failed', 'success', 'abandoned')
   */
  status?: "success" | "failed" | "abandoned";
  /**
   *Specify the transaction currency to export. Allowed values are: in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  currency?: PayStackCurrency;
  /**
   *Filter transactions by amount. Specify the amount, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  amount?: number;
  /**
   *Set to true to export only settled transactions. false for pending transactions. Leave undefined to export all transactions
   */
  settled?: boolean;
  /**
   * An ID for the settlement whose transactions we should export
   */
  settlement?: number;
  /**
   * Specify a payment page's id to export only transactions conducted on said page
   */
  payment_page?: number;
}

export interface ExportTransactionResponse extends BasePaystackResponse {
  data: {
    path: string;
  };
  expireAt: Date;
}

export interface PartialDebitPayload {
  /**
   * Authorization Code
   */
  authorization_code: string;

  /**
   * Specify the currency you want to debit. Allowed values are NGN, GHS, ZAR, or USD.
   */
  currency: "NGN" | "GHS" | "ZAR" | "USD";

  /**
   * Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR.
   */
  amount: number;

  /**
   * Customer's email address (attached to the authorization code).
   */
  email: string;

  /**
   * Unique transaction reference. Only -, ., =, and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * (Optional) The minimum amount that should be charged.
   * This is useful if you want to enforce a minimum transaction amount.
   */
  at_least?: string;
}

type PartialDebitResponseExclusion =
  | "pos_transaction_data"
  | "source"
  | "fees_breakdown"
  | "plan_object"
  | "subaccount"
  | "plan"
  | "paidAt"
  | "createdAt"
  | "requested_amount";
export type PartialDebitResponse = Omit<
  TransactionResponse,
  PartialDebitResponseExclusion
>;

export abstract class TransactionBase {
  abstract verify(payload: {
    reference: number | string;
  }): Promise<TransactionResponse>;
  abstract list(
    query?: ListTransactionsQuery
  ): Promise<ListTransactionsResponse>;
  abstract fetch(payload: {
    id: number | string;
  }): Promise<TransactionResponse>;

  abstract chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse>;
  abstract readTransactionTimeline(payload: {
    id: number | string;
  }): Promise<TransactionTimelineResponse>;
  abstract total(
    query?: TransactionTotalQueryParams
  ): Promise<TransactionTotalResponse>;

  abstract export(
    query?: ExportTransactionQueryParams
  ): Promise<ExportTransactionResponse>;
  abstract partialDebit(
    payload: PartialDebitPayload
  ): Promise<PartialDebitResponse>;
}
