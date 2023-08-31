import { BaseTransferInitializerPayload, TransferType } from "../transfer/type";
import { BankCodes, BasePaystackResponse, BaseQuery, BaseResponse, PaginationMetadata, PayStackCurrency } from "../types";

  export interface CreateTransferRecipientPayload
    extends BaseTransferInitializerPayload {
    account_number: string;
    /**
     * Bank code to the account
     */
    bank_code: BankCodes;
    /**
     * A brief description of the recipient
     */
    description?: string;
  
    /**
     * Currency for the account receiving the transfer
     */
  
    /**
     * An authorization code from a previous transaction
     */
    authorization_code?: string;
  
    /**
     * Store additional information about the recipient in JSON format
     */
    metadata?: object;
  }
  
  type BaseTransferRecipientResponse = {
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
    details: {
      authorization_code: null | string;
      account_number: string;
      account_name: string;
      bank_code: BankCodes;
      bank_name: string;
    };
  };
  export type TransferRecipientResponse = BaseResponse< {
    data: BaseTransferRecipientResponse & { is_deleted: boolean };
  }>;
  
  export interface CreateBulkTransferRecipientsPayload {
    batch: (CreateTransferRecipientPayload & { isDeleted: boolean })[];
  }
  export type CreateBulkTransferRecipientsResponse = BaseResponse<{
    data: {
      success: BaseTransferRecipientResponse[];
      errors: string[];
    };
  }>;
  
  export interface ListTransferRecipientQuery extends BaseQuery {}
  export type ListTransferRecipientResponse = BaseResponse<{
    data: BaseTransferRecipientResponse[];
  } & PaginationMetadata>;
  
  export interface FetchTransferRecipientPayload {
    /** An ID or code for the recipient whose details you want to receive. */
    id: string;
  }
  export type FetchTransferRecipientResponse = TransferRecipientResponse;
  export interface UpdateTransferRecipientPayload {
    /** An ID or code for the recipient whose details you want to fetch. */
    id: string;
    /** A name for the recipient */
    name: string;
    /** The email for the recipient */
    email?: string;
  }
  export type UpdateTransferRecipientResponse = TransferRecipientResponse;
  export interface DeleteTransferRecipientPayload {
    /** An ID or code for the recipient who you want to delete. */
    id: string;
  }
  export type DeleteTransferRecipientResponse = BasePaystackResponse;
  
  export abstract class BaseTransferRecipient {
    abstract create(
      payload: CreateTransferRecipientPayload
    ): Promise<TransferRecipientResponse>;
    abstract createBulk(
      payload: CreateBulkTransferRecipientsPayload
    ): Promise<CreateBulkTransferRecipientsResponse>;
    abstract fetch(
      params: FetchTransferRecipientPayload
    ): Promise<FetchTransferRecipientResponse>;
    abstract list(
      query?: ListTransferRecipientQuery
    ): Promise<ListTransferRecipientResponse>;
    abstract update(
      payload: UpdateTransferRecipientPayload
    ): Promise<UpdateTransferRecipientResponse>;
    abstract delete(
      payload: DeleteTransferRecipientPayload
    ): Promise<DeleteTransferRecipientResponse>;
  }
  