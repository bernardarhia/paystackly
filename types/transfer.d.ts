import { BankCodes, BasePaystackResponse, PayStackCurrency } from ".";


/** ============= TRANSFER ============ */
type TransferType = "nuban" | "basa" | "mobile_money" | "authorization";
export interface BaseTransferInitializerPayload {
  type: TransferType;
  name: string;
  currency: PayStackCurrency;
}
export interface InitializeTransferPayload
  extends BaseTransferInitializerPayload {
  account_number: string;
  bank_code: BankCodes;
  currency: PayStackCurrency;
}
export interface InitializeTransferWithAuthorizationPayload
  extends BaseTransferInitializerPayload {
  email: string;
  authorization_code: string;
}

export interface TransferInitializeResponse extends BasePaystackResponse {
  data: {
    active: boolean;
    createdAt: Date;
    currency: PayStackCurrency;
    domain: string;
    id: number;
    integration: number;
    name: string;
    recipient_code: string;
    type: TransferType;
    updatedAt: Date;
    is_deleted: boolean;
    isDeleted: boolean;
    details: {
      authorization_code: null | string;
      account_number: string;
      account_name: string;
      bank_code: BankCodes;
      bank_name: string;
    };
  };
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

export interface CreateTransferResponse extends BasePaystackResponse {
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
}

