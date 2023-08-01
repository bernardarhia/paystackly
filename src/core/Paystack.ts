import { PaystackBase } from "../types";
import { Transaction } from "../transaction/Transaction";
import { Transfer } from "../transfer/Transfer";
import { Charges } from "../charge/Charge";
import { BulkCharges } from "../bulkCharge/BulkCharge";
import { transformToCamelCase } from "../utils";

import { Refund } from "../refund/Refund";
import { Integration } from "../integration/Integration";
import { ApplePay } from "../applePay/ApplePay";
import { TransactionSplit } from "../transactionSplit/TransactionSplit";
import { SubAccount } from "../subaccount/SubAccount";
import { Http } from "./Http";
import { TransferRecipient } from "../transferRecipient/TransferRecipient";
import { Terminal } from "../terminal/Terminal";

const PaystackClasses = [
  Transaction,
  Transfer,
  Charges,
  BulkCharges,
  Refund,
  Integration,
  TransactionSplit,
  SubAccount,
  ApplePay,
  TransferRecipient,
  Terminal
];
// Define the types for the properties
type PaystackInstance = InstanceType<(typeof PaystackClasses)[number]>;

export class PayStack extends PaystackBase {
  readonly transaction: Transaction;
  readonly transfer: Transfer;
  readonly charges: Charges;
  readonly bulkCharges: BulkCharges;
  readonly refund: Refund;
  readonly integration: Integration;
  readonly applePay: ApplePay;
  readonly transactionSplit: TransactionSplit;
  readonly subAccount: SubAccount;
  readonly transferRecipient: TransferRecipient;
  readonly terminal: Terminal;
  [key: string]: PaystackInstance;

  constructor(token: string) {
    super();

    Http.setAuthorization(token);
    for (const baseClass of PaystackClasses) {
      const className = transformToCamelCase(baseClass.name);
      this[className] = new baseClass();
    }
  }
}
