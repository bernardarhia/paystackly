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
  async list(query?: BulkChargeListsQuery): Promise<BulkChargeListsReponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await Http.get<BulkChargeListsReponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async fetchBulkChargeBatch(payload: {
    id_or_code: string;
  }): Promise<FetchBulkChargeBatchResponse> {
    return await Http.get<FetchBulkChargeBatchResponse>(
      `${this.endpoint}/${payload.id_or_code}`
    );
  }

  async fetchChargesInBatch(
    payload: { id_or_code: string },
    queryParams?: FetchChargesInBatch
  ): Promise<FetchChargesInBatchResponse> {
    const query = formatQueryParams(queryParams);
    return await Http.get<FetchChargesInBatchResponse>(
      `${this.endpoint}/${payload.id_or_code}/charges${query}`
    );
  }

  async pause(payload: { batch_code: string }): Promise<BasePaystackResponse> {
    const path = `${this.endpoint}/pause/${payload.batch_code}`;
    return await Http.get<BasePaystackResponse>(`${path}`);
  }

  async resume(payload: { batch_code: string }): Promise<BasePaystackResponse> {
    const path = `/resume/${payload.batch_code}`;
    return await Http.get<BasePaystackResponse>(`${path}`);
  }
}
