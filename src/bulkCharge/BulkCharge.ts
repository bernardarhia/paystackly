import { Http } from "../core/Http";
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
import { formatQueryParams } from "../utils";

export class BulkCharges extends BaseBulkCharges {
  private endpoint = "/bulkcharge";
  constructor() {
    super();
  }
  async initilize(payload: BulkChargesPayload[]): Promise<BulkChargesResponse> {
    return await Http.post<BulkChargesPayload[], BulkChargesResponse>(
      this.endpoint,
      payload
    );
  }
  async list(query: BulkChargeListsQuery): Promise<BulkChargeListsReponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await Http.get<BulkChargeListsReponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  /**
   *
   * @param id_or_code  - An ID or code for the batch whose charges you want to retrieve.
   */
  async fetchBulkChargeBatch(
    id_or_code: string
  ): Promise<FetchBulkChargeBatchResponse> {
    return await Http.get<FetchBulkChargeBatchResponse>(
      `${this.endpoint}/${id_or_code}`
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
    return await Http.get<FetchChargesInBatchResponse>(
      `${this.endpoint}/${id_or_code}/charges${query}`
    );
  }

  /**
   *
   * @param batch_code  - The batch code for the bulk charge you want to pause
   */
  async pause(batch_code: string): Promise<BasePaystackResponse> {
    const path = `${this.endpoint}/pause/${batch_code}`;
    return await Http.get<BasePaystackResponse>(`${path}`);
  }
  /**
   *
   * @param batch_code  - The batch code for the bulk charge you want to pause
   */
  async resume(batch_code: string): Promise<BasePaystackResponse> {
    const path = `/resume/${batch_code}`;
    return await Http.get<BasePaystackResponse>(`${path}`);
  }
}
