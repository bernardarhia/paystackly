import { BasePaystackErrorResponse, BasePaystackResponse, BasePaystackSuccessResponse, PayStackCurrency } from "../types";

/** ============= TRANSFER ============ */
export type TransferType = "nuban" | "basa" | "mobile_money";
export interface BaseTransferInitializerPayload {
  /** Recipient Type. It could be one of: nuban, mobile_money or basa */
  type: TransferType;

  /** A name for the recipient */
  name: string;
  /** Currency for the account receiving the transfer */
  currency: PayStackCurrency;
}

export interface CreateTransferPayload {
  source: "balance";
  amount: number;
  reference: string;
  recipient: string;
  reason: string;
}
export interface CreateFinalizeTransferPayload {
  transfer_code: string;
  otp: string;
}

export type CreateTransferResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        reference: string;
        integration: number;
        domain: string;
        amount: number;
        currency: PayStackCurrency;
        source: "balance";
        reason: string;
        recipient: number;
        status: "success" | "failed" | "abandoned";
        transfer_code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
      };
    });

    // Define an abstract class
export abstract class BaseTransfer {
  abstract initialize(payload: CreateTransferPayload): Promise<CreateTransferResponse>;
  abstract finalize(payload: CreateFinalizeTransferPayload): Promise<CreateTransferResponse>;
}