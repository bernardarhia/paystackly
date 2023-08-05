import { Http } from "../core/Http";
import {
  BaseSubaccount,
  CreateSubaccountPayload,
  CreateSubaccountResponse,
  FetchSubAccountResponse,
  ListSubaccountQuery,
  ListSubaccountResponse,
  UpdateSubAccountPayload,
  UpdateSubAccountReponse,
} from "./type";
import { formatQueryParams } from "../utils";

export class SubAccount extends BaseSubaccount {
  private endpoint = "/subaccount";
  constructor() {
    super();
  }
  async create(
    payload: CreateSubaccountPayload
  ): Promise<CreateSubaccountResponse> {
    return await Http.post<CreateSubaccountPayload, CreateSubaccountResponse>(
      this.endpoint,
      payload
    );
  }
  async list(query?: ListSubaccountQuery): Promise<ListSubaccountResponse> {
    let formattedQueryString: string = formatQueryParams(query);
    return await Http.get<ListSubaccountResponse>(
      `${this.endpoint}${formattedQueryString}`
    );
  }
  async fetch(payload: { id: string }): Promise<FetchSubAccountResponse> {
    return await Http.get<FetchSubAccountResponse>(
      `${this.endpoint}${payload.id}`
    );
  }
  async update(
    payload: UpdateSubAccountPayload
  ): Promise<UpdateSubAccountReponse> {
    const { id, ...body } = payload;

    return await Http.put<
      Omit<UpdateSubAccountPayload, "id">,
      UpdateSubAccountReponse
    >(`${this.endpoint}${id}`, body);
  }
}
