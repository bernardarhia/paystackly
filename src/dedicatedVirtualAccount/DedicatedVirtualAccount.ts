import { Http } from "../core/Http";
import {
  BaseDedicatedVirtualAccount,
  DeactivateDedicatedAccountParams,
  FetchBankProvidersResponse,
  RemoveSplitTransactionPayload,
  RemoveSplitTransactionResponse,
  SplitTransactionPayload,
  SplitTransactionResponse,
} from "./type";

export class DedicatedVirtualAccount extends BaseDedicatedVirtualAccount {
  private endpoint = "/dedicated_account";

  async fetchBankProviders(): Promise<FetchBankProvidersResponse> {
    return await Http.get<FetchBankProvidersResponse>(
      `${this.endpoint}/available_providers`
    );
  }

  async removeSplitTransaction(
    payload: RemoveSplitTransactionPayload
  ): Promise<RemoveSplitTransactionResponse> {
    return await Http.delete<
      RemoveSplitTransactionPayload,
      RemoveSplitTransactionResponse
    >(`${this.endpoint}/split`, payload);
  }

  async splitTransaction(
    payload: SplitTransactionPayload
  ): Promise<SplitTransactionResponse> {
    return await Http.post<SplitTransactionPayload, SplitTransactionResponse>(
      `${this.endpoint}/split`,
      payload
    );
  }

  async deactivate(
    params: DeactivateDedicatedAccountParams
  ): Promise<SplitTransactionResponse> {
    return await Http.delete<null, SplitTransactionResponse>(
      `${this.endpoint}/${params.dedicated_account_id}`
    );
  }
}
