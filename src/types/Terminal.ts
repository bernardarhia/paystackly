import { BasePaystackErrorResponse, BasePaystackResponse, BasePaystackSuccessResponse } from "../types";

// TERMINAL
export interface SendTerminalEventPayload {
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
  
  export interface ListTerminalQuery {
    /**
     * Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
     */
    perPage: number;
  
    /**
     * A cursor that indicates your place in the list. It can be used to fetch the next page of the list.
     */
    next: string | null;
  
    /**
     * A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request.
     */
    previous: string | null;
  }
  