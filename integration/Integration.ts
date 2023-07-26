import { getRequestData } from "../constants";
import {
  FetchIntegrationTimeoutResponse,
  UpdateIntegrationTimeoutPayload,
  UpdateIntegrationTimeoutResponse,
} from "../types/integration";
import { sendRequest } from "../utils";

abstract class BaseIntegration {
  abstract fetchTimeout(): Promise<FetchIntegrationTimeoutResponse>;
  abstract updateTimeout(
    payload: UpdateIntegrationTimeoutPayload
  ): Promise<UpdateIntegrationTimeoutResponse>;
}

export class Integration extends BaseIntegration {
  async fetchTimeout(): Promise<FetchIntegrationTimeoutResponse> {
    return await sendRequest<FetchIntegrationTimeoutResponse>(
      getRequestData("GET").integration
    );
  }
  async updateTimeout(
    payload: UpdateIntegrationTimeoutPayload
  ): Promise<UpdateIntegrationTimeoutResponse> {
    return await sendRequest<UpdateIntegrationTimeoutResponse>(
      getRequestData("POST", null, payload).integration
    );
  }
}
