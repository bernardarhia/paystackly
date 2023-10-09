import { Http } from "../core/Http";
import { BasePaystackResponse } from "../types";
import { BasePlan, PlanIdParam, PlanPayload, PlanUpdateResponse } from "./type";

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
}
