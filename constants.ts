import dotenv from "dotenv";
import { HTTP_METHODS, PayStackQueryOptions } from "./types";
dotenv.config();
const { PAYSTACK_SK } = process.env;
const PORT = 443;
export const PAYSTACK_PATHS: { [key in string]: string } = {
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
  createBulkCharge: "/bulkcharge",
  listBulkCharges: "/bulkcharge",
  fetchBulkChargeBatch: "/bulkcharge/:id",
  /** TRANSFER ENDPOINT */
  initializeTransfer: "/transferrecipient",
  createTransfer: "/transfer",
  finalizeTransfer: "/finalize_transfer",
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

type PathKeys = keyof typeof PAYSTACK_PATHS;
const PAYSTACK_PATH_KEYS: PathKeys[] = Object.keys(PAYSTACK_PATHS);

export const getRequestData = (
  requestMethod: keyof typeof METHODS,
  path?: string,
  body?: any
): { [key in PathKeys]: PayStackQueryOptions } => {
  const requestData: { [key in PathKeys]: PayStackQueryOptions } = {} as any;
  PAYSTACK_PATH_KEYS.forEach((pathKey: PathKeys) => {
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
