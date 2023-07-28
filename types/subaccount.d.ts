import { BankCodes, BasePaystackResponse, BaseQuery, PaginationMetadata } from ".";

export interface CreateSubaccountPayload {
  /**
   * Name of the business for the subaccount.
   */
  business_name: string;

  /**
   * Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
   */
  settlement_bank: BankCodes;

  /**
   * Bank Account Number.
   */
  account_number: string;

  /**
   * The default percentage charged when receiving on behalf of this subaccount.
   */
  percentage_charge: number;

  /**
   * A description for this subaccount.
   */
  description?: string;

  /**
   * A contact email for the subaccount.
   */
  primary_contact_email?: string;

  /**
   * A name for the contact person for this subaccount.
   */
  primary_contact_name?: string;

  /**
   * A phone number to call for this subaccount.
   */
  primary_contact_phone?: string;

  /**
   * Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.
   * Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}
   */
  metadata?: string;
}

interface SubaccountData {
  integration: number;
  domain: string;
  subaccount_code: string;
  business_name: string;
  description: string | null;
  primary_contact_name: string | null;
  primary_contact_email: string | null;
  primary_contact_phone: string | null;
  metadata: Record<string, unknown> | null;
  percentage_charge: number;
  is_verified: boolean;
  settlement_bank: string;
  account_number: string;
  settlement_schedule: string;
  active: boolean;
  migrate: boolean;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSubaccountResponse extends BasePaystackResponse {
  data: SubaccountData;
}

export interface ListSubaccountQuery extends BaseQuery {}
export interface ListSubaccountResponse
  extends BasePaystackResponse,
    PaginationMetadata {
  data: SubaccountData[];
}

export interface FetchSubAccountResponse extends CreateSubaccountResponse {}

export interface UpdateSubAccountPayload
  extends Partial<CreateSubaccountPayload> {
  /** Subaccount's ID or code */
  id: string;
  /**
   * Activate or deactivate a subaccount. Set value to true to activate subaccount or false to deactivate the subaccount.
   */
  active?: boolean;

  /**
   * Bank Account Number (optional for updates).
   */
  account_number?: string;
   /**
   * The default percentage charged when receiving on behalf of this subaccount.
   */
  percentage_charge?: number;
    /**
   * A description for this subaccount.
   */
  desceription?: string;
}

export interface UpdateSubAccountReponse extends CreateSubaccountResponse{}