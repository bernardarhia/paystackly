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
  async registerDomain(domainName: string): Promise<BasePaystackResponse> {
    const body = { domainName };
    return await Http.post<typeof body, BasePaystackResponse>(
      this.endpoint,
      body
    );
  }
  async listDomains(params: ListApplePayQuery): Promise<ListApplePay> {
    let formattedQueryString: string = formatQueryParams(params);
    return await Http.get<ListApplePay>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async unRegisterDomain(domainName: string): Promise<BasePaystackResponse> {
    const body = { domainName };
    return await Http.delete<typeof body, BasePaystackResponse>(
      this.endpoint,
      body
    );
  }
}
