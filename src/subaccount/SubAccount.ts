import { getRequestData } from "../constants";
import {
  BaseSubaccount,
  CreateSubaccountPayload,
  CreateSubaccountResponse,
  FetchSubAccountResponse,
  ListSubaccountQuery,
  ListSubaccountResponse,
  UpdateSubAccountPayload,
  UpdateSubAccountReponse,
} from "../types";
import { formatQueryParams, sendRequest } from "../utils";


export class SubAccount extends BaseSubaccount {
  constructor() {
    super();
  }
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
    const { id, ...body } = payload;
    return await sendRequest<UpdateSubAccountReponse>(
      getRequestData("PUT", `/${id}`, body).subaccount
    );
  }
}
