import { getRequestData } from "../constants";
import { BaseBulkCharges, BasePaystackResponse } from "../types";
import {
  BulkChargeListsQuery,
  BulkChargeListsReponse,
  BulkChargesPayload,
  BulkChargesResponse,
  FetchBulkChargeBatchResponse,
  FetchChargesInBatch,
  FetchChargesInBatchResponse,
} from "../types";
import { formatQueryParams, sendRequest } from "../utils";

export class BulkCharges extends BaseBulkCharges {
  async initilize(payload: BulkChargesPayload[]): Promise<BulkChargesResponse> {
    return await sendRequest<BulkChargesResponse>(
      getRequestData("POST", null, payload).bulkCharge
    );
  }
  async list(query: BulkChargeListsQuery): Promise<BulkChargeListsReponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await sendRequest<BulkChargeListsReponse>(
      getRequestData("GET", formattedQueryString).bulkCharge
    );
  }
  /**
   *
   * @param id_or_code  - An ID or code for the batch whose charges you want to retrieve.
   */
  async fetchBulkChargeBatch(
    id_or_code: string
  ): Promise<FetchBulkChargeBatchResponse> {
    return await sendRequest<FetchBulkChargeBatchResponse>(
      getRequestData("GET", `/${id_or_code}`).bulkCharge
    );
  }
  /**
   *
   * @param id_or_code  - An ID or code for the batch whose charges you want to retrieve.
   */
  async fetchChargesInBatch(
    id_or_code: string,
    queryParams?: FetchChargesInBatch
  ): Promise<FetchChargesInBatchResponse> {
    const query = formatQueryParams(queryParams);
    const path = `/${id_or_code}/charges${query}`;
    return await sendRequest<FetchChargesInBatchResponse>(
      getRequestData("GET", path).bulkCharge
    );
  }

  /**
   *
   * @param batch_code  - The batch code for the bulk charge you want to pause
   */
  async pause(batch_code: string): Promise<BasePaystackResponse> {
    const path = `/pause/${batch_code}`;
    return await sendRequest<BasePaystackResponse>(
      getRequestData("GET", path).bulkCharge
    );
  }
  /**
   *
   * @param batch_code  - The batch code for the bulk charge you want to pause
   */
  async resume(batch_code: string): Promise<BasePaystackResponse> {
    const path = `/resume/${batch_code}`;
    return await sendRequest<BasePaystackResponse>(
      getRequestData("GET", path).bulkCharge
    );
  }
}
