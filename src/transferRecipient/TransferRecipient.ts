import { Http } from "../core/Http";
import {
  BaseTransferRecipient,
  CreateBulkTransferRecipientsPayload,
  CreateBulkTransferRecipientsResponse,
  CreateTransferRecipientPayload,
  DeleteTransferRecipientPayload,
  DeleteTransferRecipientResponse,
  FetchTransferRecipientPayload,
  ListTransferRecipientQuery,
  ListTransferRecipientResponse,
  TransferRecipientResponse,
  UpdateTransferRecipientPayload,
} from "../types";
import { formatQueryParams } from "../utils";
export class TransferRecipient extends BaseTransferRecipient {
  private endpoint = "/transferrecipient";

  async create(
    payload: CreateTransferRecipientPayload
  ): Promise<TransferRecipientResponse> {
    return await Http.post<
      CreateTransferRecipientPayload,
      TransferRecipientResponse
    >(this.endpoint, payload);
  }
  async createBulk(
    payload: CreateBulkTransferRecipientsPayload
  ): Promise<CreateBulkTransferRecipientsResponse> {
    return await Http.post<
      CreateBulkTransferRecipientsPayload,
      CreateBulkTransferRecipientsResponse
    >(this.endpoint, payload);
  }
  async fetch(
    payload: FetchTransferRecipientPayload
  ): Promise<TransferRecipientResponse> {
    return await Http.get<TransferRecipientResponse>(
      `${this.endpoint}/${payload.id}`
    );
  }
  async list(
    query: ListTransferRecipientQuery
  ): Promise<ListTransferRecipientResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await Http.get<ListTransferRecipientResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async update(
    payload: UpdateTransferRecipientPayload
  ): Promise<TransferRecipientResponse> {
    const { id, ...body } = payload;
    return await Http.put<
      Omit<UpdateTransferRecipientPayload, "id">,
      TransferRecipientResponse
    >(this.endpoint, body);
  }
  async delete(
    payload: DeleteTransferRecipientPayload
  ): Promise<DeleteTransferRecipientResponse> {
    return await Http.delete<
      UpdateTransferRecipientPayload,
      TransferRecipientResponse
    >(`${this.endpoint}/${payload.id}`);
  }
}
