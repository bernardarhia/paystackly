import { getRequestData } from "../constants";
import {
  BaseTransfer,
  CreateFinalizeTransferPayload,
  CreateTransferPayload,
  CreateTransferResponse,
} from "../types";
import { sendRequest } from "../utils";
export class Transfer extends BaseTransfer {
  constructor() {
    super();
  }
  async initialize(
    payload: CreateTransferPayload
  ): Promise<CreateTransferResponse> {
    return await sendRequest<CreateTransferResponse>(
      getRequestData("POST", null, payload).createTransfer
    );
  }
  async finalize(
    payload: CreateFinalizeTransferPayload
  ): Promise<CreateTransferResponse> {
    return await sendRequest<CreateTransferResponse>(
      getRequestData("POST", null, payload).finalizeTransfer
    );
  }
}
//TODO: Add fetch transfer, add verify transfer, list transfers
