import { BasePaystackResponse, BaseResponse } from "../types";

export type ListApplePay  =  BaseResponse<{domainNames: string[]}>
export interface ListApplePayQuery {
  /**
   * Flag to enable cursor pagination on the endpoint.
   */
  use_cursor: boolean;

  /**
   * A cursor that indicates your place in the list. It can be used to fetch the next page of the list.
   */
  next: string;

  /**
   * A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request.
   */
  previous: string;
}
export type RegisterDomainReponse = BasePaystackResponse;
export type UnRegisterDomainReponse = BasePaystackResponse;
export abstract class BaseApplePay {
  abstract registerDomain(payload: {
    domainName: string;
  }): Promise<RegisterDomainReponse>;
  abstract listDomains(query?: ListApplePayQuery): Promise<ListApplePay>;
  abstract unRegisterDomain(payload: {
    domainName: string;
  }): Promise<UnRegisterDomainReponse>;
}
