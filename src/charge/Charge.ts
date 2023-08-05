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
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<SubmitChargePinPayload>(
      `${this.endpoint}/submit_pin`,
      payload
    );
  }

  async submitOTP(
    payload: SubmitChargeOTPPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<SubmitChargeOTPPayload>(
      `${this.endpoint}/submit_otp`,
      payload
    );
  }
  async submitPhone(
    payload: SubmitChargePhonePayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<SubmitChargePhonePayload>(
      `${this.endpoint}/submit_phone`,
      payload
    );
  }
  async submitBirthday(
    payload: SubmitChargeBirthdayPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<SubmitChargeBirthdayPayload>(
      `${this.endpoint}/submit_birthday`,
      payload
    );
  }
  async submitAddress(
    payload: SubmitChargeAddressPayload
  ): Promise<BaseChargeResponse | TransactionResponse> {
    return await this.basePostChargeRequest<SubmitChargeAddressPayload>(
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
  ): Promise<BaseChargeResponse | TransactionResponse> {
    if (payload && "amount" in payload) {
      payload.amount = (payload?.amount as number) * 100;
    }
    return await Http.post<T, BaseChargeResponse | TransactionResponse>(
      url,
      payload
    );
  }
}
