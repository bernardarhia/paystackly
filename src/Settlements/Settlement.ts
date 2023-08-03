import { Http } from "../core/Http";
import {
  ListSettlementQuery,
  ListSettlementTransactionQuery,
  ListSettlementTransactionsResponse,
  ListSettlementsResponse,
} from "../types/Settlement";
import { formatQueryParams } from "../utils";

abstract class BaseSettlement {
  abstract list(query?: ListSettlementQuery): Promise<ListSettlementsResponse>;
  abstract listByTransaction(
    query: ListSettlementTransactionQuery
  ): Promise<ListSettlementTransactionsResponse>;
}
export class Settlement extends BaseSettlement {
  private endpoint = "/settlement";
  async list(query?: ListSettlementQuery): Promise<ListSettlementsResponse> {
    const formattedQuery = formatQueryParams(query);
    const url = `${this.endpoint}${formattedQuery}`;
    return await Http.get<ListSettlementsResponse>(url);
  }
  async listByTransaction(
    query: ListSettlementTransactionQuery
  ): Promise<ListSettlementTransactionsResponse> {
    const { id = "", ...rest } = query;
    const formattedQuery = formatQueryParams(rest);
    const url = `${this.endpoint}/${id}/transactions${formattedQuery}`;
    return await Http.get<ListSettlementTransactionsResponse>(url);
  }
}
