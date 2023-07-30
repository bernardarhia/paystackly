
/** ===========CHARGE============= */

import { TransactionResponse,BasePaystackErrorResponse, BasePaystackResponse, BasePaystackSuccessResponse } from "../types";

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
  export type BaseChargeResponse =
    | (BasePaystackResponse & BasePaystackErrorResponse)
    | (BasePaystackSuccessResponse & {
        data: {
          reference: string;
          status: ChargeDataStatus;
          display_text: string;
        };
      });
  

export abstract class BaseCharges {
  abstract chargeWithMobileMoney(
    payload: ChargeWithMobileMoneyPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract chargeWithBank(
    payload: ChargeWithBankPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract chargeWithUssd(
    payload: ChargeWithUSSDPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract chargeWithCard(
    payload: ChargeWithCardPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract submitPin(
    payload: SubmitChargePinPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract submitOTP(
    payload: SubmitChargeOTPPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract submitPhone(
    payload: SubmitChargePhonePayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract submitBirthday(
    payload: SubmitChargeBirthdayPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract submitAddress(
    payload: SubmitChargeAddressPayload
  ): Promise<BaseChargeResponse | TransactionResponse>;

  abstract checkStatus(
    reference: string
  ): Promise<TransactionResponse>;
}
