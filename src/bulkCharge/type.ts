// ======================= BULK CHARGE ===================

import {
  BasePaystackResponse,
  BaseQuery,
  BaseResponse,
  PaginationMetadata,
} from "../types";

export type BulkChargesPayload = {
  authorization: string;
  amount: number;
  reference: string;
};
export type BulkChargesResponse = BaseResponse<{
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
}>;

export type BulkChargeListsQuery = BaseQuery;

interface BulkChargesData {
  domain: string;
  batch_code: string;
  status: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type BulkChargeListsReponse = BaseResponse<
  BulkChargesData[] & PaginationMetadata
>;
export type FetchBulkChargeBatchResponse = BaseResponse<{
  domain: string;
  batch_code: string;
  status: string;
  id: number;
  total_charges: number;
  pending_charges: number;
  createdAt: string;
  updatedAt: string;
}>;
export interface FetchChargesInBatch extends BaseQuery {
  /** Id or Code of the bulk charge you want to retrieve */
  id: string;
  /**
   * Either one of these values: pending, success or failed
   */
  status?: "pending" | "success" | "failed";
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

export type FetchChargesInBatchResponse = BaseResponse<
  BulkChargeItem[] & PaginationMetadata
>;

export abstract class BaseBulkCharges {
  abstract initilize(
    payload: BulkChargesPayload[]
  ): Promise<BulkChargesResponse>;
  abstract list(query: BulkChargeListsQuery): Promise<BulkChargeListsReponse>;
  abstract fetchBulkChargeBatch(payload: {
    id: string;
  }): Promise<FetchBulkChargeBatchResponse>;
  abstract fetchChargesInBatch(
    params?: FetchChargesInBatch
  ): Promise<FetchChargesInBatchResponse>;
  abstract pause(payload: {
    batch_code: string;
  }): Promise<BasePaystackResponse>;
  abstract resume(payload: {
    batch_code: string;
  }): Promise<BasePaystackResponse>;
}
