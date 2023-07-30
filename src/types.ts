export interface BasePaystackResponse {
  status: boolean;
  message: string;
}
interface BasePaystackErrorResponse {
  status: false;
  message: string;
}
interface BasePaystackSuccessResponse {
  status: true;
  message: string;
}
export interface PayStackQueryOptions {
  hostname: string;
  port?: 443 | number;
  path: string;
  method: HTTP_METHODS;
  headers: {
    Authorization: string;
  };
  body?: Record<string, string | number>;
}
type BankType = "nuban";
type PayStackCurrency = "NGN" | "GHS" | "ZAR" | "USD";
export type HTTP_METHODS = "GET" | "HEAD" | "POST" | "PUT" | "PATH" | "DELETE";
type Country = "ghana" | "nigeria" | "south africa";
type CardBrand = "American Express" | "Discover" | " Mastercard" | "Visa";
type GhanaBankCodes =
  | "030100" /* Absa Bank Ghana Ltd */
  | "280100" /* Access Bank */
  | "080100" /* ADB Bank Limited */
  | "ATL" /* AirtelTigo */
  | "070101" /* ARB Apex Bank */
  | "210100" /* Bank of Africa Ghana */
  | "010100" /* Bank of Ghana */
  | "300335" /* Best Point Savings & Loans */
  | "270100" /* BSIC Ghana Limited */
  | "140100" /* CAL Bank Limited */
  | "340100" /* Consolidated Bank Ghana Limited */
  | "130100" /* Ecobank Ghana Limited */
  | "200100" /* FBNBank Ghana Limited */
  | "240100" /* Fidelity Bank Ghana Limited */
  | "170100" /* First Atlantic Bank Limited */
  | "330100" /* First National Bank Ghana Limited */
  | "040100" /* GCB Bank Limited */
  | "230100" /* Guaranty Trust Bank (Ghana) Limited */
  | "MTN" /* MTN */
  | "050100" /* National Investment Bank Limited */
  | "360100" /* OmniBank Ghana Limited */
  | "180100" /* Prudential Bank Limited */
  | "110100" /* Republic Bank (GH) Limited */
  | "300361" /* Services Integrity Savings and Loans */
  | "090100" /* Société Générale Ghana Limited */
  | "190100" /* Stanbic Bank Ghana Limited */
  | "020100" /* Standard Chartered Bank Ghana Limited */
  | "060100" /* United Bank for Africa Ghana Limited */
  | "100100" /* Universal Merchant Bank Ghana Limited */
  | "VOD" /* Vodafone */
  | "120100"; /* Zenith Bank Ghana */

