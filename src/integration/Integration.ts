import { Http } from "../core/Http";
import {
  BaseIntegration,
  FetchIntegrationTimeoutResponse,
  UpdateIntegrationTimeoutPayload,
  UpdateIntegrationTimeoutResponse,
} from "../types";

export class Integration extends BaseIntegration {
  private endpoint = "/integration";
  constructor() {
    super();
  }
  async fetchTimeout(): Promise<FetchIntegrationTimeoutResponse> {
    try {
      return await Http.get<FetchIntegrationTimeoutResponse>(
        `${this.endpoint}`
      );
    } catch (error: any) {
      return error.response.data;
    }
  }
  async updateTimeout(
    payload: UpdateIntegrationTimeoutPayload
  ): Promise<UpdateIntegrationTimeoutResponse> {
    try {
      return await Http.post<UpdateIntegrationTimeoutPayload, UpdateIntegrationTimeoutResponse>(
        this.endpoint,
        payload
      );
    } catch (error: any) {
      return error.response.data;
    }
  }
}
