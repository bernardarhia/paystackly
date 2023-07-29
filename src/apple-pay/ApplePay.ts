import { getRequestData } from "../constants";
import { BasePaystackResponse } from "../../types";
import { formatQueryParams, sendRequest } from "../utils";

interface ListApplePay extends BasePaystackResponse{
    data: {
        domainNames: string[]
      }
}
interface ListApplePayQuery{
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
abstract class BaseApplePay {
  abstract registerDomain(domainName: string): Promise<BasePaystackResponse>;
  abstract listDomains(params: ListApplePayQuery): Promise<ListApplePay>;
  abstract unRegisterDomain(domainName: string): Promise<BasePaystackResponse>;
}
export class ApplePay extends BaseApplePay {
  async registerDomain(domainName: string): Promise<BasePaystackResponse> {
    const body = { domainName };
    return await sendRequest<BasePaystackResponse>(
      getRequestData("POST", null, body).applePay
    );
  }
 async listDomains(params: ListApplePayQuery): Promise<ListApplePay> {
    let formattedQueryString: string = formatQueryParams(params);
    return await sendRequest<ListApplePay>(
      getRequestData("GET", formattedQueryString).applePay,
    );
 }
 async unRegisterDomain(domainName: string): Promise<BasePaystackResponse> {
    const body = { domainName };
    return await sendRequest<ListApplePay>(
        getRequestData("DELETE", null, body).applePay,
      );
 }
}
