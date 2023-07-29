import { getRequestData } from "../constants";
import { TransactionResponse } from "../../types/transaction";
import { sendRequest } from "../utils";
import {
  BaseChargeResponse,
  ChargeWithBankPayload,
  ChargeWithCardPayload,
  ChargeWithMobileMoneyPayload,
  ChargeWithUSSDPayload,
  SubmitChargeAddressPayload,
  SubmitChargeBirthdayPayload,
  SubmitChargeOTPPayload,
  SubmitChargePhonePayload,
  SubmitChargePinPayload,
} from "../../types/charge";

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

export class Charges extends BaseCharges {
  async chargeWithMobileMoney(
    payload: ChargeWithMobileMoneyPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };

    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, body).createCharge,
    );
  }
  async chargeWithBank(
    payload: ChargeWithBankPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };

    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, body).createCharge,
    );
  }
  async chargeWithUssd(
    payload: ChargeWithUSSDPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };

    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, body).createCharge,
    );
  }
  async chargeWithCard(
    payload: ChargeWithCardPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };

    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, body).createCharge,
    );
  }

  async submitPin(
    payload: SubmitChargePinPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, payload).submitPin,
    );
  }

  async submitOTP(
    payload: SubmitChargeOTPPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, payload).submitOTP,
    );
  }
  async submitPhone(
    payload: SubmitChargePhonePayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, payload).submitPhone,
    );
  }
  async submitBirthday(
    payload: SubmitChargeBirthdayPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, payload).submitBirthday,
    );
  }
  async submitAddress(
    payload: SubmitChargeAddressPayload,
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await sendRequest<BaseChargeResponse>(
      getRequestData("POST", null, payload).submitAddress,
    );
  }
  async checkStatus(reference: string): Promise<TransactionResponse> {
    return await sendRequest<TransactionResponse>(
      getRequestData("GET", `/${reference}`).checkStatus,
    );
  }
}
