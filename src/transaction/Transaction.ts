import { Http } from "../core/Http";
import {
  ExportTransactionQueryParams,
  ExportTransactionResponse,
  InitializeTransactionResponse,
  ListTransactionsQuery,
  ListTransactionsResponse,
  PartialDebitPayload,
  PartialDebitResponse,
  TransactionBase,
  TransactionResponse,
  TransactionTimelineResponse,
  TransactionTotalQueryParams,
  TransactionTotalResponse,
} from "./type";
import { formatQueryParams } from "../utils";
import { BaseTransactionPayload, ChargeAuthorizationPayload } from "../types";

export class Transaction extends TransactionBase {
  private endpoint = "/transaction";
  constructor() {
    super();
  }

  async initialize(
    payload: BaseTransactionPayload
  ): Promise<InitializeTransactionResponse> {
    try {
      payload.amount = payload.amount * 100;
      return await Http.post<
        BaseTransactionPayload,
        InitializeTransactionResponse
      >(`${this.endpoint}/initialize`, payload);
    } catch (error: any) {
      return error.response.data;
    }
  }
  async verify(payload: { reference: string }): Promise<TransactionResponse> {
    return await this.baseRequest<TransactionResponse>(
      `${this.endpoint}/verify/${payload.reference}`
    );
  }
  async list(query?: ListTransactionsQuery): Promise<ListTransactionsResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await this.baseRequest<ListTransactionsResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }

  async fetch(payload: { id: string }): Promise<TransactionResponse> {
    return await this.baseRequest<TransactionResponse>(
      `${this.endpoint}/${payload.id}`
    );
  }

  async chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse> {
    try {
      payload.amount = payload.amount * 100;
      return await Http.post<ChargeAuthorizationPayload, TransactionResponse>(
        `${this.endpoint}/charge_authorization`,
        payload
      );
    } catch (error: any) {
      return error.response.data;
    }
  }

  async readTransactionTimeline(payload: {
    id: string;
  }): Promise<TransactionTimelineResponse> {
    return await this.baseRequest<TransactionTimelineResponse>(
      `${this.endpoint}/timeline/${payload.id}`
    );
  }
  async total(
    query?: TransactionTotalQueryParams
  ): Promise<TransactionTotalResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await this.baseRequest<TransactionTotalResponse>(
      `${this.endpoint}/totals${formattedQueryString}`
    );
  }
  async export(
    query?: ExportTransactionQueryParams
  ): Promise<ExportTransactionResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await this.baseRequest<ExportTransactionResponse>(
      `${this.endpoint}/export${formattedQueryString}`
    );
  }
  async partialDebit(
    payload: PartialDebitPayload
  ): Promise<PartialDebitResponse> {
    payload.amount = payload.amount * 100;
    return await Http.post<PartialDebitPayload, PartialDebitResponse>(
      `${this.endpoint}/partial_debit`,
      payload
    );
  }

  async baseRequest<R>(url: string): Promise<R> {
    return await Http.get<R>(url);
  }
}
