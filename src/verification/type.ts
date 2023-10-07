import { BankCodes, BaseResponse, CardBrand } from "../types";
export interface ResolveAccountQuery {
  /**
   * Account number
   */
  account_number: string;
  /**
   * Bank code - you can use the **getBanks** method to retrieve a list of banks
   */
  bank_code: BankCodes;
}

export type ResolveAccountResponse = BaseResponse<{
    account_number: string;
    account_name: string;
    bank_id: number;
}>;

export type CardBINResponse = BaseResponse<{
    bin: string;
    brand: CardBrand;
    sub_brand: string;
    country_code: string;
    country_name: string;
    card_type: string;
    bank: string;
    linked_bank_id: number;
}>;

export interface ValidateAccountPayload {
  /** Customer's first and last name registered with their bank */
  account_name: string;

  /** Customer’s account number */
  account_number: string;

  /** This can take one of: [ personal, business ] */
  account_type: "personal" | "business";
  /** The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint */
  bank_code: string;
  /** The two digit ISO code of the customer’s bank */
  country_code: string;
  /** Customer’s mode of identity. This could be one of: [ identityNumber, passportNumber, businessRegistrationNumber ] */
  document_type:
    | "identityNumber"
    | "passportNumber"
    | "businessRegistrationNumber";

  /** Customer’s mode of identity number */
  document_number?: string;
}

export type ValidateAccountResponse = BaseResponse<{
    verified: boolean;
    verificationMessage: string;
}>;

export abstract class BaseVerification {
  //     abstract getBanks(
  //     params: GetBanksparams
  //   ): Promise<GetBanksResponse>;

  //   abstract getCountries(): Promise<GetCountriesResponse[]>;

  abstract resolveAccount(
    params: ResolveAccountQuery
  ): Promise<ResolveAccountResponse>;

  /***
   * @param binNumber  - First 6 characters of card
   */
  abstract verifyCardBIN(params: {
    binNumber: string;
  }): Promise<CardBINResponse>;
  abstract validationAccount(
    payload: ValidateAccountPayload
  ): Promise<ValidateAccountResponse>;
}
