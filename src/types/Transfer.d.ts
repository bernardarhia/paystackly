
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

export type TransferInitializeResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
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
    });
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
  abstract initializeWithMobileMoney(
    payload: InitializeTransferPayload
  ): Promise<TransferInitializeResponse>;

  abstract initializeWithBank(
    payload: InitializeTransferPayload
  ): Promise<any>;

  abstract initializeWithAuthorizationCode(
    payload: InitializeTransferWithAuthorizationPayload
  ): Promise<any>;

  abstract create(payload: CreateTransferPayload): Promise<CreateTransferResponse>;

  abstract finalize(payload: CreateFinalizeTransferPayload): Promise<CreateTransferResponse>;
}