import { BasePaystackErrorResponse, BasePaystackResponse, BasePaystackSuccessResponse } from "../core/types";

// INTEGRATIONS
export type BaseIntegrationResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        payment_session_timeout: number;
      };
    });
export type FetchIntegrationTimeoutResponse = BaseIntegrationResponse;

export interface UpdateIntegrationTimeoutPayload {
  timeout: number;
}
export type UpdateIntegrationTimeoutResponse = BaseIntegrationResponse;