type NigerianBankCodes =
  | "120001" /* 9mobile 9Payment Service Bank */
  | "801" /* Abbey Mortgage Bank */
  | "51204" /* Above Only MFB */
  | "51312" /* Abulesoro MFB */
  | "044" /* Access Bank */
  | "063" /* Access Bank (Diamond) */
  | "602" /* Accion Microfinance Bank */
  | "50036" /* Ahmadu Bello University Microfinance Bank */
  | "120004" /* Airtel Smartcash PSB */
  | "51336" /* AKU Microfinance Bank */
  | "035A" /* ALAT by WEMA */
  | "090629" /* Amegy Microfinance Bank */
  | "50926" /* Amju Unique MFB */
  | "51341" /* AMPERSAND MICROFINANCE BANK */
  | "50083" /* Aramoko MFB */
  | "401" /* ASO Savings and Loans */
  | "MFB50094" /* Astrapolaris MFB LTD */
  | "51229" /* Bainescredit MFB */
  | "50117" /* Banc Corp Microfinance Bank */
  | "50931" /* Bowen Microfinance Bank */
  | "FC40163" /* Branch International Financial Services Limited */
  | "565" /* Carbon */
  | "865" /* CASHCONNECT MFB */
  | "50823" /* CEMCS Microfinance Bank */
  | "50171" /* Chanelle Microfinance Bank Limited */
  | "312" /* Chikum Microfinance bank */
  | "023" /* Citibank Nigeria */
  | "50910" /* Consumer Microfinance Bank */
  | "50204" /* Corestep MFB */
  | "559" /* Coronation Merchant Bank */
  | "FC40128" /* County Finance Limited */
  | "51297" /* Crescent MFB */
  | "50162" /* Dot Microfinance Bank */
  | "050" /* Ecobank Nigeria */
  | "50263" /* Ekimogun MFB */
  | "098" /* Ekondo Microfinance Bank */
  | "50126" /* Eyowo */
  | "51318" /* Fairmoney Microfinance Bank */
  | "070" /* Fidelity Bank */
  | "51314" /* Firmus MFB */
  | "011" /* First Bank of Nigeria */
  | "214" /* First City Monument Bank */
  | "413" /* FirstTrust Mortgage Bank Nigeria */
  | "50315" /* FLOURISH MFB */
  | "501" /* FSDH Merchant Bank Limited */
  | "812" /* Gateway Mortgage Bank LTD */
  | "00103" /* Globus Bank */
  | "100022" /* GoMoney */
  | "50739" /* Goodnews Microfinance Bank */
  | "562" /* Greenwich Merchant Bank */
  | "058" /* Guaranty Trust Bank */
  | "51251" /* Hackman Microfinance Bank */
  | "50383" /* Hasal Microfinance Bank */
  | "030" /* Heritage Bank */
  | "120002" /* HopePSB */
  | "51244" /* Ibile Microfinance Bank */
  | "50439" /* Ikoyi Osun MFB */
  | "50442" /* Ilaro Poly Microfinance Bank */
  | "50453" /* Imowo MFB */
  | "50457" /* Infinity MFB */
  | "301" /* Jaiz Bank */
  | "50502" /* Kadpoly MFB */
  | "082" /* Keystone Bank */
  | "50200" /* Kredi Money MFB LTD */
  | "50211" /* Kuda Bank */
  | "90052" /* Lagos Building Investment Company Plc. */
  | "50549" /* Links MFB */
  | "031" /* Living Trust Mortgage Bank */
  | "303" /* Lotus Bank */
  | "50563" /* Mayfair MFB */
  | "50304" /* Mint MFB */
  | "50515" /* Moniepoint MFB */
  | "120003" /* MTN Momo PSB */
  | "107" /* Optimus Bank Limited */
  | "100002" /* Paga */
  | "999991" /* PalmPay */
  | "104" /* Parallex Bank */
  | "311" /* Parkway - ReadyCash */
  | "999992" /* Paycom */
  | "50743" /* Peace Microfinance Bank */
  | "51146" /* Personal Trust MFB */
  | "50746" /* Petra Mircofinance Bank Plc */
  | "268" /* Platinum Mortgage Bank */
  | "076" /* Polaris Bank */
  | "50864" /* Polyunwana MFB */
  | "105" /* PremiumTrust Bank */
  | "101" /* Providus Bank */
  | "51293" /* QuickFund MFB */
  | "502" /* Rand Merchant Bank */
  | "90067" /* Refuge Mortgage Bank */
  | "51286" /* Rigo Microfinance Bank Limited */
  | "50767" /* ROCKSHIELD MICROFINANCE BANK */
  | "125" /* Rubies MFB */
  | "51113" /* Safe Haven MFB */
  | "951113" /* Safe Haven Microfinance Bank Limited */
  | "40165" /* SAGE GREY FINANCE LIMITED */
  | "50582" /* Shield MFB */
  | "51062" /* Solid Allianze MFB */
  | "50800" /* Solid Rock MFB */
  | "51310" /* Sparkle Microfinance Bank */
  | "221" /* Stanbic IBTC Bank */
  | "068" /* Standard Chartered Bank */
  | "51253" /* Stellas MFB */
  | "232" /* Sterling Bank */
  | "100" /* Suntrust Bank */
  | "50968" /* Supreme MFB */
  | "302" /* TAJ Bank */
  | "090560" /* Tanadi Microfinance Bank */
  | "51269" /* Tangerine Money */
  | "51211" /* TCF MFB */
  | "102" /* Titan Bank */
  | "100039" /* Titan Paystack */
  | "50840" /* U&C Microfinance Bank Ltd (U AND C MFB) */
  | "MFB51322" /* Uhuru MFB */
  | "50870" /* Unaab Microfinance Bank Limited */
  | "50871" /* Unical MFB */
  | "51316" /* Unilag Microfinance Bank */
  | "032" /* Union Bank of Nigeria */
  | "033" /* United Bank For Africa */
  | "215" /* Unity Bank */
  | "566" /* VFD Microfinance Bank Limited */
  | "51355" /* Waya Microfinance Bank */
  | "035" /* Wema Bank */
  | "057" /* Zenith Bank */;

