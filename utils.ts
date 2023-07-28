import https, { RequestOptions } from "https";
import querystring from "querystring";
import { GetBanksQueryParams, PayStackQueryOptions, VerifyNumberQueryParams } from "./types";
import { IncomingMessage } from "http";
import { ListRefundQuery } from "./types/refund";
import {
  ExportTransactionQueryParams,
  ListTransactionsQuery,
  TransactionTotalQueryParams,
} from "./types/transaction";
export function sendRequest<T>(options: PayStackQueryOptions): Promise<T| null> {
  const body = options?.body ?? {};
  delete options?.body;
  return new Promise<T>((resolve, reject) => {
    let responseData = "";
    const req = https.request(
      options as RequestOptions,
      (res: IncomingMessage) => {
        res.on("data", (chunk: Buffer) => {
          responseData += chunk.toString();
        });

        res.on("end", () => {
          try {
            const parsedData = responseData ? JSON.parse(responseData) as T : null;
            resolve(parsedData);
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    if (body) {
      const stringifiedBody = JSON.stringify(body);
      req.write(stringifiedBody);
    }
    req.on("error", (error: Error) => {
      reject(error);
    });

    req.end();
  });
}

type FormatQuery =
  | ListRefundQuery
  | ListTransactionsQuery
  | TransactionTotalQueryParams
  | ExportTransactionQueryParams
  |VerifyNumberQueryParams
  | GetBanksQueryParams;
export function formatQueryParams(params: FormatQuery): string {
  let formattedQueryString: string = "";

  if (params && Object.keys(params).length) {
    formattedQueryString = `?${querystring.stringify(params as any)}`;
  }
  return formattedQueryString;
}
export function transformToCamelCase(input: string) {
  return input.replace(/^[A-Z]/, (match) => match.toLowerCase());
}
