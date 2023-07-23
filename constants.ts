import dotenv from "dotenv";
import { HTTP_METHODS, PayStackQueryOptions } from "./types";
dotenv.config();
const { PAYSTACK_SK } = process.env;
export const PAYSTACK_PATHS = {
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

type Method = keyof typeof PAYSTACK_PATHS;
const methods: Method[] = Object.keys(PAYSTACK_PATHS) as Method[];

export const getRequestData = (
  requestMethod: keyof typeof METHODS,
  path?: string,
  body?: any,
): { [key in Method]: PayStackQueryOptions } => {
  const requestData: { [key in Method]: PayStackQueryOptions } = {} as any;
  methods.forEach((method: Method) => {
    const fullPath = path
      ? `${PAYSTACK_PATHS[method]}${path}`
      : PAYSTACK_PATHS[method];

    requestData[method] = {
      hostname: PAYSTACK_ENDPOINT,
      port: 443,
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