type SouthAfricanBankCodes =
  | "632005" /* Absa Bank Limited, South Africa */
  | "430000" /* African Bank Limited */
  | "800000" /* Albaraka Bank */
  | "888000" /* Bank Zero */
  | "462005" /* Bidvest Bank Limited */
  | "470010" /* Capitec Bank Limited */
  | "350005" /* CitiBank */
  | "679000" /* Discovery Bank Limited */
  | "591000" /* Finbond EPE */
  | "589000" /* Finbond Mutual Bank */
  | "250655" /* First National Bank */
  | "201419" /* FirstRand Bank */
  | "584000" /* Grindrod Bank */
  | "587000" /* HSBC South Africa */
  | "580105" /* Investec Bank Ltd */
  | "432000" /* JP Morgan South Africa */
  | "450105" /* Mercantile Bank */
  | "198765" /* Nedbank */
  | "585001" /* Olympus Mobile */
  | "261251" /* Rand Merchant Bank */
  | "222026" /* RMB Private Bank */
  | "683000" /* SASFIN Bank */
  | "351005" /* Société Générale South Africa */
  | "410105" /* South African Bank of Athens */
  | "051001" /* Standard Bank South Africa */
  | "730020" /* Standard Chartered Bank */
  | "678910" /* TymeBank */
  | "431010" /* Ubank Ltd */
  | "588000"; /* VBS Mutual Bank */

export type BankCodes =
  | GhanaBankCodes
  | NigerianBankCodes
  | SouthAfricanBankCodes;
export interface BaseGetBankResponse {
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: null | string;
  pay_with_bank: boolean;
  active: boolean;
  is_deleted: boolean;
  country: string;
  currency: PayStackCurrency;
  type: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetBanksQueryParams {
  /**
   * The country from which to obtain the list of supported banks. e.g country=ghana or country=nigeria:
   *
   * **Note**: Make sure country name is in lowercase
   */
  country?: Country;
  /**
   * Flag to enable cursor pagination on the endpoint
   */
  use_cursor?: boolean;
  /**
   *The number of objects to return per page. Defaults to 50, and limited to 100 records per page.
   */
  perPage?: number;
  /**
   * A flag to filter for banks a customer can pay directly from
   */
  pay_with_bank?: boolean;
  /**
   * A flag to filter for available banks a customer can make a transfer to complete a payment
   */
  pay_with_bank_transfer?: boolean;
  /**
   *A cursor that indicates your place in the list. It can be used to fetch the next page of the list
   */
  next?: string;
  /**
   *A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request
   */
  previous?: string;
  /**
   * The gateway type of the bank. It can be one of these: [emandate, digitalbankmandate]
   *
   */
  gateway?: string;
  /**
   * Type of financial channel. For Ghanaian channels, please use either mobile_money for mobile money channels OR ghipps for bank channels
   */
  type?: string;
  /**
   * Any of NGN, USD, GHS or ZAR
   */
  currency?: PayStackCurrency;
}
export interface GetBanksResponse extends BasePaystackResponse {
  data: BaseGetBankResponse[];
}
export interface GetCountriesResponse extends BasePaystackResponse {
  id: number;
  active_for_dashboard_onboarding: boolean;
  name: string;
  iso_code: string;
  default_currency_code: PayStackCurrency;
  integration_defaults: any;
  calling_code: string;
  pilot_mode: boolean;
  relationships: {
    currency: {
      type: string;
      data: PayStackCurrency[];
      supported_currencies: {
        NGN: {
          bank: {
            bank_type: BankType;
            branch_code: boolean;
            account_name: boolean;
            account_verification_required: boolean;
            account_number_label: string;
            account_number_pattern: {
              exact_match: boolean;
              pattern: string;
            };
            documents: any[];
            show_account_number_tooltip: boolean;
          };
        };
        USD: {
          bank: {
            bank_type: BankType;
            required_fields: string[];
            branch_code: boolean;
            account_name: boolean;
            account_verification_required: true;
            account_number_label: string;
            account_number_pattern: {
              exact_match: boolean;
              pattern: string;
            };
            documents: any[];
            notices: string[];
          };
        };
      };
    };
    integration_feature: {
      type: string;
      data: any[];
    };
    integration_type: {
      type: string;
      data: string[];
    };
    payment_method: {
      type: string;
      data: string[];
    };
  };
}

export interface VerifyNumberQueryParams {
  /**
   * Account number
   */
  account_number: string;
  /**
   * Bank code - you can use the **getBanks** method to retrieve a list of banks
   */
  bank_code: BankCodes;
}

export type VerifyNumberResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        account_number: string;
        account_name: string;
        bank_id: number;
      };
    });

export interface CardBINResponse extends BasePaystackResponse {
  data: {
    bin: string;
    brand: CardBrand;
    sub_brand: string;
    country_code: string;
    country_name: string;
    card_type: string;
    bank: string;
    linked_bank_id: number;
  };
}

