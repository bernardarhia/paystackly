import https, { RequestOptions } from "https";
import { PayStackQueryOptions } from "./types";
import { IncomingMessage } from "http";
export function sendRequest<T>(options: PayStackQueryOptions): Promise<T> {
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
            const parsedData = JSON.parse(responseData) as T;
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
