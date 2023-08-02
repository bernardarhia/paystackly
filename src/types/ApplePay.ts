import { BasePaystackResponse } from "../types";

export interface ListApplePay extends BasePaystackResponse {
  data: {
    domainNames: string[];
  };
}
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
export abstract class BaseApplePay {
  abstract registerDomain(payload: {
    domainName: string;
  }): Promise<BasePaystackResponse>;
  abstract listDomains(query?: ListApplePayQuery): Promise<ListApplePay>;
  abstract unRegisterDomain(payload: {
    domainName: string;
  }): Promise<BasePaystackResponse>;
}
