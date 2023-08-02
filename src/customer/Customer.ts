import { Http } from "../core/Http";
import { BasePaystackResponse } from "../types";
import {
  BaseCustomer,
  BlackListCusomerPayload,
  BlackListCustomerResponse,
  CreateCustomerPayload,
  CustomerResponse,
  DeactivateAuthorizationPayload,
  DeactivateAuthorizationResponse,
  FetchCustomerParam,
  FetchCustomerResponse,
  ListCustomersQuery,
  ListCustomersResponse,
  UpdateCustomerPayload,
  UpdateCustomerResponse,
  ValidateCustomerPayload,
  ValidateCustomerResponse,
  WhiteListCustomerPayload,
  WhiteListCustomerResponse,
} from "../types/Customer";
import { formatQueryParams } from "../utils";

export class Customer extends BaseCustomer {
  private endpoint = "/customer";
  async create(payload: CreateCustomerPayload): Promise<CustomerResponse> {
    return await Http.post<CreateCustomerPayload, CustomerResponse>(
      this.endpoint,
      payload
    );
  }
  async fetch(param: FetchCustomerParam): Promise<FetchCustomerResponse> {
    return await Http.get<FetchCustomerResponse>(
      `${this.endpoint}/${param.code}`
    );
  }
  async list(query: ListCustomersQuery): Promise<ListCustomersResponse> {
    const formattedQuery = formatQueryParams(query);
    const endpoint = `${this.endpoint}${formattedQuery};`;
    return await Http.get<ListCustomersResponse>(endpoint);
  }
  async update(
    payload: UpdateCustomerPayload
  ): Promise<UpdateCustomerResponse> {
    const { code, ...body } = payload;
    return await Http.put<
      Omit<UpdateCustomerPayload, "code">,
      UpdateCustomerResponse
    >(`${this.endpoint}/${code}`, body);
  }
  async validate(
    payload: ValidateCustomerPayload
  ): Promise<BasePaystackResponse> {
    const { code, ...body } = payload;
    return await Http.post<
      Omit<ValidateCustomerPayload, "code">,
      ValidateCustomerResponse
    >(`${this.endpoint}/${code}/identification`, body);
  }
  async whitelist(
    payload: WhiteListCustomerPayload
  ): Promise<WhiteListCustomerResponse> {
    return await Http.post<WhiteListCustomerPayload, WhiteListCustomerResponse>(
      `${this.endpoint}/set_risk_Action`,
      payload
    );
  }
  async blacklist(
    payload: BlackListCusomerPayload
  ): Promise<BlackListCustomerResponse> {
    return await Http.post<BlackListCusomerPayload, BlackListCustomerResponse>(
      `${this.endpoint}/set_risk_Action`,
      payload
    );
  }
  async deactivateAuthorization(
    payload: DeactivateAuthorizationPayload
  ): Promise<DeactivateAuthorizationResponse> {
    return await Http.post<
      DeactivateAuthorizationPayload,
      DeactivateAuthorizationResponse
    >(`${this.endpoint}/deactivate_authorization`, payload);
  }
}
