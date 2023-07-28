import { getRequestData } from "../constants";
import {
  CreateSubaccountPayload,
  CreateSubaccountResponse,
  FetchSubAccountResponse,
  ListSubaccountQuery,
  ListSubaccountResponse,
  UpdateSubAccountPayload,
  UpdateSubAccountReponse,
} from "../types/subaccount";
import { formatQueryParams, sendRequest } from "../utils";

abstract class BaseSubaccount {
  abstract create(
    payload: CreateSubaccountPayload
  ): Promise<CreateSubaccountResponse>;
  abstract list(query?: ListSubaccountQuery): Promise<ListSubaccountResponse>;
  abstract fetch(id: string): Promise<FetchSubAccountResponse>;
  abstract update(
    payload: UpdateSubAccountPayload
  ): Promise<UpdateSubAccountReponse>;
}
export class SubAccount extends BaseSubaccount {
  async create(
    payload: CreateSubaccountPayload
  ): Promise<CreateSubaccountResponse> {
    return await sendRequest<CreateSubaccountResponse>(
      getRequestData("POST", null, payload).subaccount
    );
  }
  async list(query?: ListSubaccountQuery): Promise<ListSubaccountResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await sendRequest<ListSubaccountResponse>(
      getRequestData("GET", formattedQueryString).subaccount
    );
  }
  async fetch(id: string): Promise<FetchSubAccountResponse> {
    return await sendRequest<FetchSubAccountResponse>(
      getRequestData("GET", `/${id}`).subaccount
    );
  }
  async update(
    payload: UpdateSubAccountPayload
  ): Promise<UpdateSubAccountReponse> {
    const id = payload.id;
    delete payload.id;
    return await sendRequest<UpdateSubAccountReponse>(
      getRequestData("PUT", `/${id}`, payload).subaccount
    );
  }
}
