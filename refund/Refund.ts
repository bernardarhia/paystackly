import { getRequestData } from "../constants";
import {
  RefundResponse,
  RefundPayload,
  ListRefundResponseData,
  ListRefundQuery,
  FetchRefundParam,
  FetchReFundReponse,
} from "../types/refund";
import { formatQueryParams, sendRequest } from "../utils";

abstract class BaseRefund {
  abstract create(payload: RefundPayload): Promise<RefundResponse>;
  abstract list(queryParams: ListRefundQuery): Promise<ListRefundResponseData>;
  abstract fetch(param: FetchRefundParam): Promise<FetchReFundReponse>;
}

export class Refund extends BaseRefund {
  async create(payload: RefundPayload): Promise<RefundResponse> {
    return await sendRequest<RefundResponse>(
        getRequestData("POST", null, payload).createRefund
      );
  }
  
  async list(queryParams: ListRefundQuery): Promise<ListRefundResponseData> {
    let formattedQueryString: string = formatQueryParams(queryParams);

    return await sendRequest<ListRefundResponseData>(
        getRequestData("GET", formattedQueryString).listRefund
      );
  }
    /**
   *
   * @param reference  - reference from refund
   */
  async fetch(param: FetchRefundParam): Promise<FetchReFundReponse> {
    return await sendRequest<FetchReFundReponse>(
        getRequestData("GET", `/${param.reference}`).fetchRefund
      );
  }
}
