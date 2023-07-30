import { BasePaystackErrorResponse, BasePaystackResponse, BasePaystackSuccessResponse } from "../types";

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
export abstract class BaseIntegration {
  abstract fetchTimeout(): Promise<FetchIntegrationTimeoutResponse>;
  abstract updateTimeout(
    payload: UpdateIntegrationTimeoutPayload
  ): Promise<UpdateIntegrationTimeoutResponse>;
}