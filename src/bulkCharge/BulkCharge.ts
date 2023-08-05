import { Http } from "../core/Http";
import { BaseBulkCharges } from "./type";
import {
  BulkChargeListsQuery,
  BulkChargeListsReponse,
  BulkChargesPayload,
  BulkChargesResponse,
  FetchBulkChargeBatchResponse,
  FetchChargesInBatch,
  FetchChargesInBatchResponse,
} from "./type";
import { formatQueryParams } from "../utils";
import { BasePaystackResponse } from "../types";

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
    id: string;
  }): Promise<FetchBulkChargeBatchResponse> {
    return await Http.get<FetchBulkChargeBatchResponse>(
      `${this.endpoint}/${payload.id}`
    );
  }

  async fetchChargesInBatch(
    params: FetchChargesInBatch
  ): Promise<FetchChargesInBatchResponse> {
    const {id, ...query} = params
    const formattedQuery = formatQueryParams(query);
    return await Http.get<FetchChargesInBatchResponse>(
      `${this.endpoint}/${id}/charges${formattedQuery}`
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
