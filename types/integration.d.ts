import { BasePaystackResponse } from ".";

export interface BaseIntegrationResponse  extends BasePaystackResponse{
    data: {
        payment_session_timeout: number;
      };
}
export interface FetchIntegrationTimeoutResponse extends BaseIntegrationResponse{}

export interface UpdateIntegrationTimeoutPayload  {
    timeout: number;
}
export interface UpdateIntegrationTimeoutResponse extends BaseIntegrationResponse{}
