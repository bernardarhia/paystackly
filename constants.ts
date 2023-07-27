import dotenv from "dotenv";
import { HTTP_METHODS, PayStackQueryOptions } from "./types";
dotenv.config();
const { PAYSTACK_SK } = process.env;
const PORT = 443;

// Define the PATH_KEYS type as a union of all the keys from PAYSTACK_PATHS
type PATH_KEYS =
  | "getBanks"
  | "getCountries"
  | "verifyNumber"
  | "verifyCardBIN"
  | "initializeTransaction"
  | "verifyTransaction"
  | "listTransactions"
  | "fetchTransaction"
  | "chargeAuthorization"
  | "readTransactionTimeLine"
  | "transactionTotal"
  | "exportTransaction"
  | "createCharge"
  | "submitPin"
  | "submitOTP"
  | "submitPhone"
  | "submitBirthday"
  | "submitAddress"
  | "checkStatus"
  | "bulkCharge"
  | "refund"
  | "initializeTransfer"
  | "createTransfer"
  | "finalizeTransfer"
  | "integration"
  | "applePay";

// Define PAYSTACK_PATHS object type using mapped types
type PAYSTACK_PATHS_TYPE = { [key in PATH_KEYS]: string };

// Define the PAYSTACK_PATHS constant with the specific type
export const PAYSTACK_PATHS: PAYSTACK_PATHS_TYPE = {
  /** MISCELLANOUS */
  getBanks: "/bank",
  getCountries: "/country",
  verifyNumber: "/bank/resolve",
  verifyCardBIN: "/decision/bin",

  /** TRANSACTIONS ENDPOINT */
  initializeTransaction: "/transaction/initialize",
  verifyTransaction: "/transaction/verify",
  listTransactions: "/transaction",
  fetchTransaction: "/transaction",
  chargeAuthorization: "/transaction/charge_authorization",
  readTransactionTimeLine: "/transaction/timeline",
  transactionTotal: "/transaction/totals",
  exportTransaction: "/transaction/export",

  /** CHARGES ENDPOINT */
  createCharge: "/charge",
  submitPin: "/charge/submit_pin",
  submitOTP: "/charge/submit_otp",
  submitPhone: "/charge/submit_phone",
  submitBirthday: "/charge/submit_birthday",
  submitAddress: "/charge/submit_address",
  checkStatus: "/charge",

  /** BULK CHARGES ENDPOINT */
  bulkCharge: "/bulkcharge",

  /** REFUND ENDPOINT*/
  refund: "/refund",

  /** TRANSFER ENDPOINT */
  initializeTransfer: "/transferrecipient",
  createTransfer: "/transfer",
  finalizeTransfer: "/transfer/finalize_transfer",

  /** INTEGRATIONS ENDPOINT */
  integration: "/integration/payment_session_timeout",
  
  /** APPLE PAY */
   applePay: "/apple-pay/dmoain"
} as const;


export const PAYSTACK_ENDPOINT = "api.paystack.co";
export const METHODS: { [key in HTTP_METHODS]: HTTP_METHODS } = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATH: "PATH",
  DELETE: "DELETE",
  HEAD: "HEAD",
};


const PAYSTACK_PATH_KEYS: PATH_KEYS[] = Object.keys(PAYSTACK_PATHS) as PATH_KEYS[];

export const getRequestData = (
  requestMethod: keyof typeof METHODS,
  path?: string,
  body?: any
): { [key in PATH_KEYS]: PayStackQueryOptions } => {
  const requestData: { [key in PATH_KEYS]: PayStackQueryOptions } = {} as any;
  PAYSTACK_PATH_KEYS.forEach((pathKey: PATH_KEYS) => {
    const fullPath = path
      ? `${PAYSTACK_PATHS[pathKey]}${path}`
      : PAYSTACK_PATHS[pathKey];

    requestData[pathKey] = {
      hostname: PAYSTACK_ENDPOINT,
      port: PORT,
      path: fullPath,
      method: requestMethod,
      headers: {
        Authorization: `Bearer ${PAYSTACK_SK}`,
      },
      body,
    };
  });
  return requestData;
};
