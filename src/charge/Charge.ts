import { BaseCharges } from "./type";
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
} from "./type";
import { Http } from "../core/Http";
import { TransactionResponse } from "../transaction";
import { roundAmount } from "../utils";

type PayloadWithAmount<T> = T & { amount?: number };
export class Charges extends BaseCharges {
  private endpoint = "/charge";
  constructor() {
    super();
  }
  async chargeWithMobileMoney(
    payload: ChargeWithMobileMoneyPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<ChargeWithMobileMoneyPayload>(
      this.endpoint,
      payload
    );
  }
  async chargeWithBank(
    payload: ChargeWithBankPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<ChargeWithBankPayload>(
      this.endpoint,
      payload
    );
  }
  async chargeWithUssd(
    payload: ChargeWithUSSDPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<ChargeWithUSSDPayload>(
      this.endpoint,
      payload
    );
  }
  async chargeWithCard(
    payload: ChargeWithCardPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<ChargeWithCardPayload>(
      this.endpoint,
      payload
    );
  }

  async submitPin(
    payload: SubmitChargePinPayload
  ): Promise<TransactionResponse> {
    return await this.basePostChargeFinalizeRequest<SubmitChargePinPayload>(
      `${this.endpoint}/submit_pin`,
      payload
    );
  }

  async submitOTP(
    payload: SubmitChargeOTPPayload
  ): Promise<TransactionResponse> {
    return await this.basePostChargeFinalizeRequest<SubmitChargeOTPPayload>(
      `${this.endpoint}/submit_otp`,
      payload
    );
  }
  async submitPhone(
    payload: SubmitChargePhonePayload
  ): Promise<TransactionResponse> {
    return await this.basePostChargeFinalizeRequest<SubmitChargePhonePayload>(
      `${this.endpoint}/submit_phone`,
      payload
    );
  }
  async submitBirthday(
    payload: SubmitChargeBirthdayPayload
  ): Promise<TransactionResponse> {
    return await this.basePostChargeFinalizeRequest<SubmitChargeBirthdayPayload>(
      `${this.endpoint}/submit_birthday`,
      payload
    );
  }
  async submitAddress(
    payload: SubmitChargeAddressPayload
  ): Promise<TransactionResponse> {
    return await this.basePostChargeFinalizeRequest<SubmitChargeAddressPayload>(
      `${this.endpoint}/submit_address`,
      payload
    );
  }
  async checkStatus(payload: {
    reference: string;
  }): Promise<TransactionResponse> {
    return await Http.get(`${this.endpoint}/${payload.reference}`);
  }
  async basePostChargeRequest<T>(
    url: string,
    payload: PayloadWithAmount<T>
  ): Promise<BaseChargeResponse> {
    if (payload && "amount" in payload) {
      payload.amount = roundAmount(payload?.amount as number)
    }
    return await Http.post<T, BaseChargeResponse>(
      url,
      payload
    );
  }
  async basePostChargeFinalizeRequest<T>(
    url: string,
    payload: PayloadWithAmount<T>
  ): Promise<TransactionResponse> {
    if (payload && "amount" in payload) {
      payload.amount = roundAmount(payload?.amount as number)
    }
    return await Http.post<T, TransactionResponse>(
      url,
      payload
    );
  }
}
