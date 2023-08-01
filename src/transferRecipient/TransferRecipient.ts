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
    >(`${this.endpoint}`, payload);
  }
  async fetch(
    payload: FetchTransferRecipientPayload
  ): Promise<TransferRecipientResponse> {
    return await Http.get<TransferRecipientResponse>(
      `${this.endpoint}/${payload.id}`
    );
  }
  async update(
    payload: UpdateTransferRecipientPayload
  ): Promise<TransferRecipientResponse> {
    const { id, ...body } = payload;
    return await Http.put<
      Omit<UpdateTransferRecipientPayload, "id">,
      TransferRecipientResponse
    >(`${this.endpoint}/${id}`, body);
  }
  async delete(
    payload: DeleteTransferRecipientPayload
  ): Promise<DeleteTransferRecipientResponse> {
    return await Http.delete<
      DeleteTransferRecipientPayload,
      DeleteTransferRecipientResponse
    >(`${this.endpoint}/${payload.id}`);
  }
  async createBulk(
    payload: CreateBulkTransferRecipientsPayload
  ): Promise<CreateBulkTransferRecipientsResponse> {
    return await Http.post<
      CreateBulkTransferRecipientsPayload,
      CreateBulkTransferRecipientsResponse
    >(`${this.endpoint}/bulk`, payload);
  }
  async list(
    queryParams: ListTransferRecipientQuery
  ): Promise<ListTransferRecipientResponse> {
    let formattedQueryString: string = formatQueryParams(queryParams);
    return Http.get<ListTransferRecipientResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
}
