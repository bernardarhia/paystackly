import { BasePaystackResponse, BaseQuery, BaseResponse } from "./Paystack";

export interface CreateCustomerPayload {
  /** Customer's email address */
  email: string;

  /** Customer's first name */
  first_name: string;

  /** Customer's last name */
  last_name: string;

  /** Customer's phone number */
  phone?: string;

  /** A set of key/value pairs for additional information.
   * It can be used to store additional information in a structured format.
   */
  metadata?: Record<string, any>;
}
export type CustomerResponse = BaseResponse & {
  data: {
    email: string;
    integration: number;
    domain: string;
    customer_code: string;
    id: number;
    identified: boolean;
    identifications: any[] | null;
    createdAt: string;
    updatedAt: string;
  };
};
export interface ListCustomersQuery extends BaseQuery {}
interface Customer {
  integration: number;
  first_name: string | null;
  last_name: string | null;
  email: string;
  phone: string | null;
  metadata: Record<string, any>;
  domain: string;
  customer_code: string;
  risk_action: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
export type ListCustomersResponse = BaseResponse & {
  data: Customer[];
  meta: {
    next: string | null;
    previous: string | null;
    perPage: number;
  };
};
export interface FetchCustomerParam {
  /** An email or customer code for the customer you want to fetch */
  code: string;
}
interface Authorization {
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
  signature: string;
  account_name: string | null;
}

interface FetchCustomer {
  transactions: any[];
  subscriptions: any[];
  authorizations: Authorization[];
  first_name: string | null;
  last_name: string | null;
  email: string;
  phone: string | null;
  metadata: Record<string, any> | null;
  domain: string;
  customer_code: string;
  risk_action: string;
  id: number;
  integration: number;
  createdAt: string;
  updatedAt: string;
  created_at: string;
  updated_at: string;
  total_transactions: number;
  total_transaction_value: any[];
  dedicated_account: any;
  identified: boolean;
  identifications: any[] | null;
}

export type FetchCustomerResponse = BaseResponse & {
  data: FetchCustomer;
};


export interface UpdateCustomerPayload
  extends Omit<CreateCustomerPayload, "email"> {
  /** Customer's code */
  code: string;
}
interface Photo {
  type: string;
  typeId: string;
  typeName: string;
  url: string;
  isPrimary: boolean;
}

export type UpdateCustomerResponse = BaseResponse & {
  data: {
    integration: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    metadata: {
      photos: Photo[];
    };
    identified: boolean;
    identifications: any[] | null;
    domain: string;
    customer_code: string;
    id: number;
    transactions: any[];
    subscriptions: any[];
    authorizations: any[];
    createdAt: string;
    updatedAt: string;
  };
};

export interface ValidateCustomerPayload
  extends Omit<UpdateCustomerPayload, "phone" | "metadata"> {
  /**
   * Predefined types of identification.
   * Only 'bank_account' is supported at the moment.
   */
  type: "bank_account";

  /** Customer's identification number */
  value: string;

  /** 2 letter country code of identification issuer */
  country: string;

  /** Customer's Bank Verification Number */
  bvn: string;

  /**
   * You can get the list of Bank Codes by calling the List Banks endpoint.
   * (required if type is 'bank_account')
   */
  bank_code: string;

  /**
   * Customer's bank account number.
   * (required if type is 'bank_account')
   */
  account_number: string;

  /** Customer's middle name */
  middle_name?: string;
}
export type ValidateCustomerResponse = BasePaystackResponse;
export interface WhiteListCustomerPayload {
  /** Customer's code, or email address */
  customer: string;
  /**One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action. */
  action: "default" | "allow" | "deny";
}

export interface BlackListCusomerPayload extends WhiteListCustomerPayload {}
export type WhiteListCustomerResponse = BaseResponse & Customer;
export type BlackListCustomerResponse = BaseResponse & Customer;

export interface DeactivateAuthorizationPayload {
  /** Authorization code to be deactivated */
  authorization: string;
}

export type DeactivateAuthorizationResponse = BasePaystackResponse;
export abstract class BaseCustomer {
  abstract create(payload: CreateCustomerPayload): Promise<CustomerResponse>;
  abstract list(query?: ListCustomersQuery): Promise<ListCustomersResponse>;
  abstract fetch(param: FetchCustomerParam): Promise<FetchCustomerResponse>;
  abstract update(payload: UpdateCustomerPayload): Promise<UpdateCustomerResponse>;
  abstract validate(payload:ValidateCustomerPayload): Promise<ValidateCustomerResponse>;
  abstract whitelist(payload: WhiteListCustomerPayload): Promise<WhiteListCustomerResponse>;
  abstract blacklist(payload: BlackListCusomerPayload): Promise<BlackListCustomerResponse>;
  abstract deactivateAuthorization(payload: DeactivateAuthorizationPayload): Promise<DeactivateAuthorizationResponse>;
}
