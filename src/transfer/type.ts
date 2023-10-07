import {
  BaseQuery,
  BaseResponse,
  PaginationMetadata,
  PayStackCurrency,
} from "../types";

/** ============= TRANSFER ============ */
export type TransferType = "nuban" | "basa" | "mobile_money";
export interface BaseTransferInitializerPayload {
  /** Recipient Type. It could be one of: nuban, mobile_money or basa */
  type: TransferType;
  /** Currency for the account receiving the transfer */
  currency: PayStackCurrency;
}

export interface CreateTransferPayload extends BaseTransferInitializerPayload {
  source: "balance";
  amount: number;
  reference?: string;
  recipient: string;
  reason: string;
}
export interface CreateFinalizeTransferPayload {
  transfer_code: string;
  otp: string;
}
export type CreateTransferResponse = BaseResponse<Transfer>;

interface Transfer {
  domain: string;
  amount: number;
  currency: PayStackCurrency;
  reference: string;
  source: "balance";
  reason: string;
  recipient: number;
  status: "otp";
  transfer_code: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface TransferRecipient {
  domain: string;
  type: string;
  currency: string;
  name: string;
  details: {
    account_number: string;
    account_name: string | null;
    bank_code: string;
    bank_name: string;
  };
  description: string;
  metadata: any | null; // Replace 'any' with the actual type if you have more specific information about this property
  recipient_code: string;
  active: boolean;
  id: number;
  integration: number;
  createdAt: string;
  updatedAt: string;
}
interface Data {
    source_details: any;
    failures: any;
    titan_code: string | null;
    transferred_at: Date | null;
  }

interface BaseFinalizeTransferResponse extends Transfer, Data {}

interface QueuedTransfer {
  reference: string;
  recipient: string;
  amount: number;
  transfer_code: string;
  currency: string;
  status: "received" | string; // You can replace 'string' with the actual status values if you have a predefined list of possible statuses
}

interface QueuedTransfersResponse {
  data: QueuedTransfer[];
}

export type FinalizeTransferResponse = BaseResponse<BaseFinalizeTransferResponse>
export interface BulkTransferPayload {
  source: Pick<CreateTransferPayload, "source">;
  currency: PayStackCurrency;
  transfers: Omit<CreateTransferPayload, "source" | "currency" | "type">[];
}
export type BulkTransferResponse = BaseResponse<QueuedTransfersResponse>

export interface ListTransferQuery extends BaseQuery {
  /** Filter by customer ID */
  customer?: string;
}

export type ListTransferResponse = BaseResponse< (Transfer & { recipient: TransferRecipient })[] & PaginationMetadata>;
export interface FetchTransferPayload {
  /** he transfer ID or code you want to fetch */
  id: string;
}
export type FetchTransferResponse = BaseResponse<Transfer & { recipient: TransferRecipient }>;
export interface VerifyTransferPayload {
  /** he transfer ID or code you want to fetch */
  reference: string;
}
export type VerifyTransferResponse = BaseResponse< Transfer & { recipient: TransferRecipient }>;
export abstract class BaseTransfer {
  abstract initialize(
    payload: CreateTransferPayload
  ): Promise<CreateTransferResponse>;
  abstract finalize(
    payload: CreateFinalizeTransferPayload
  ): Promise<CreateTransferResponse>;
  abstract intializeBulk(
    payload: BulkTransferPayload
  ): Promise<BulkTransferResponse>;
  abstract list(query?: ListTransferQuery): Promise<ListTransferResponse>;
  abstract fetch(payload: FetchTransferPayload): Promise<FetchTransferResponse>;
  abstract verify(
    payload: VerifyTransferPayload
  ): Promise<VerifyTransferResponse>;
}
