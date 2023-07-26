import {
  GetBanksQueryParams,
  GetBanksResponse,
  GetCountriesResponse,
  VerifyNumberQueryParams,
  VerifyNumberResponse,
  CardBINResponse,
  ChargeAuthorizationPayload,
} from "../types";
import { Transaction } from "../transaction/Transaction";
import { Transfer } from "../transfer/Transfer";
import { Charges } from "../charge/Charge";
import { BulkCharges } from "../charge/BulkCharge";
import { formatQueryParams, sendRequest } from "../utils";
import { getRequestData } from "../constants";
import { TransactionResponse } from "../types/transaction";
import { Refund } from "../refund/Refund";
abstract class PayStackBase {
  abstract getBanks(
    queryParams: GetBanksQueryParams
  ): Promise<GetBanksResponse>;

  abstract getCountries(): Promise<GetCountriesResponse[]>;

  abstract verifyNumber(
    params: VerifyNumberQueryParams
  ): Promise<VerifyNumberResponse>;

  abstract verifyCardBIN(binNumber: string): Promise<CardBINResponse>;

  abstract chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse>;
}

const BaseClasses = [Transaction, Transfer, Charges, BulkCharges, Refund];
export class PayStack extends PayStackBase {
  protected token: string;
  readonly transaction: Transaction;
  readonly transfer: Transfer;
  readonly charges: Charges;
  readonly bulkCharges: BulkCharges;
  readonly refund: Refund;
  constructor() {
    super();
    for (const baseClass of BaseClasses) {
      const className = baseClass.name.toLowerCase();
      this[className] = new baseClass();
    }
  }

  async getBanks(queryParams: GetBanksQueryParams): Promise<GetBanksResponse> {
    let formattedQueryString: string = formatQueryParams(queryParams);
    return await sendRequest<GetBanksResponse>(
      getRequestData("GET", formattedQueryString).getBanks
    );
  }

  async getCountries(): Promise<GetCountriesResponse[]> {
    return await sendRequest<GetCountriesResponse[]>(
      getRequestData("GET").getCountries
    );
  }

  async verifyNumber(
    params: VerifyNumberQueryParams
  ): Promise<VerifyNumberResponse> {
    let formattedQueryString: string = formatQueryParams(params);
    return await sendRequest<VerifyNumberResponse>(
      getRequestData("GET", formattedQueryString).verifyNumber
    );
  }

  async verifyCardBIN(binNumber: string): Promise<CardBINResponse> {
    let path = `/${binNumber}`;
    return await sendRequest<CardBINResponse>(
      getRequestData("GET", path).verifyCardBIN
    );
  }

  async chargeAuthorization(
    payload: ChargeAuthorizationPayload
  ): Promise<TransactionResponse> {
    const body: Record<string, string | number | any> = {
      ...payload,
      amount: payload.amount * 100,
    };
    return await sendRequest<TransactionResponse>(
      getRequestData("POST", null, body).chargeAuthorization
    );
  }
}
