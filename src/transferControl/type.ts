import {
    BasePaystackResponse,
    BaseResponse,
    PaginationMetadata,
  } from "../types";
  
  interface BalanceEntry {
    currency: string;
    balance: number;
  }
  export type Balance = BaseResponse & {
    data: BalanceEntry[];
  };
  
  interface LedgerBalanceEntry {
    integration: number;
    domain: string;
    balance: number;
    currency: string;
    difference: number;
    reason: string;
    model_responsible: string;
    model_row: number;
    id: number;
    createdAt: string;
    updatedAt: string;
  }
  export type BalanceLedger = BaseResponse & {
    data: LedgerBalanceEntry[];
    meta: PaginationMetadata;
  };
  
  export interface ResendOTPPayload {
    /** Transfer code */
    transfer_code: string;
    /** Either resend_otp or transfer */
    reason: "resend_otp" | "transfer";
  }
  export type ResendOTPResponse = BasePaystackResponse;
  export type DisableOTPResponse = BasePaystackResponse;
  export type FinalizeDisableOTPResponce = BasePaystackResponse;
  export type EnableOTPResponce = BasePaystackResponse;
  export abstract class BaseTransferControl {
    abstract checkBalance(): Promise<Balance>;
  
    abstract fetchBalanceLedger(): Promise<BalanceLedger>;
  
    abstract resendOTP(payload: ResendOTPPayload): Promise<BasePaystackResponse>;
  
    abstract disableOTP(): Promise<DisableOTPResponse>;
  
    abstract finalizeDisableOTP(): Promise<FinalizeDisableOTPResponce>;
  
    abstract enableOTP(): Promise<EnableOTPResponce>;
  }
  