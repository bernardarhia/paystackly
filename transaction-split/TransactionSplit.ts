import { getRequestData } from "../constants";
import { HTTP_METHODS } from "../types";
import {
  CreateTransactionSplitPayload,
  CreateTransactionSplitResponse,
  FetchTransactionSplitResponse,
  ListTransactionSplitQuery,
  ListTransactionSplitResponse,
  RemoveSubAccountFromSplitResponse,
  TransactionSplitSubAccountPayload,
  TransactionSplitSubAccountResponse,
  UpdateTransactionSplit,
  UpdateTransactionSplitPayload,
} from "../types/transaction-split";
import { formatQueryParams, sendRequest } from "../utils";

abstract class BaseTransactionSplit {
  abstract create(
    payload: CreateTransactionSplitPayload
  ): Promise<CreateTransactionSplitResponse>;
  abstract list(
    queryParams: ListTransactionSplitQuery
  ): Promise<ListTransactionSplitResponse>;
  /**@param id - The id of the split */
  abstract fetch(id: string): Promise<FetchTransactionSplitResponse>;
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
  abstract removeSubAccount(
    id: string
  ): Promise<RemoveSubAccountFromSplitResponse>;
}
export class TransactionSplit extends BaseTransactionSplit {
  async create(
    payload: CreateTransactionSplitPayload
  ): Promise<CreateTransactionSplitResponse> {
    return await sendRequest<CreateTransactionSplitResponse>(
      getRequestData("POST", null, payload).transactionSplit
    );
  }
  async list(
    queryParams?: ListTransactionSplitQuery
  ): Promise<ListTransactionSplitResponse> {
    let formattedQueryString: string = formatQueryParams(queryParams);
    return await sendRequest<ListTransactionSplitResponse>(
      getRequestData("GET", formattedQueryString).transactionSplit
    );
  }
  /**@param id - The id of the split */
  async fetch(id: string): Promise<FetchTransactionSplitResponse> {
    return await sendRequest<FetchTransactionSplitResponse>(
      getRequestData("GET", `/${id}`).transactionSplit
    );
  }

  async update(
    payload: UpdateTransactionSplitPayload
  ): Promise<UpdateTransactionSplit> {
    return this.sameRequest<
      UpdateTransactionSplitPayload,
      UpdateTransactionSplit
    >(payload, null, "PUT");
  }

  async addSubAccount(
    payload: TransactionSplitSubAccountPayload
  ): Promise<TransactionSplitSubAccountResponse> {
    return this.sameRequest<
      TransactionSplitSubAccountPayload,
      TransactionSplitSubAccountResponse
    >(payload, "/subaccount/add");
  }

  async updateSubAccount(
    payload: TransactionSplitSubAccountPayload
  ): Promise<TransactionSplitSubAccountResponse> {
    return this.sameRequest<
      TransactionSplitSubAccountPayload,
      TransactionSplitSubAccountResponse
    >(payload, "/subaccount/add");
  }

  /**@param id - The id of the split */
  async removeSubAccount(
    id: string
  ): Promise<RemoveSubAccountFromSplitResponse> {
    return await sendRequest<UpdateTransactionSplit>(
      getRequestData("POST", `/${id}/subaccount/remove`).chargeAuthorization
    );
  }

  private async sameRequest<P extends { id: string }, T>(
    payload: P,
    url?: string,
    method: HTTP_METHODS = "POST"
  ): Promise<T> {
    const id = payload.id;
    delete payload.id;
    const fullUrl = url && url.length ? `${id}/${url}` : id;
    return await sendRequest<T>(
      getRequestData(method, `/${fullUrl}`, payload).chargeAuthorization
    );
  }
}
