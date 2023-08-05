<p align="center">
  <h1 align="center">PAYSTACKLY</h1>
  <p align="center">
    ✨ <a href="https://bernardarhia.github.io/paystackly/">https://bernardarhia.github.io/paystackly/</a> ✨
    <br/>
     The TypeScript SDK for Seamless Paystack Integration
  </p>
</p>
<br/>
<p align="center">
<a href="https://github.com/bernardarhia/paystackly/actions?query=branch%3Amaster"><img src="https://github.com/bernardarhia/paystackly/actions/workflows/main.yaml/badge.svg?event=push&branch=master" alt="Paystackly CI status" /></a>
<a href="https://twitter.com/Everichbernz" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@everichbernz-4BBAAB.svg" alt="Created by Bernrd Arhia"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/bernardarhia/paystackly" alt="License"></a>
<a href="https://www.npmjs.com/package/paystackly" rel="nofollow"><img src="https://img.shields.io/npm/dw/paystackly.svg" alt="npm"></a>
<a href="https://www.npmjs.com/package/paystackly" rel="nofollow"><img src="https://img.shields.io/github/stars/bernardarhia/paystackly" alt="stars"></a>
</p>

<div align="center">
  <a href="https://bernardarhia.github.io/paystackly">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.npmjs.com/package/paystackly">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/bernardarhia/paystackly/issues/new">Issues</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/everichbernz">@Everichbernz</a>
  <br />
</div>

<br/>
<br/>

## Table of contents

