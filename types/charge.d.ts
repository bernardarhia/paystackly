/** ===========CHARGE============= */

import { BasePaystackResponse, BaseQuery, PaginationMetadata } from ".";

export interface BaseChargePayload {
  /**
   * Customer's email address
   */
  email: string;
  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  amount: number;

  /**
   * An authorization code to charge (don't send if charging a bank account)
   */
  authorization_code?: string;
  /**
   * 4-digit PIN (send with a non-reusable authorization code)
   */
  pin?: string;
  /**
   * A JSON object
   */
  metadata?: Record<string, any>;
  /**
   * Unique transaction reference. Only -, .`, = and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * This is the unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed.
   */
  device_id?: string;
}

export interface ChargeWithMobileMoneyPayload extends BaseChargePayload {
  /**
   * Mobile details (don't send if charging an authorization code, bank or card)
   */
  mobile_money: {
    phone: string;
    provider: string;
  };
}
export interface ChargeWithCardPayload extends BaseChargePayload {
  card: {
    number: string;
    cvv: string;
    expiry_year: string;
    expiry_month: string;
  };
}
export interface ChargeWithBankPayload extends BaseChargePayload {
  /**
   * Bank account to charge (don't send if charging an authorization code)
   */
  bank: {
    account_number: string;
    code: string;
  };
}
export interface ChargeWithUSSDPayload extends BaseChargePayload {
  /**
   * USSD type to charge (don't send if charging an authorization code, bank or card)
   */
  ussd: Record<string, any>;
}

export interface SubmitChargePinPayload {
  pin: string;
  reference: string;
}
export interface SubmitChargeOTPPayload {
  otp: string;
  reference: string;
}
export interface SubmitChargePhonePayload {
  phone: string;
  reference: string;
}

export interface SubmitChargeBirthdayPayload {
  birthday: Date;
  reference: string;
}

export interface SubmitChargeAddressPayload {
  address: string;
  reference: string;
  city: string;
  state: string;
  zipcode: string;
}

type ChargeDataStatus =
  | "pay_offline"
  | "send_pin"
  | "send_address"
  | "send_otp"
  | "send_address"
  | "send_birthday";
export interface BaseChargeResponse extends BasePaystackResponse {
  data: { reference: string; status: ChargeDataStatus; display_text: string };
}

// ======================= BULK CHARGE ===================

export type BulkChargesPayload = {
  authorization: string;
  amount: number;
  reference: string;
};
export type BulkChargesResponse = BasePaystackResponse & {
  data: {
    batch_code: string;
    reference: string;
    id: number;
    integration: number;
    domain: string;
    status: string;
    total_charges: number;
    pending_charges: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type BulkChargeListsQuery = BaseQuery;

interface BulkChargesData {
  domain: string;
  batch_code: string;
  status: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface BulkChargeListsReponse extends BasePaystackResponse, PaginationMetadata{
  data: BulkChargesData[];
}


export interface FetchBulkChargeBatchResponse extends BasePaystackResponse {
  data: {
    domain: string;
    batch_code: string;
    status: string;
    id: number;
    total_charges: number;
    pending_charges: number;
    createdAt: string;
    updatedAt: string;
  };
}
export interface FetchChargesInBatch extends BaseQuery{
  /**
   * Either one of these values: pending, success or failed
   */
  status?: "pending"|"success"|"failed"
}
interface BulkChargeItem {
  integration: number;
  bulkcharge: number;
  customer: {
    id: number;
    first_name: string | null;
    last_name: string | null;
    email: string;
    customer_code: string;
    phone: string | null;
    metadata: any | null;
    risk_action: string;
  };
  authorization: {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    account_name: string;
  };
  transaction: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string | null;
    metadata: string;
    log: any | null;
    fees: any | null;
    fees_split: any | null;
    customer: any;
    authorization: any;
    plan: any;
    subaccount: any;
    paidAt: string;
    createdAt: string;
  };
  domain: string;
  amount: number;
  currency: string;
  status: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface FetchChargesInBatchResponse extends BasePaystackResponse, PaginationMetadata{
  data: BulkChargeItem[];
}