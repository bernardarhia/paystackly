import { Http } from "../core/Http";
import { BaseTransactionSplit } from "../types";
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
} from "../types";
import { formatQueryParams } from "../utils";

export class TransactionSplit extends BaseTransactionSplit {
  private endpoint = "/split";
  constructor() {
    super();
  }
  async create(
    payload: CreateTransactionSplitPayload
  ): Promise<CreateTransactionSplitResponse> {
    return await Http.post<
      CreateTransactionSplitPayload,
      CreateTransactionSplitResponse
    >(this.endpoint, payload);
  }
  async list(
    queryParams?: ListTransactionSplitQuery
  ): Promise<ListTransactionSplitResponse> {
    let formattedQueryString: string = formatQueryParams(queryParams);
    return await Http.get<ListTransactionSplitResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async fetch(payload: { id: string }): Promise<FetchTransactionSplitResponse> {
    return await Http.get<FetchTransactionSplitResponse>(
      `${this.endpoint}/${payload.id}`
    );
  }

  async update(
    payload: UpdateTransactionSplitPayload
  ): Promise<UpdateTransactionSplit> {
    const { id, ...body } = payload;
    return await Http.put<
      Omit<UpdateTransactionSplitPayload, "id">,
      UpdateTransactionSplit
    >(`${this.endpoint}/${id}`, body);
  }

  async addSubAccount(
    payload: TransactionSplitSubAccountPayload
  ): Promise<TransactionSplitSubAccountResponse> {
    const { id, ...body } = payload;
    return await Http.post<
      Omit<TransactionSplitSubAccountPayload, "id">,
      TransactionSplitSubAccountResponse
    >(`${this.endpoint}/${id}/subaccount/add`, body);
  }

  async updateSubAccount(
    payload: TransactionSplitSubAccountPayload
  ): Promise<TransactionSplitSubAccountResponse> {
    const { id, ...body } = payload;
    return await Http.post<
      Omit<TransactionSplitSubAccountPayload, "id">,
      TransactionSplitSubAccountResponse
    >(`${this.endpoint}/${id}/subaccount/add`, body);
  }

  /**@param id - The id of the split */
  async removeSubAccount(payload: {
    id: string;
  }): Promise<RemoveSubAccountFromSplitResponse> {
    return await Http.post<null, UpdateTransactionSplit>(
      `${this.endpoint}/${payload.id}/subaccount/remove`
    );
  }
}
