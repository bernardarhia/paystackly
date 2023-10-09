import { Http } from "../core/Http";
import { BasePaystackResponse } from "../types";
import { formatQueryParams } from "../utils";
import {
  BasePlan,
  FetchPlanResponse,
  ListPlansQuery,
  ListPlansResponse,
  PlanIdParam,
  PlanPayload,
  PlanUpdateResponse,
} from "./type";

export class Plan extends BasePlan {
  private endpoint = "/plan";

  async update(
    param: PlanIdParam,
    payload: PlanPayload
  ): Promise<BasePaystackResponse> {
    return Http.put<PlanPayload, PlanUpdateResponse>(
      `${this.endpoint}/${param.id_or_code}`,
      payload
    );
  }

  async fetch(param: PlanIdParam): Promise<FetchPlanResponse> {
    return Http.get<FetchPlanResponse>(`${this.endpoint}/${param.id_or_code}`);
  }

  async list(query: ListPlansQuery): Promise<ListPlansResponse> {
    const formatedQuery = formatQueryParams(query);
    return Http.get<ListPlansResponse>(`${this.endpoint}${formatedQuery}`);
  }
}
