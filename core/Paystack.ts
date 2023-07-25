import {
  GetBanksQueryParams,
  GetBanksResponse,
  GetCountriesResponse,
  VerifyNumberQueryParams,
  VerifyNumberResponse,
  CardBINResponse,
  ChargeAuthorizationPayload,
} from "../types";
import querystring from "querystring";
import { Transaction } from "../transaction/Transaction";
import { Transfer } from "../transfer/Transfer";
import { Charges } from "../charge/Charge";
import { BulkCharges } from "../charge/BulkCharge";
import { sendRequest } from "../utils";
import { getRequestData } from "../constants";
import { TransactionResponse } from "../types/transaction";
abstract class PayStackBase {
  abstract getBanks(
    queryParams: GetBanksQueryParams,
  ): Promise<GetBanksResponse>;

  abstract getCountries(): Promise<GetCountriesResponse[]>;

  abstract verifyNumber(
    params: VerifyNumberQueryParams,
  ): Promise<VerifyNumberResponse>;

  abstract verifyCardBIN(binNumber: string): Promise<CardBINResponse>;

  abstract chargeAuthorization(
    payload: ChargeAuthorizationPayload,
  ): Promise<TransactionResponse>;
}

export class PayStack extends PayStackBase {
  protected token: string;
  readonly transaction: Transaction;
  readonly transfer: Transfer;
  readonly charges: Charges;
  readonly bulkCharges: BulkCharges;
  constructor() {
    super();
    this.transaction = new Transaction();
    this.transfer = new Transfer();
    this.charges = new Charges();
    this.bulkCharges = new BulkCharges();
  }

  async getBanks(queryParams?: GetBanksQueryParams): Promise<GetBanksResponse> {
    let formattedQueryString: string;

    if (queryParams && Object.keys(queryParams).length) {
      formattedQueryString = `?${querystring.stringify({ ...queryParams })}`;
    }
    return await sendRequest<GetBanksResponse>(
      getRequestData("GET", formattedQueryString).getBanks,
    );
  }

  async getCountries(): Promise<GetCountriesResponse[]> {
    return await sendRequest<GetCountriesResponse[]>(
      getRequestData("GET").getCountries,
    );
  }

  async verifyNumber(
    params: VerifyNumberQueryParams,
  ): Promise<VerifyNumberResponse> {
    let formattedQueryString: string;

    if (params && Object.keys(params).length) {
      formattedQueryString = `?${querystring.stringify({ ...params })}`;
    }
    return await sendRequest<VerifyNumberResponse>(
      getRequestData("GET", formattedQueryString).verifyNumber,
    );
  }

  async verifyCardBIN(binNumber: string): Promise<CardBINResponse> {
    let path = `/${binNumber}`;
    return await sendRequest<CardBINResponse>(
      getRequestData("GET", path).verifyCardBIN,
    );
  }

  async chargeAuthorization(
    payload: ChargeAuthorizationPayload,
  ): Promise<TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };
    return await sendRequest<TransactionResponse>(
      getRequestData("POST", null, body).chargeAuthorization,
    );
  }
}