export interface BasePaymentPayload {
  /**
   * Customer's email address
   *
   */
  email: string;
  /**
   * The transaction currency (NGN, GHS, ZAR or USD). Defaults to your integration currency.
   *
   */
  currency?: PayStackCurrency;
  /**
   * Amount you're requesting from the client and it should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   *
   */
  amount: number;
  /**
   *Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
   *
   */
  reference?: string | any;
  /**
   * Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction
   *
   */
  metadata?: {
    cart_id: number;
    custom_fields: {
      display_name: string;
      variable_name: string;
      value: number | string;
    }[];
  };
  /**
   * An array of payment channels to control what channels you want
   * to make available to the user to make a payment with.
   * Available channels include: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
   *
   */
  channels?:
    | "card"
    | "bank"
    | "ussd"
    | "qr"
    | "mobile_money"
    | "bank_transfer"
    | "eft"[];
  /**
   * The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
   *
   */
  subaccount?: string;
  /**
     *An amount used to override the split
      configuration for a single split payment. 
      If set, the amount specified goes to the main 
     account regardless of the split configuration.
     */
  transaction_charge?: number;
  /**
   * Who bears Paystack charges? account or subaccount (defaults to account).
   *
   */
  bearer?: string;
}

export interface BaseQuery {
  /**
   * Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
   */
  perPage?: number;
  /**
   * Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
   */

  page?: number;

  /**
   * A timestamp from which to start listing e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
   */

  from?: Date;

  /**
   * A timestamp from which to end listing e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
   */
  to?: Date;
}
export interface PaginationMetadata {
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}
export interface ChargeAuthorizationPayload extends BasePaymentPayload {
  /**
   * Valid authorization code to charge
   */
  authorization_code: string;

  /**
   * If you are making a scheduled charge call,
   * it is a good idea to queue them so the processing system does
   * not get overloaded causing transaction processing errors.
   *  Send queue:true to take advantage of our queued charging.
   */
  queue?: boolean;
}

/** ===========CHARGE============= */

export interface BaseChargePayload {
  /**
   * Customer's email address
   */
  email: string;
  /**
   * Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  amount: number;

  /**
   * An authorization code to charge (don't send if charging a bank account)
   */
  authorization_code?: string;
  /**
   * 4-digit PIN (send with a non-reusable authorization code)
   */
  pin?: string;
  /**
   * A JSON object
   */
  metadata?: Record<string, any>;
  /**
   * Unique transaction reference. Only -, .`, = and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * This is the unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed.
   */
  device_id?: string;
}

export interface ChargeWithMobileMoneyPayload extends BaseChargePayload {
  /**
   * Mobile details (don't send if charging an authorization code, bank or card)
   */
  mobile_money: {
    phone: string;
    provider: string;
  };
}
export interface ChargeWithCardPayload extends BaseChargePayload {
  card: {
    number: string;
    cvv: string;
    expiry_year: string;
    expiry_month: string;
  };
}
export interface ChargeWithBankPayload extends BaseChargePayload {
  /**
   * Bank account to charge (don't send if charging an authorization code)
   */
  bank: {
    account_number: string;
    code: string;
  };
}
export interface ChargeWithUSSDPayload extends BaseChargePayload {
  /**
   * USSD type to charge (don't send if charging an authorization code, bank or card)
   */
  ussd: Record<string, any>;
}

export interface SubmitChargePinPayload {
  pin: string;
  reference: string;
}
export interface SubmitChargeOTPPayload {
  otp: string;
  reference: string;
}
export interface SubmitChargePhonePayload {
  phone: string;
  reference: string;
}

export interface SubmitChargeBirthdayPayload {
  birthday: Date;
  reference: string;
}

export interface SubmitChargeAddressPayload {
  address: string;
  reference: string;
  city: string;
  state: string;
  zipcode: string;
}

type ChargeDataStatus =
  | "pay_offline"
  | "send_pin"
  | "send_address"
  | "send_otp"
  | "send_address"
  | "send_birthday";
export type BaseChargeResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        reference: string;
        status: ChargeDataStatus;
        display_text: string;
      };
    });

// ======================= BULK CHARGE ===================

export type BulkChargesPayload = {
  authorization: string;
  amount: number;
  reference: string;
};
export type BulkChargesResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        batch_code: string;
        reference: string;
        id: number;
        integration: number;
        domain: string;
        status: string;
        total_charges: number;
        pending_charges: number;
        createdAt: string;
        updatedAt: string;
      };
    });

export type BulkChargeListsQuery = BaseQuery;

interface BulkChargesData {
  domain: string;
  batch_code: string;
  status: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type BulkChargeListsReponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse &
      PaginationMetadata & {
        data: BulkChargesData[];
      });

