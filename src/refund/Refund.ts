import { getRequestData } from "../constants";
import {
  RefundResponse,
  RefundPayload,
  ListRefundResponseData,
  ListRefundQuery,
  FetchRefundParam,
  FetchReFundReponse,
  BaseRefund,
} from "../types";
import { formatQueryParams, sendRequest } from "../utils";


export class Refund extends BaseRefund {
  constructor() {
    super();
  }
  async create(payload: RefundPayload): Promise<RefundResponse> {
    return await sendRequest<RefundResponse>(
        getRequestData("POST", null, payload).refund
      );
  }
  
  async list(queryParams: ListRefundQuery): Promise<ListRefundResponseData> {
    let formattedQueryString: string = formatQueryParams(queryParams);

    return await sendRequest<ListRefundResponseData>(
        getRequestData("GET", formattedQueryString).refund
      );
  }
  /**
   *
   * @param reference  - reference from refund
   */
  async fetch(param: FetchRefundParam): Promise<FetchReFundReponse> {
    return await sendRequest<FetchReFundReponse>(
        getRequestData("GET", `/${param.reference}`).refund
      );
  }
}