- [What is Paystackly](#what-is-paystackly)
- [Installation](#installation)
- [PayStack](#payStack)
  - [Apple Pay](#apple-pay)
    - [.registerDomain](#registerdomain)
    - [.listDomains](#listdomains)
    - [.unRegisterDomain](#unregisterdomain)
  - [Bulk Charges](#bulk-charges)
    - [.initialize](#initialize)
    - [.list](#list)
    - [.fetchBulkChargeBatch](#fetchbulkchargebatch)
    - [.fetchChargesInBatch](#fetchchargesinbatch)
    - [.pause](#pause)
    - [.resume](#resume)
  - [Charge](#charge)
    - [.chargeWithMobileMoney](#chargewithmobilemoney)
    - [.chargeWithBank](#chargewithbank)
    - [.chargeWithUssd](#chargewithussd)
    - [.chargeWithCard](#chargewithcard)
    - [.submitPin](#submitpin)
    - [.submitOTP](#submitotp)
    - [.submitPhone](#submitphone)
    - [.submitBirthday](#submitbirthday)
    - [.submitAddress](#submitaddress)
    - [.checkStatus](#checkstatus)
  - [Customers](#customers)
  - [Dedicated Virtual Accounts](#dedicated-virtual-accounts)
  - [Disputes](#disputes)
  - [Integration](#integration)
  - [Miscellaneous](#miscellaneous)
  - [Payment Pages](#payment-pages)
  - [Payment Requests](#payment-requests)
  - [Plans](#plans)
  - [Products](#products)
  - [Refund](#refund)
  - [Settlements](#settlements)
  - [Subaccounts](#subaccounts)
  - [Subscriptions](#subscriptions)
  - [Terminal](#terminal)
  - [Transaction Splits](#transaction-splits)
  - [Transactions](#transactions)
    - [Verify](#verify)
    - [Initialize With Credit Card](#initialize-with-credit-card)
    - [Initialize With Mobile Money](#initialize-with-mobile-money)
  - [Transfer](#transfer)
  - [Transfer Control](#transfer-control)
  - [Transfer Recipients](#transfer-recipients)
  - [Verification](#verification)
- [Changelog](#changelog)

## What is Paystackly

Paystackly is a TypeScript SDK meticulously crafted to streamline the integration of the popular payment gateway, Paystack, into your web applications or javacript apis. Designed with developers in mind, this powerful toolkit empowers you to effortlessly harness the capabilities of the Paystack API, providing secure and reliable payment processing solutions for your online businesses.

Its TypeScript foundation, comprehensive API coverage and robust documentation combine to offer a delightful development experience. With Paystackly, you can confidently integrate paystack into your application. So, whether you're building an e-commerce platform, a subscription service, a donation portal, or anything involving online money transactions, Paystackly is your go-to SDK for seamless and secure Paystack integration.

Some other great aspects:

- Zero dependencies
- Works in Node.js and all modern browsers
- Concise, chainable methods
- Works with plain JavaScript too! You don't need to use TypeScript.
- TypeScript Compatibility
- Simplified Integration
- Comprehensive API Coverage
- Customizable and Extensible
- Detailed Documentation
- Community Support
- Regular Updates

## Installation

To install Paystackly:

```sh
npm install paystackly
```

> Every method accessible on the paystackly **paystackly** is asynchronous and therefore can be handled with `async await` or `.then().catch()`

## PayStack

Every single **action** on the paystack api can be accessed from the base **PayStack** class. Initialize the Paystack class and pass in your **SECRET KEY**

```js
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);
```

### Apple Pay

The Apple Pay API allows you register your application's top-level domain or subdomain and receive payment via Apple Pay. The apple pay object currently supports **three methods**:

`.registerDomains`
`.listDomains`
`.unRegisterDomains`

Access the ApplePay class on the Base **PayStack** class

```js
import { Paystack } from "paystackly";

const paystack = new PayStack(SECRET_KEY);
const applePay = paystack.applePay;

```

###### `.registerDomain`

Register Domain allows you to add/register domains and transact using apple pay.

**Parameter - `Object`**

| Property   | Type   | Required | Description    |
|------------|--------|----------|----------------|
| domainName | string | true     | The domain name |


###### `.listDomains`

Get all registered domains using the `.listDomains` method 

**Parameters - `Object`**

| Property   | Type    | Required | Description                                                                                                                             |
| ---------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| use_cursor | boolean | true     | Flag to enable cursor pagination on the endpoint.                                                                                       |
| next       | string  | false    | A cursor that indicates your place in the list. It can be used to fetch the next page of the list.                                      |
| previous   | string  | false    | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request. |

###### `.unRegisterDomain`

Remove/Unregister registered domains using the `.unregisterDomains`

**Parameter - `Object`**

| Property   | Type   | Required | Description    |
|------------|--------|----------|----------------|
| domainName | string | true     | The domain name |


### Bulk Charges

The Bulk Charges API allows you create and manage multiple recurring payments from multiple customers at the same time.

```js
import { Paystack } from "paystackly";

const paystack = new PayStack(SECRET_KEY);
const bulkCharges = paystack.bulkCharges;

```

###### `.initialize`

Use `.initialize` to intialize a bulk charge from customers. 
Send an array of objects with authorization codes and amount (in kobo if currency is NGN, pesewas, if currency is GHS, and cents if currency is ZAR) so we can process transactions as a batch.

**Parameter - `Array of Objects`**

| Property      | Type    | Required | Description                             |
|---------------|---------|----------|-----------------------------------------|
| authorization | string  | true     | Valid authorization code to charge     |
| amount        | number  | true     | Amount to be charged from the customer |
| reference     | string  | true     | The reference used to initiate the charge |


###### `.list`

The `.list` method helps you list down all or some of the bulk charges you intialized or completed

**Parameter - `Objects`**

| Property | Type      | Required | Description                                                         |
|----------|-----------|----------|---------------------------------------------------------------------|
| perPage  | number    | false    | Specify how many records you want to retrieve per page. If not specified, paystack uses a default value of 50. |
| page     | number    | false    | Specify exactly what page you want to retrieve. If not specified, paystack uses a default value of 1.        |
| from     | Date      | false    | A timestamp from which to start listing, e.g., 2016-09-24T00:00:05.000Z, 2016-09-21.                    |
| to       | Date      | false    | A timestamp from which to end listing, e.g., 2016-09-24T00:00:05.000Z, 2016-09-21.                      |

###### `.pause`

Pause or hault a charge by calling the `.pause` method

**Parameter - `Objects`**


| Property  | Type   | Required | Description         |
|-----------|--------|----------|---------------------|
| batch_code| string | true     | The batch code of the bulk charge     |

###### `.resume`

Resume a paused/haulted charge by calling the `.resume` method

**Parameter - `Objects`**


| Property  | Type   | Required | Description         |
|-----------|--------|----------|---------------------|
| batch_code| string | true     | The batch code of the paused bulk charge     |
###### `.fetchBulkChargeBatch`

Fetch Bulk Charge in batches 

**Parameter - `Objects`**


| Property  | Type   | Required | Description         |
|-----------|--------|----------|---------------------|
| id | string | true     | An ID or code for the charge whose batches you want to retrieve.     |
###### `.fetchBulkChargeBatch`

Fetch Bulk Charge in batches 

**Parameter - `Objects`**


| Property  | Type   | Required | Description         |
|-----------|--------|----------|---------------------|
| id | string | true     | An ID or code for the charge whose batches you want to retrieve.     |
###### `.fetchChargesInBatch`

This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status.

**Parameters - `Objects`**


| Property | Type      | Required | Description                                                         |
|----------|-----------|----------|---------------------------------------------------------------------|
| id | string | true     | An ID or code for the batch whose charges you want to retrieve.     |
| perPage  | number    | false    | Specify how many records you want to retrieve per page. If not specified, paystack uses a default value of 50. |
| page     | number    | false    | Specify exactly what page you want to retrieve. If not specified, paystack uses a default value of 1.        |
| from     | Date      | false    | A timestamp from which to start listing, e.g., 2016-09-24T00:00:05.000Z, 2016-09-21.                    |
| to       | Date      | false    | A timestamp from which to end listing, e.g., 2016-09-24T00:00:05.000Z, 2016-09-21.                      |
### Charge

The Charge API provides a versatile and user-centric solution, empowering you to tailor the payment channel according to your preferences while initiating a transaction. Accept payment via **mobile money**, **credit card**, **ussd**, **bank** or **authorization code**.

```js
import { Paystack } from "paystackly";

const paystack = new PayStack(SECRET_KEY);
const charges = paystack.charges;

```


###### `.chargeWithMobileMoney`


Recieve money through mobile money by sending a mobile money alert directly onto the customer's phone

**Parameters - `Objects`**

| Property             | Type                 | Required | Description                                                       |
|----------------------|----------------------|----------|-------------------------------------------------------------------|
| email                | string               | true     | Customer's email address                                         |
| amount               | number               | true     | Amount you're charging the cunstomer. Amount should be in kobo if currency is NGN, pesewas if GHS, and cents if ZAR |
| mobile_money         | object               | true     | Mobile details|
| mobile_money.phone   | string               | true     | Phone number for mobile money payment                            |
| mobile_money.provider| string               | true     | Provider for mobile money payment                                |
| pin                  | string               | false    | 4-digit PIN (send with a non-reusable authorization code)         |
| metadata             | object               | false    | A JSON object                                                     |
| reference            | string               | false    | Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. |
| device_id            | string               | false    | Unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. |

###### `.chargeWithBank`

Recieve money through the bank by sending a mobile money alert directly onto the customer's phone.
 
<b style='color: red'>NB:</b> This enpoint/method is accessible to Nigerians only for now...

**Parameters - `Objects`**


| Property          | Type               | Required | Description                                                        |
|-------------------|--------------------|----------|--------------------------------------------------------------------|
| email             | string             | true     | Customer's email address                                          |
| amount            | number             | true     | Amount should be in kobo if currency is NGN, pesewas if GHS, and cents if ZAR |
| bank              | object             | true     | Bank account to charge |
| bank.account_number | string            | true     | Bank account number to charge                                      |
| bank.code         | string             | true     | Bank code. Get bank codes from here -[Bank Code](#bankcode)                                                          |
| pin               | string             | false    | 4-digit PIN (send with a non-reusable authorization code)          |
| metadata          | object             | false    | A JSON object                                                      |
| reference         | string             | false    | Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. |
| device_id         | string             | false    | Unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. |


###### `.chargeWithUssd`

Charge customers using ssd codes.
 
<b style='color: red'>NB:</b> This enpoint/method is accessible to Nigerians only for now...

**Parameters - `Objects`**

| Property    | Type               | Required | Description                                                        |
|-------------|--------------------|----------|--------------------------------------------------------------------|
| email       | string             | true     | Customer's email address                                          |
| amount      | number             | true     | Amount should be in kobo if currency is NGN, pesewas if GHS, and cents if ZAR |
| ussd        | object| true     | USSD type to charge|
| ussd.type        | object| true     | USSD type can be Only 737, 770, 822, 894, 909, 919, 966, 966_GBPAY|
| pin         | string             | false    | 4-digit PIN (send with a non-reusable authorization code)          |
| metadata    | object| false    | A JSON object                                                      |
| reference   | string             | false    | Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. |
| device_id   | string             | false    | Unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. |

###### `.chargeWithCard`

Charge customers with credit cards (credit and debit). This deducts the charge amount directly from the customer's card.

**Parameters - `Objects`**

| Property         | Type               | Required | Description                                                       |
|------------------|--------------------|----------|-------------------------------------------------------------------|
| email            | string             | true     | Customer's email address                                         |
| amount           | number             | true     | Amount should be in kobo if currency is NGN, pesewas if GHS, and cents if ZAR |
| card             | object             | true     | Card details                                                      |
| card.number      | string             | true     | Card number                                                       |
| card.cvv         | string             | true     | Card verification value (CVV)                                     |
| card.expiry_year | string             | true     | Expiry year of the card                                           |
| card.expiry_month| string             | true     | Expiry month of the card                                          |
| pin              | string             | false    | 4-digit PIN (send with a non-reusable authorization code)         |
| metadata         | Record<string, any>| false    | A JSON object                                                     |
| reference        | string             | false    | Unique transaction reference. Only -, .`, = and alphanumeric characters allowed. |
| device_id        | string             | false    | Unique identifier of the device a user uses in making payment. Only -, .`, = and alphanumeric characters allowed. |


<b>Once a charge has been initiated, paystack verifies the charged account using pin, OTP, phone number, birthday or an address</b>

###### `.submitPin`

**Parameters - `Objects`**

| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| pin       | string | true     | Pin for the charge            |
| reference | string | true     | Unique transaction reference  |

###### `.submitOTP`

**Parameters - `Objects`**

| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| otp       | string | true     | OTP for the charge            |
| reference | string | true     | Unique transaction reference  |

###### `.submitPhone`

**Parameters - `Objects`**

| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| phone     | string | true     | Phone number for the charge   |
| reference | string | true     | Unique transaction reference  |

###### `.submitBirthday`

**Parameters - `Objects`**

| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| birthday  | Date   | true     | Birthday for the charge       |
| reference | string | true     | Unique transaction reference  |

###### `.submitAddress`

**Parameters - `Objects`**

| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| address   | string | true     | Address for the charge        |
| reference | string | true     | Unique transaction reference  |
| city      | string | true     | City for the charge           |
| state     | string | true     | State for the charge          |
| zipcode   | string | true     | Zipcode for the charge        |
###### `.checkStatus`

Check the status of charged transaction using the `.checkStatus`

**Parameters - `Objects`**


| Property  | Type   | Required | Description                   |
|-----------|--------|----------|-------------------------------|
| reference | string | true     | Unique transaction reference from the charged response  |

### Customers

### Dedicated Virtual Accounts

### Disputes

### Integration

### Miscellaneous

### Payment Pages

### Payment Requests

### Plans

### Products

### Refund

### Settlements

### Subaccounts

### Subscriptions

### Terminal

### Transaction

The Transactions API allows you create and manage payments on your integration.
Access the Transactions class on the Paystack Class.

Initialize the transaction by calling the initialization methods on the transactions object.

##### Initialize With Mobile Money

`.initializeWithMobileMoney`


##### Initialize With Credit Card

`.initializeWithCreditCard`


### Transaction Splits

### Transfer

### Transfer Control

### Transfer Recipients

### Verification
