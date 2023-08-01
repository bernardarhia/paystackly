import { Http } from "../core/Http";
import {
  BaseTerminal,
  ComissionTerminalResponse,
  DeComissionTerminalResponse,
  FetchEventStatusPayload,
  FetchEventStatusResponse,
  FetchTerminalRresponse,
  FetchTerminalStatusResponse,
  ListTerminalsQuery,
  ListTerminalsResponse,
  SendEventTerminalResponse,
  SendTerminalEventPayload,
  UpdateTerminalPayload,
  UpdateTerminalResponse,
} from "../types";
import { formatQueryParams } from "../utils";

export class Terminal extends BaseTerminal {
  private endpoint = "/terminal";
  async commissionTerminal(payload: {
    serial_number: string;
  }): Promise<ComissionTerminalResponse> {
    return Http.post<typeof payload, ComissionTerminalResponse>(
      `${this.endpoint}/commission_device`,
      payload
    );
  }
  async updateTerminal(
    payload: UpdateTerminalPayload
  ): Promise<UpdateTerminalResponse> {
    const { terminal_id, ...body } = payload;
    return Http.put<
      Omit<UpdateTerminalPayload, "terminal_id">,
      UpdateTerminalResponse
    >(`${this.endpoint}/${terminal_id}`, body);
  }
  async sendEvent(
    payload: SendTerminalEventPayload
  ): Promise<SendEventTerminalResponse> {
    const { terminal_id, ...body } = payload;
    return Http.post<
      Omit<SendTerminalEventPayload, "terminal_id">,
      SendEventTerminalResponse
    >(`${this.endpoint}/${terminal_id}/event`, body);
  }
  async fetchEventStatus(
    payload: FetchEventStatusPayload
  ): Promise<FetchEventStatusResponse> {
    return Http.get<FetchEventStatusResponse>(
      `${this.endpoint}/${payload.terminal_id}/event/${payload.event_id}`
    );
  }
  async fetchTerminal(payload: {
    terminal_id: string;
  }): Promise<FetchTerminalRresponse> {
    return Http.get<FetchTerminalRresponse>(
      `${this.endpoint}/${payload.terminal_id}`
    );
  }
  async fetchTerminalStatus(payload: {
    terminal_id: string;
  }): Promise<FetchTerminalStatusResponse> {
    return Http.get<FetchTerminalStatusResponse>(
      `${this.endpoint}/${payload.terminal_id}/presence`
    );
  }
  async listTerminals(
    queryParams?: ListTerminalsQuery | undefined
  ): Promise<ListTerminalsResponse> {
    let formattedQueryString: string = formatQueryParams(queryParams);
    return Http.get<ListTerminalsResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async deCommissionTerminal(payload: {
    serial_number: string;
  }): Promise<DeComissionTerminalResponse> {
    return Http.post<typeof payload, ComissionTerminalResponse>(
      `${this.endpoint}/decommission_device`,
      payload
    );
  }
}