export interface FetchBulkChargeBatchResponse extends BasePaystackResponse {
  data: {
    domain: string;
    batch_code: string;
    status: string;
    id: number;
    total_charges: number;
    pending_charges: number;
    createdAt: string;
    updatedAt: string;
  };
}
export interface FetchChargesInBatch extends BaseQuery {
  /**
   * Either one of these values: pending, success or failed
   */
  status?: "pending" | "success" | "failed";
}
interface BulkChargeItem {
  integration: number;
  bulkcharge: number;
  customer: {
    id: number;
    first_name: string | null;
    last_name: string | null;
    email: string;
    customer_code: string;
    phone: string | null;
    metadata: any | null;
    risk_action: string;
  };
  authorization: {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    account_name: string;
  };
  transaction: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string | null;
    metadata: string;
    log: any | null;
    fees: any | null;
    fees_split: any | null;
    customer: any;
    authorization: any;
    plan: any;
    subaccount: any;
    paidAt: string;
    createdAt: string;
  };
  domain: string;
  amount: number;
  currency: string;
  status: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type FetchChargesInBatchResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse &
      PaginationMetadata & {
        data: BulkChargeItem[];
      });

// INTEGRATIONS
export type BaseIntegrationResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        payment_session_timeout: number;
      };
    });
export type FetchIntegrationTimeoutResponse = BaseIntegrationResponse;

export interface UpdateIntegrationTimeoutPayload {
  timeout: number;
}
export type UpdateIntegrationTimeoutResponse = BaseIntegrationResponse;

// REFUND
export interface RefundPayload {
  /**
   * Transaction reference or ID.
   */
  transaction: string;

  /**
   * Amount (in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR) to be refunded to the customer.
   * This field is optional and defaults to the original transaction amount if not provided.
   * The refund amount cannot exceed the original transaction amount.
   */
  amount?: number;

  /**
   * Three-letter ISO currency code. Allowed values are: NGN, GHS, ZAR, or USD.
   */
  currency?: string;

  /**
   * Customer's reason for the refund.
   */
  customer_note?: string;

  /**
   * Merchant's reason for the refund.
   */
  merchant_note?: string;
}

export type RefundResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse) &
      BasePaystackSuccessResponse & {
        data: {
          transaction: {
            id: number;
            domain: string;
            reference: string;
            amount: number;
            paid_at: string;
            channel: string;
            currency: string;
            authorization: {
              exp_month: number | null;
              exp_year: number | null;
              account_name: string | null;
            };
            customer: {
              international_format_phone: string | null;
            };
            plan: Record<string, any>;
            subaccount: {
              currency: string | null;
            };
            split: Record<string, any>;
            order_id: string | null;
            paidAt: string;
            pos_transaction_data: Record<string, any> | null;
            source: Record<string, any> | null;
            fees_breakdown: Record<string, any> | null;
          };
          integration: number;
          deducted_amount: number;
          channel: string | null;
          merchant_note: string;
          customer_note: string;
          status: string;
          refunded_by: string;
          expected_at: string;
          currency: string;
          domain: string;
          amount: number;
          fully_deducted: boolean;
          id: number;
          createdAt: string;
          updatedAt: string;
        };
      };

export interface ListRefundQuery extends BaseQuery {
  /**
   * Identifier for transaction to be refunded
   */
  transaction?: string;
  /**
   * Three-letter ISO currency. Allowed values are: NGN, GHS, ZAR or USD
   */
  currency?: string;
}
export interface ListRefundResponseData {
  id: number;
  integration: number;
  domain: string;
  transaction: number;
  dispute: number;
  amount: number;
  deducted_amount: number | null;
  currency: string;
  channel: string;
  fully_deducted: number | null;
  refunded_by: string;
  refunded_at: string;
  expected_at: string;
  settlement: any | null; // The actual structure of the 'settlement' property is unknown from the provided data.
  customer_note: string;
  merchant_note: string;
  created_at: string;
  updated_at: string;
  status: string;
}

export type ListRefundResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: ListRefundResponseData[];
    });

export interface FetchRefundParam {
  reference: string;
}

export type FetchReFundReponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        integration: number;
        transaction: number;
        dispute: number | null;
        settlement: any | null; // The actual structure of the 'settlement' property is unknown from the provided data.
        domain: string;
        amount: number;
        deducted_amount: number;
        fully_deducted: boolean;
        currency: string;
        channel: string;
        status: string;
        refunded_by: string;
        refunded_at: string;
        expected_at: string;
        customer_note: string;
        merchant_note: string;
        id: number;
        createdAt: string;
        updatedAt: string;
      };
    });

// SUB ACCOUNTS
export interface CreateSubaccountPayload {
  /**
   * Name of the business for the subaccount.
   */
  business_name: string;

  /**
   * Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
   */
  settlement_bank: BankCodes;

  /**
   * Bank Account Number.
   */
  account_number: string;

