import { Http } from "../core/Http";
import { BasePaystackSuccessResponse } from "../types";
import { formatQueryParams } from "../utils";
import {
  BaseVerification,
  CardBINResponse,
  ResolveAccountQuery,
  ResolveAccountResponse,
  ValidateAccountPayload,
  ValidateAccountResponse,
} from "./type";

export class Verification extends BaseVerification {
  private endpoint = "/bank";
  async resolveAccount(
    params: ResolveAccountQuery
  ): Promise<ResolveAccountResponse> {
    const queryString = formatQueryParams(params);
    return await Http.get<ResolveAccountResponse>(
      `${this.endpoint}/resolve${queryString}`
    );
  }
  async validationAccount(
    payload: ValidateAccountPayload
  ): Promise<
    BasePaystackSuccessResponse & {
      data: { verified: boolean; verificationMessage: string };
    }
  > {
    return await Http.post<ValidateAccountPayload, ValidateAccountResponse>(
      `${this.endpoint}/validate`,
      payload
    );
  }
  async verifyCardBIN(params: {
    binNumber: string;
  }): Promise<CardBINResponse> {
    return await Http.get<CardBINResponse>(`/decision/bin/${params.binNumber}`)
  }
}
