import { getRequestData } from "../constants";
import { ChargeAuthorizationPayload } from "../types";
import {
  ExportTransactionQueryParams,
  ExportTransactionResponse,
  InitializePaymentPayload,
  InitializePaymentResponse,
  ListTransactionsQuery,
  ListTransactionsResponse,
  PartialDebitPayload,
  PartialDebitResponse,
  TransactionResponse,
  TransactionTimelineResponse,
  TransactionTotalQueryParams,
  TransactionTotalResponse,
} from "../types";
import { formatQueryParams, sendRequest } from "../utils";

abstract class TransactionBase {
  abstract initialize(
    data: InitializePaymentPayload,
  ): Promise<InitializePaymentResponse>;
  abstract verify(reference: number | string): Promise<TransactionResponse>;
  abstract list(
    params: ListTransactionsQuery,
  ): Promise<ListTransactionsResponse>;
  abstract fetch(id: number | string): Promise<TransactionResponse>;

  abstract chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse>;
  abstract viewTransactionTimeline(
    id: number | string,
  ): Promise<TransactionTimelineResponse>;
  abstract total(
    params: TransactionTotalQueryParams,
  ): Promise<TransactionTotalResponse>;

  abstract export(
    params: ExportTransactionQueryParams,
  ): Promise<ExportTransactionResponse>;
  abstract partialDebit(payload: PartialDebitPayload): Promise<PartialDebitResponse>
}

export class Transaction extends TransactionBase {
  async initialize(
    payload: InitializePaymentPayload,
  ): Promise<InitializePaymentResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };
    return await sendRequest<InitializePaymentResponse>(
      getRequestData("POST", null, body).initializeTransaction,
    );
  }

  /**
   *
   * @param reference  - reference from transaction
   */
  async verify(reference: string): Promise<TransactionResponse> {
    return await sendRequest<TransactionResponse>(
      getRequestData("GET", `/${reference}`).verifyTransaction,
    );
  }
  async list(
    params: ListTransactionsQuery,
  ): Promise<ListTransactionsResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    
    return await sendRequest<ListTransactionsResponse>(
      getRequestData("GET", formattedQueryString).listTransactions,
    );
  }
  /**
   *
   * @param id  - id of transaction
   */
  async fetch(id: string): Promise<TransactionResponse> {
    return await sendRequest<TransactionResponse>(
      getRequestData("GET", `/${id}`).fetchTransaction,
    );
  }


  async chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };
    return await sendRequest<TransactionResponse>(
      getRequestData("POST", null, body).chargeAuthorization
    );
  }
  /**
   *
   * @param reference  - id or reference number from transaction
   */
  async viewTransactionTimeline(id: string): Promise<TransactionTimelineResponse> {
    return await sendRequest<TransactionTimelineResponse>(
      getRequestData("GET", `/${id}`).readTransactionTimeLine,
    );
  }
  async total(
    params: TransactionTotalQueryParams,
  ): Promise<TransactionTotalResponse> {
    let formattedQueryString: string = formatQueryParams(params);

    return await sendRequest<TransactionTotalResponse>(
      getRequestData("GET", formattedQueryString).transactionTotal,
    );
  }
  async export(
    params: ExportTransactionQueryParams,
  ): Promise<ExportTransactionResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    return await sendRequest<ExportTransactionResponse>(
      getRequestData("GET", formattedQueryString).exportTransaction,
    );
  }
async partialDebit(payload: PartialDebitPayload): Promise<PartialDebitResponse> {
  const body: Record<string, string | number | any> = {
    ...payload,
    amount: +payload.amount * 100,
  };
  return await sendRequest<PartialDebitResponse>(
    getRequestData("POST", "/partial_debit", body).listTransactions,
  );
}
}