  /**
   * The default percentage charged when receiving on behalf of this subaccount.
   */
  percentage_charge: number;

  /**
   * A description for this subaccount.
   */
  description?: string;

  /**
   * A contact email for the subaccount.
   */
  primary_contact_email?: string;

  /**
   * A name for the contact person for this subaccount.
   */
  primary_contact_name?: string;

  /**
   * A phone number to call for this subaccount.
   */
  primary_contact_phone?: string;

  /**
   * Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.
   * Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}
   */
  metadata?: string;
}

interface SubaccountData {
  integration: number;
  domain: string;
  subaccount_code: string;
  business_name: string;
  description: string | null;
  primary_contact_name: string | null;
  primary_contact_email: string | null;
  primary_contact_phone: string | null;
  metadata: Record<string, unknown> | null;
  percentage_charge: number;
  is_verified: boolean;
  settlement_bank: string;
  account_number: string;
  settlement_schedule: string;
  active: boolean;
  migrate: boolean;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSubaccountResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: SubaccountData;
    });

export interface ListSubaccountQuery extends BaseQuery {}
export interface ListSubaccountResponse
  extends BasePaystackResponse,
    PaginationMetadata {
  data: SubaccountData[];
}

export type FetchSubAccountResponse = CreateSubaccountResponse;

export interface UpdateSubAccountPayload
  extends Partial<CreateSubaccountPayload> {
  /** Subaccount's ID or code */
  id: string;
  /**
   * Activate or deactivate a subaccount. Set value to true to activate subaccount or false to deactivate the subaccount.
   */
  active?: boolean;

  /**
   * Bank Account Number (optional for updates).
   */
  account_number?: string;
  /**
   * The default percentage charged when receiving on behalf of this subaccount.
   */
  percentage_charge?: number;
  /**
   * A description for this subaccount.
   */
  desceription?: string;
}

export type UpdateSubAccountReponse = CreateSubaccountResponse;

// TERMINAL
export interface SendTerminalEventPayload {
  /**
   * The type of event to push. Currently supports 'invoice' and 'transaction'.
   */
  type: "invoice" | "transaction";

  /**
   * The action the Terminal needs to perform.
   * For the 'invoice' type, the action can either be 'process' or 'view'.
   * For the 'transaction' type, the action can either be 'process' or 'print'.
   */
  action: "process" | "view" | "print";

  /**
   * The parameters needed to perform the specified action.
   * For the 'invoice' type, you need to pass the invoice id and offline reference: {id: invoice_id, reference: offline_reference}.
   * For the 'transaction' type, you can pass the transaction id: {id: transaction_id}.
   */
  data: {
    id: string; // The id of the invoice or transaction.
    reference?: string; // The offline reference for the invoice (only for 'invoice' type).
  };
}
export type SendEventTerminalResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        id: string;
      };
    });

export type FetchEventStatusResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        delivered: boolean;
      };
    });

export type FetchTerminalStatusResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        online: boolean;
        available: boolean;
      };
    });

interface TerminalData {
  id: number;
  serial_number: string;
  device_make: string | null;
  terminal_id: string;
  integration: number;
  domain: string;
  name: string;
  address: string | null;
  status: "active" | "inactive";
}

export type ListTerminalsResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackErrorResponse & {
      data: TerminalData[];
      meta: {
        next: string | null;
        previous: string | null;
        perPage: number;
      };
    });

export interface ListTerminalQuery {
  /**
   * Specify how many records you want to retrieve per page. If not specified, we use a default value of 50.
   */
  perPage: number;

  /**
   * A cursor that indicates your place in the list. It can be used to fetch the next page of the list.
   */
  next: string | null;

  /**
   * A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request.
   */
  previous: string | null;
}

// TRANSACTION SPLIT
type TransactionSplitBearerType =
  | "subaccount"
  | "account"
  | "all-proportional"
  | "all";
type TransactionSplitType = "percentage" | "flat";
export interface CreateTransactionSplitPayload {
  /**
   * Name of the transaction split.
   */
  name: string;

  /**
   * The type of transaction split you want to create. Possible values: percentage | flat
   */
  type: TransactionSplitType;

  /**
   * Any of NGN, GHS, ZAR, or USD.
   */
  currency: PayStackCurrency;

  /**
   * A list of objects containing subaccount code and number of shares: [{ subaccount: 'ACT_xxxxxxxxxx', share: xxx }, { ... }]
   */
  subaccounts: { subaccount: string; share: number }[];

  /**
   * Any of subaccount | account | all-proportional | all
   */
  bearer_type: TransactionSplitBearerType;

  /**
   * Subaccount code.
   */
  bearer_subaccount: string;
}

