import { Http } from "../core/Http";
import {
  BaseTransfer,
  BulkTransferPayload,
  BulkTransferResponse,
  CreateFinalizeTransferPayload,
  CreateTransferPayload,
  CreateTransferResponse,
  FetchTransferPayload,
  FetchTransferResponse,
  ListTransferQuery,
  ListTransferResponse,
  VerifyTransferPayload,
  VerifyTransferResponse,
} from "../types";
import { formatQueryParams } from "../utils";
export class Transfer extends BaseTransfer {
  private endpoint = "/transfer";;
  constructor() {
    super();
  }
  async initialize(
    payload: CreateTransferPayload
  ): Promise<CreateTransferResponse> {
    return await Http.post(
      `${this.endpoint}`,
      payload
    );
  }
  async finalize(
    payload: CreateFinalizeTransferPayload
  ): Promise<CreateTransferResponse> {
    return await Http.post<CreateFinalizeTransferPayload, CreateTransferResponse>(
      `${this.endpoint}`,
      payload
    );
  }
  async verify(payload: VerifyTransferPayload): Promise<VerifyTransferResponse> {
    return await Http.get<FetchTransferResponse>(`${this.endpoint}/verify/${payload.reference}`)
  }
  async fetch(payload: FetchTransferPayload): Promise<FetchTransferResponse> {
      return await Http.get<FetchTransferResponse>(`${this.endpoint}/${payload.id}`)
  }
  async list(query?: ListTransferQuery | undefined): Promise<ListTransferResponse> {
    const fromattedString = formatQueryParams(query)
    const url  =`${this.endpoint}${fromattedString}`
      return await Http.get<ListTransferResponse>(url);
  }
  async intializeBulk(payload: BulkTransferPayload): Promise<BulkTransferResponse> {
    return await Http.post<BulkTransferPayload, BulkTransferResponse>(
      `${this.endpoint}`,
      payload
    );
  }
}
//TODO: Add fetch transfer, add verify transfer, list transfers
