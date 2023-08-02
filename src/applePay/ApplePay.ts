import { formatQueryParams } from "../utils";
import {
  BasePaystackResponse,
  BaseApplePay,
  ListApplePayQuery,
  ListApplePay,
} from "../types";
import { Http } from "../core/Http";
export class ApplePay extends BaseApplePay {
  private endpoint = "/apple-pay/domain";
  constructor() {
    super();
  }
  async registerDomain(payload: {
    domainName: string;
  }): Promise<BasePaystackResponse> {
    return await Http.post<typeof payload, BasePaystackResponse>(
      this.endpoint,
      payload
    );
  }
  async listDomains(query?: ListApplePayQuery): Promise<ListApplePay> {
    let formattedQueryString: string = formatQueryParams(query);
    return await Http.get<ListApplePay>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async unRegisterDomain(payload: {
    domainName: string;
  }): Promise<BasePaystackResponse> {
    return await Http.delete<typeof payload, BasePaystackResponse>(
      this.endpoint,
      payload
    );
  }
}