interface BaseTransactionSplitResponse {
  id: number;
  name: string;
  type: TransactionSplitType;
  currency: PayStackCurrency;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: TransactionSplitBearerType;
  bearer_subaccount: string;
  createdAt: Date;
  updatedAt: Date;
  subaccounts: {
    subaccount: {
      id: number;
      subaccount_code: string;
      business_name: string;
      description: string;
      primary_contact_name: string | null;
      primary_contact_email: string | null;
      primary_contact_phone: string | null;
      metadata: Record<string, string | null> | null;
      percentage_charge: number;
      settlement_bank: string;
      account_number: string;
    };
    share: number;
  }[];
  total_subaccounts: number;
}
export type CreateTransactionSplitResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: BaseTransactionSplitResponse;
    });

export interface ListTransactionSplitQuery extends BaseQuery {
  /**
   * The name of the split.
   */
  name?: string;

  /**
   * Any of true or false.
   */
  active?: boolean;

  /**
   * Sort by name, defaults to createdAt date.
   */
  sort_by?: string;
}

export interface ListTransactionSplitResponse
  extends BasePaystackResponse,
    PaginationMetadata {
  data: BaseTransactionSplitResponse[];
}

export type FetchTransactionSplitResponse = CreateTransactionSplitResponse;

export interface UpdateTransactionSplitPayload {
  /** Split Id */
  id: string;
  /**
   * Name of the transaction split.
   */
  name: string;

  /**
   * True or False.
   */
  active: boolean;

  /**
   * Any of the following values: subaccount | account | all-proportional | all.
   */
  bearer_type?: TransactionSplitBearerType;

  /**
   * Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount.
   */
  bearer_subaccount?: string;
}

export type UpdateTransactionSplit = CreateTransactionSplitResponse;

export interface TransactionSplitSubAccountPayload {
  /** Split Id */
  id: string;
  /**
   * This is the subaccount code.
   */
  subaccount: string;

  /**
   * This is the transaction share for the subaccount.
   */
  share: number;
}

export type TransactionSplitSubAccountResponse = CreateTransactionSplitResponse;

export interface RemoveSubAccountFromSplitPayload {
  /** Split Id */
  id: string;

  /** This is the sub account code */
  subaccount: string;
}
export type RemoveSubAccountFromSplitResponse = BasePaystackResponse;

// TRANSACTIONS
export interface InitializePaymentPayload extends BasePaymentPayload {
  callback_url?: string;
  /**
   * If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount
   *
   */
  plan?: string;
  /**
   * Number of times to charge customer during subscription to plan
   *
   */
  invoice_limit?: number;
  /**
   * The split code of the transaction split. e.g. SPL_98WF13Eb3w
   *
   */
  split_code?: string;
}

export interface InitializePaymentResponse extends BasePaystackResponse {
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export type BaseTransactionResponse = {
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: null;
    gateway_response: string;
    paid_at: Date;
    created_at: Date;
    channel: string;
    currency: PayStackCurrency;
    ip_address: string;
    metadata: string;
    log: {
      start_time: number;
      time_spent: number;
      attempts: number;
      errors: number;
      success: boolean;
      mobile: boolean;
      input: any[];
      history: {
        type: string;
        message: string;
        time: number;
      }[];
    };
    fees: number;
    fees_split: null | number;
    authorization: {
      authorization_code: string;
      bin: string;
      last4: string;
      exp_month: string;
      exp_year: string;
      channel: string;
      card_type: string;
      bank: string;
      country_code: string;
      brand: CardBrand;
      reusable: boolean;
      signature: string;
      account_name: null | string;
    };
    customer: {
      id: number;
      first_name: null | string;
      last_name: null | string;
      email: string;
      customer_code: string;
      phone: null | string;
      metadata: null | Record<string, string | number>;
      risk_action: string;
      international_format_phone: null | string;
    };
    plan: null | string;
    split: any;
    order_id: null | number;
    paidAt: Date;
    createdAt: Date;
    requested_amount: number;
    pos_transaction_data: null | Record<string, string | number>;
    source: null | string;
    fees_breakdown: null | any;
    transaction_date: Date;
    plan_object: any;
    subaccount: any;
  };
};
export type TransactionResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & BaseTransactionResponse);
export interface ListTransactionsQuery extends BaseQuery {
  /**
   * Specify an ID for the customer whose transactions you want to retrieve
   */
  customer?: number;
  /**
   *
   * The Terminal ID for the transactions you want to retrieve
   */

  terminalId?: string;
  /**
   * Filter transactions by status ('failed', 'success', 'abandoned')
   */

  status?: "failed" | "success" | "abandoned";
  /**
   * Filter transactions by amount. Specify the amount (in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR)
   */

