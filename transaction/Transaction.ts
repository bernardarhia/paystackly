import querystring from "querystring";
import { getRequestData } from "../constants";
import {
  ExportTransactionQueryParams,
  ExportTransactionResponse,
  InitializePaymentPayload,
  InitializePaymentResponse,
  ListTransactionsQuery,
  ListTransactionsResponse,
  TransactionResponse,
  TransactionTimelineResponse,
  TransactionTotalQueryParams,
  TransactionTotalResponse,
} from "../types/transaction";
import { sendRequest } from "../utils";

abstract class TransactionBase {
  abstract initialize(
    data: InitializePaymentPayload,
  ): Promise<InitializePaymentResponse>;
  abstract verify(reference: number | string): Promise<TransactionResponse>;
  abstract list(
    params: ListTransactionsQuery,
  ): Promise<ListTransactionsResponse>;
  abstract fetch(id: number | string): Promise<TransactionResponse>;
  abstract readTimeline(
    id: number | string,
  ): Promise<TransactionTimelineResponse>;
  abstract total(
    params: TransactionTotalQueryParams,
  ): Promise<TransactionTotalResponse>;

  abstract export(
    params: ExportTransactionQueryParams,
  ): Promise<ExportTransactionResponse>;
}

export class Transaction extends TransactionBase {
  async initialize(
    payload: InitializePaymentPayload,
  ): Promise<InitializePaymentResponse | any> {
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
  ): Promise<ListTransactionsResponse | null> {
    let formattedQueryString: string;

    if (params && Object.keys(params).length) {
      formattedQueryString = `?${querystring.stringify(params as any)}`;
    }
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

  /**
   *
   * @param reference  - id or reference number from transaction
   */
  async readTimeline(id: string): Promise<TransactionTimelineResponse> {
    return await sendRequest<TransactionTimelineResponse>(
      getRequestData("GET", `/${id}`).readTransactionTimeLine,
    );
  }
  async total(
    params: TransactionTotalQueryParams,
  ): Promise<TransactionTotalResponse> {
    let formattedQueryString: string;

    if (params && Object.keys(params).length) {
      formattedQueryString = `?${querystring.stringify(params as any)}`;
    }
    return await sendRequest<TransactionTotalResponse>(
      getRequestData("GET", formattedQueryString).transactionTotal,
    );
  }
  async export(
    params: ExportTransactionQueryParams,
  ): Promise<ExportTransactionResponse> {
    let formattedQueryString: string;

    if (params && Object.keys(params).length) {
      formattedQueryString = `?${querystring.stringify(params as any)}`;
    }
    return await sendRequest<ExportTransactionResponse>(
      getRequestData("GET", formattedQueryString).exportTransaction,
    );
  }
}
