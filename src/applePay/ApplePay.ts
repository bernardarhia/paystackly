import { getRequestData } from "../constants";
import { formatQueryParams, sendRequest } from "../utils";
import {BasePaystackResponse,BaseApplePay, ListApplePayQuery, ListApplePay} from "../types"
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
