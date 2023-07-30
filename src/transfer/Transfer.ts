import { getRequestData } from "../constants";
import {
  BaseTransfer,
  CreateFinalizeTransferPayload,
  CreateTransferPayload,
  CreateTransferResponse,
  InitializeTransferPayload,
  InitializeTransferWithAuthorizationPayload,
  TransferInitializeResponse,
} from "../types";
import { sendRequest } from "../utils";
export class Transfer extends BaseTransfer {
  constructor() {
    super();
  }
  async initializeWithMobileMoney(
    payload: InitializeTransferPayload
  ): Promise<TransferInitializeResponse> {
    return await this.initializeTransferRecipient(payload);
  }
  async initializeWithBank(payload: InitializeTransferPayload): Promise<any> {
    return await this.initializeTransferRecipient(payload);
  }
  async initializeWithAuthorizationCode(
    payload: InitializeTransferWithAuthorizationPayload
  ): Promise<any> {
    return await this.initializeTransferRecipient(payload);
  }
  private async initializeTransferRecipient(
    payload:
      | InitializeTransferWithAuthorizationPayload
      | InitializeTransferPayload
  ): Promise<TransferInitializeResponse> {
    return await sendRequest<TransferInitializeResponse>(
      getRequestData("POST", null, payload).initializeTransfer
    );
  }
  async create(
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
