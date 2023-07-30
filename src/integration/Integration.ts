import { getRequestData } from "../constants";
import {
  BaseIntegration,
  FetchIntegrationTimeoutResponse,
  UpdateIntegrationTimeoutPayload,
  UpdateIntegrationTimeoutResponse,
} from "../types";
import { sendRequest } from "../utils";



export class Integration extends BaseIntegration {
  constructor() {
    super();
  }
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
