import { getRequestData } from "../constants";
import {
  ChargeAuthorizationPayload,
  ExportTransactionQueryParams,
  ExportTransactionResponse,
  ListTransactionsQuery,
  ListTransactionsResponse,
  PartialDebitPayload,
  PartialDebitResponse,
  TransactionBase,
  TransactionResponse,
  TransactionTimelineResponse,
  TransactionTotalQueryParams,
  TransactionTotalResponse,
} from "../types";
import { formatQueryParams, sendRequest } from "../utils";

export class Transaction extends TransactionBase {
  constructor() {
    super();
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