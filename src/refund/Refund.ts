import { Http } from "../core/Http";
import {
  RefundResponse,
  RefundPayload,
  ListRefundResponseData,
  ListRefundQuery,
  FetchRefundParam,
  FetchReFundReponse,
  BaseRefund,
} from "./type";
import { formatQueryParams } from "../utils";

export class Refund extends BaseRefund {
  private endpoint = "/refund";
  constructor() {
    super();
  }
  async create(payload: RefundPayload): Promise<RefundResponse> {
    try {
      return await Http.post<RefundPayload, RefundResponse>(
        `${this.endpoint}`,
        payload
      );
    } catch (error: any) {
      return error.response.data;
    }
  }

  async list(query?: ListRefundQuery): Promise<ListRefundResponseData> {
      let formattedQueryString: string = formatQueryParams(query);
      return await Http.get<ListRefundResponseData>(
        `${this.endpoint}${formattedQueryString}`
      );
  }
  /**
   *
   * @param reference  - reference from refund
   */
  async fetch(param: FetchRefundParam): Promise<FetchReFundReponse> {
    try {
      return await Http.get<FetchReFundReponse>(
        `${this.endpoint}/${param.reference}`
      );
    } catch (error: any) {
      return error.response.data;
    }
  }
}
