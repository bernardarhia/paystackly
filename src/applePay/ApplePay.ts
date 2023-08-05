import { formatQueryParams } from "../utils";
import { Http } from "../core/Http";
import { BaseApplePay, ListApplePay, ListApplePayQuery, RegisterDomainReponse, UnRegisterDomainReponse } from "./type";

export class ApplePay extends BaseApplePay {
  private endpoint = "/apple-pay/domain";
  constructor() {
    super();
  }
  async registerDomain(payload: {
    domainName: string;
  }): Promise<RegisterDomainReponse> {
    return await Http.post<typeof payload, RegisterDomainReponse>(
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
  }): Promise<UnRegisterDomainReponse> {
    return await Http.delete<typeof payload, UnRegisterDomainReponse>(
      this.endpoint,
      payload
    );
  }
}