  amount?: number;
}
export type ListTransactionsResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: BaseTransactionResponse[];
    });

export interface TransactionTimelineResponse extends BasePaystackResponse {
  data: {
    time_spent: number;
    attempts: number;
    authentication: null | any;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: any[];
    channel: string;
    history: {
      type: string;
      message: string;
      time: number;
    }[];
  };
}

export interface TransactionTotalQueryParams extends BaseQuery {}
export interface TransactionTotalResponse extends BasePaystackResponse {
  data: {
    total_transactions: number;
    unique_customers: number;
    total_volume: number;
    total_volume_by_currency: {
      currency: PayStackCurrency;
      amount: number;
    }[];
    pending_transfers: number;
    pending_transfers_by_currency: {
      currency: PayStackCurrency;
      amount: number;
    }[];
  };
}
export interface ExportTransactionQueryParams extends BaseQuery {
  /**
   *Specify an ID for the customer whose transactions you want to retrieve
   */
  customer?: number;
  /**
   *Filter transactions by status ('failed', 'success', 'abandoned')
   */
  status?: "success" | "failed" | "abandoned";
  /**
   *Specify the transaction currency to export. Allowed values are: in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  currency?: PayStackCurrency;
  /**
   *Filter transactions by amount. Specify the amount, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR
   */
  amount?: number;
  /**
   *Set to true to export only settled transactions. false for pending transactions. Leave undefined to export all transactions
   */
  settled?: boolean;
  /**
   * An ID for the settlement whose transactions we should export
   */
  settlement?: number;
  /**
   * Specify a payment page's id to export only transactions conducted on said page
   */
  payment_page?: number;
}

export interface ExportTransactionResponse extends BasePaystackResponse {
  data: {
    path: string;
  };
  expireAt: Date;
}

export interface PartialDebitPayload {
  /**
   * Authorization Code
   */
  authorization_code: string;

  /**
   * Specify the currency you want to debit. Allowed values are NGN, GHS, ZAR, or USD.
   */
  currency: "NGN" | "GHS" | "ZAR" | "USD";

  /**
   * Amount should be in kobo if currency is NGN, pesewas if currency is GHS, and cents if currency is ZAR.
   */
  amount: string;

  /**
   * Customer's email address (attached to the authorization code).
   */
  email: string;

  /**
   * Unique transaction reference. Only -, ., =, and alphanumeric characters allowed.
   */
  reference?: string;

  /**
   * (Optional) The minimum amount that should be charged.
   * This is useful if you want to enforce a minimum transaction amount.
   */
  at_least?: string;
}

type PartialDebitResponseExclusion =
  | "pos_transaction_data"
  | "source"
  | "fees_breakdown"
  | "plan_object"
  | "subaccount"
  | "plan"
  | "paidAt"
  | "createdAt"
  | "requested_amount";
export type PartialDebitResponse = Omit<
  TransactionResponse,
  PartialDebitResponseExclusion
>;

// TRANSFER
/** ============= TRANSFER ============ */
type TransferType = "nuban" | "basa" | "mobile_money" | "authorization";
export interface BaseTransferInitializerPayload {
  type: TransferType;
  name: string;
  currency: PayStackCurrency;
}
export interface InitializeTransferPayload
  extends BaseTransferInitializerPayload {
  account_number: string;
  bank_code: BankCodes;
  currency: PayStackCurrency;
}
export interface InitializeTransferWithAuthorizationPayload
  extends BaseTransferInitializerPayload {
  email: string;
  authorization_code: string;
}

export type TransferInitializeResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        active: boolean;
        createdAt: Date;
        currency: PayStackCurrency;
        domain: string;
        id: number;
        integration: number;
        name: string;
        recipient_code: string;
        type: TransferType;
        updatedAt: Date;
        is_deleted: boolean;
        isDeleted: boolean;
        details: {
          authorization_code: null | string;
          account_number: string;
          account_name: string;
          bank_code: BankCodes;
          bank_name: string;
        };
      };
    });
export interface CreateTransferPayload {
  source: "balance";
  amount: number;
  reference: string;
  recipient: string;
  reason: string;
}
export interface CreateFinalizeTransferPayload {
  transfer_code: string;
  otp: string;
}

export type CreateTransferResponse =
  | (BasePaystackResponse & BasePaystackErrorResponse)
  | (BasePaystackSuccessResponse & {
      data: {
        reference: string;
        integration: number;
        domain: string;
        amount: number;
        currency: PayStackCurrency;
        source: "balance";
        reason: string;
        recipient: number;
        status: "success" | "failed" | "abandoned";
        transfer_code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
      };
    });
