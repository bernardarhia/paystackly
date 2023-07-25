import { BasePaymentPayload, BasePaystackResponse, BaseQuery, CardBrand, PayStackCurrency } from ".";

export interface InitializePaymentPayload extends BasePaymentPayload {
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
  
  export interface InitializePaymentResponse extends BasePaystackResponse {
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  }
  
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
  }
  export interface TransactionResponse
  extends BasePaystackResponse,
    BaseTransactionResponse {}
    export interface ListTransactionsQuery extends BaseQuery{
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
       export interface ListTransactionsResponse extends BasePaystackResponse {
         data: BaseTransactionResponse[];
       }


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
  
  export interface TransactionTotalQueryParams {
    /**
     * Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
     */
    perPage: number;
    /**
     * Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
     */
  
    page: number;
    /**
     * A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
     */
  
    from?: Date;
    /**
     * A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
     */
  
    to?: Date;
  }
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
  export interface ExportTransactionQueryParams {
    /**
     * Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
     */
    perPage: number;
    /**
     * Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
     */
  
    page: number;
    /**
     * A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
     */
  
    from?: Date;
    /**
     * A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
     */
    to?: Date;
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
  