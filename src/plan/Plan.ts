import { Http } from "../core/Http";
import { BasePaystackResponse } from "../types";
import {
  BasePlan,
  FetchPlanResponse,
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
}
