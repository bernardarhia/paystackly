import {
  BasePaystackErrorResponse,
  BasePaystackResponse,
  BasePaystackSuccessResponse,
} from "../types";

// TERMINAL
export interface SendTerminalEventPayload {
  /** The ID of the Terminal the event should be sent to. */
  terminal_id: string;
  /**
   * The type of event to push. Currently supports 'invoice' and 'transaction'.
   */
  type: "invoice" | "transaction";

  /**
   * The action the Terminal needs to perform.
   * For the 'invoice' type, the action can either be 'process' or 'view'.
   * For the 'transaction' type, the action can either be 'process' or 'print'.
   */
  action: "process" | "view" | "print";

  /**
   * The parameters needed to perform the specified action.
   * For the 'invoice' type, you need to pass the invoice id and offline reference: {id: invoice_id, reference: offline_reference}.
   * For the 'transaction' type, you can pass the transaction id: {id: transaction_id}.
   */
  data: {
    id: string; // The id of the invoice or transaction.
    reference?: string; // The offline reference for the invoice (only for 'invoice' type).
  };
}
export type SendEventTerminalResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        id: string;
      };
    });

export interface FetchEventStatusPayload {
  /** The ID of the Terminal the event was sent to. */
  terminal_id: string;
  /** The ID of the event that was sent to the Terminal */
  event_id: string;
}
export type FetchEventStatusResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        delivered: boolean;
      };
    });

export type FetchTerminalStatusResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        online: boolean;
        available: boolean;
      };
    });

interface TerminalData {
  id: number;
  serial_number: string;
  device_make: string | null;
  terminal_id: string;
  integration: number;
  domain: string;
  name: string;
  address: string | null;
  status: "active" | "inactive";
}

export interface ListTerminalsQuery {
  /**
   * Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
   */
  perPage?: number;

  /**
   * A cursor that indicates your place in the list. It can be used to fetch the next page of the list.
   */
  next?: string | null;

  /**
   * A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request.
   */
  previous?: string | null;
}

export type ListTerminalsResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackErrorResponse & {
      data: TerminalData[];
      meta: {
        next: string | null;
        previous: string | null;
        perPage: number;
      };
    });

export type FetchTerminalRresponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackErrorResponse & {
      data: TerminalData;
    });

export interface UpdateTerminalPayload {
  /** The ID of the Terminal you want to update */
  terminal_id: string;
  /** Name of the terminal */
  name: string;
  /** The address of the Terminal*/
  address: string;
}
export type UpdateTerminalResponse = BasePaystackResponse;
export type ComissionTerminalResponse = BasePaystackResponse;
export type DeComissionTerminalResponse = BasePaystackResponse;
export abstract class BaseTerminal {
  abstract sendEvent(
    payload: SendTerminalEventPayload
  ): Promise<SendEventTerminalResponse>;
  abstract fetchEventStatus(
    payload: FetchEventStatusPayload
  ): Promise<FetchEventStatusResponse>;
  abstract fetchTerminalStatus(payload: {
    terminal_id: string;
  }): Promise<FetchTerminalStatusResponse>;
  abstract listTerminals(
    queryParams?: ListTerminalsQuery
  ): Promise<ListTerminalsResponse>;
  abstract fetchTerminal(payload: {
    terminal_id: string;
  }): Promise<FetchTerminalRresponse>;
  abstract updateTerminal(
    payload: UpdateTerminalPayload
  ): Promise<UpdateTerminalResponse>;
  abstract commissionTerminal(payload: {
    serial_number: string;
  }): Promise<ComissionTerminalResponse>;
  abstract deCommissionTerminal(payload: {
    serial_number: string;
  }): Promise<DeComissionTerminalResponse>;
}
