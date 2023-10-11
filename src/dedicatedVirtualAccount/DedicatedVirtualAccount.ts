import { Http } from "../core/Http";
import { BasePaystackResponse } from "../types";
import { formatQueryParams } from "../utils";
import {
  AssignDedicatedVirtualAccountPayload,
  BaseDedicatedVirtualAccount,
  CreateDedicatedVirtualAccountPayload,
  CreateDedicatedVirtualAccountResponse,
  DeactivateDedicatedAccountParams,
  FetchBankProvidersResponse,
  FetchDedicatedVirtualResponse,
  ListDedicatedVirtualAccountParams,
  ListDedicatedVirtualAccountResponse,
  QueryDedicatedAccountParams,
  RemoveSplitTransactionPayload,
  RemoveSplitTransactionResponse,
  SplitTransactionPayload,
  SplitTransactionResponse,
} from "./type";

/**
 * The Dedicated Virtual Account API enables Nigerian merchants to
 * manage unique payment accounts of their customers.
 */
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

  async queryAccount(
    params: QueryDedicatedAccountParams
  ): Promise<BasePaystackResponse> {
    const formattedQuery = formatQueryParams(params);
    return await Http.get<BasePaystackResponse>(
      `${this.endpoint}/requery${formattedQuery}`
    );
  }

  async fetch(
    params: DeactivateDedicatedAccountParams
  ): Promise<FetchDedicatedVirtualResponse> {
    return await Http.get<FetchDedicatedVirtualResponse>(
      `${this.endpoint}/${params.dedicated_account_id}`
    );
  }

  async list(
    params: ListDedicatedVirtualAccountParams
  ): Promise<ListDedicatedVirtualAccountResponse> {
    const formattedQuery = formatQueryParams(params);
    return await Http.get<ListDedicatedVirtualAccountResponse>(
      `${this.endpoint}${formattedQuery}`
    );
  }

  /**
   * We currently support Wema Bank and Titan Paystack.
   */
  async assign(
    payload: AssignDedicatedVirtualAccountPayload
  ): Promise<BasePaystackResponse> {
    return await Http.post<
      AssignDedicatedVirtualAccountPayload,
      BasePaystackResponse
    >(`${this.endpoint}/assign`, payload);
  }

  async create(
    payload: CreateDedicatedVirtualAccountPayload
  ): Promise<CreateDedicatedVirtualAccountResponse> {
    return Http.post<
      CreateDedicatedVirtualAccountPayload,
      CreateDedicatedVirtualAccountResponse
    >(this.endpoint, payload);
  }
}
