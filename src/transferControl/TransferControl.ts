import { Http } from "../core/Http";
import {
  Balance,
  BalanceLedger,
  BaseTransferControl,
  DisableOTPResponse,
  EnableOTPResponce,
  FinalizeDisableOTPResponce,
  ResendOTPPayload,
  ResendOTPResponse,
} from "../types/TransferControl";

export class TransferControl extends BaseTransferControl {
  private endpoint = "/transfer";

  async checkBalance(): Promise<Balance> {
    return Http.get<Balance>(`/balance`);
  }
  async fetchBalanceLedger(): Promise<BalanceLedger> {
    return Http.get<BalanceLedger>(`/balance/ledger`);
  }
  async disableOTP(): Promise<DisableOTPResponse> {
    return Http.post(`${this.endpoint}/disable_otp`);
  }
  async finalizeDisableOTP(): Promise<FinalizeDisableOTPResponce> {
    return Http.post(`${this.endpoint}/disable_otp_finalize`);
  }
  async enableOTP(): Promise<EnableOTPResponce> {
    return Http.post(`${this.endpoint}/enable_otp`);
  }
  async resendOTP(payload: ResendOTPPayload): Promise<ResendOTPResponse> {
    return Http.post<ResendOTPPayload, ResendOTPResponse>(
      `${this.endpoint}/resend_otp`,
      payload
    );
  }
}
