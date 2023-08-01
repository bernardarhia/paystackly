import { Http } from "../core/Http";
import {
  BaseTransactionPayload,
  ChargeAuthorizationPayload,
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
} from "../types";
import { formatQueryParams } from "../utils";

export class Transaction extends TransactionBase {
  private endpoint = "/transaction";
  constructor() {
    super();
  }

  async initialize(payload: BaseTransactionPayload): Promise<InitializeTransactionResponse>{
    try {
      payload.amount = payload.amount * 100;
      return await Http.post<BaseTransactionPayload, InitializeTransactionResponse>(
        `${this.endpoint}/initialize`,
        payload
      );
    } catch (error: any) {
      return error.response.data;
    }
  }
  /**
   *
   * @param reference  - reference from transaction
   */
  async verify(reference: string): Promise<TransactionResponse> {
    return await this.baseRequest<TransactionResponse>(
      `${this.endpoint}/verify/${reference}`
    );
  }
  async list(params: ListTransactionsQuery): Promise<ListTransactionsResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    return await this.baseRequest<ListTransactionsResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  /**
   *
   * @param id  - id of transaction
   */
  async fetch(id: string): Promise<TransactionResponse> {
    return await this.baseRequest<TransactionResponse>(
      `${this.endpoint}/${id}`
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
  /**
   *
   * @param reference  - id or reference number from transaction
   */
  async readTransactionTimeline(
    id: string
  ): Promise<TransactionTimelineResponse> {
    return await this.baseRequest<TransactionTimelineResponse>(
      `${this.endpoint}/timeline/${id}`
    );
  }
  async total(
    params: TransactionTotalQueryParams
  ): Promise<TransactionTotalResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    return await this.baseRequest<TransactionTotalResponse>(
      `${this.endpoint}/totals${formattedQueryString}`
    );
  }
  async export(
    params: ExportTransactionQueryParams
  ): Promise<ExportTransactionResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    return await this.baseRequest<ExportTransactionResponse>(
      `${this.endpoint}/export${formattedQueryString}`
    );
  }
  async partialDebit(
    payload: PartialDebitPayload
  ): Promise<PartialDebitResponse> {
      payload.amount = payload.amount * 100;
      return await Http.post<PartialDebitPayload, ExportTransactionResponse>(
        `${this.endpoint}/partial_debit`,
        payload
      );
  
  }

  async baseRequest<R>(url: string): Promise<R> {
      return await Http.get<R>(url);
  }
}
