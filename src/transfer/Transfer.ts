import { Http } from "../core/Http";
import {
  BaseTransfer,
  CreateFinalizeTransferPayload,
  CreateTransferPayload,
  CreateTransferResponse,
} from "../types";
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
}
//TODO: Add fetch transfer, add verify transfer, list transfers
