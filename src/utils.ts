import { ExportTransactionQueryParams, GetBanksQueryParams, ListRefundQuery, ListTransactionsQuery, TransactionTotalQueryParams, VerifyNumberQueryParams } from "./types";
type FormatQuery =
  | ListRefundQuery
  | ListTransactionsQuery
  | TransactionTotalQueryParams
  | ExportTransactionQueryParams
  |VerifyNumberQueryParams
  | GetBanksQueryParams;
export function formatQueryParams(params?: FormatQuery): string {
  let formattedQueryString: string = "";
  const query = new URLSearchParams(params as any);
  if (params && Object.keys(params).length) {
    formattedQueryString = `?${query}`;
  }
  return formattedQueryString;
}
export function transformToCamelCase(input: string) {
  return input.replace(/^[A-Z]/, (match) => match.toLowerCase());
}
