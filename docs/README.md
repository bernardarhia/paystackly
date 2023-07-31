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
  - [Bulk Charges](#bulk-charges)
  - [Charge](#charge)
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

`.registerDomain`

**Parameter  -  ``string``**
```js
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);

async function registerApplePayDomain(){
  const response = await paystack.applePay.registerDomain("example-domain");
  console.log(response)
}
registerApplePayDomain()
```
`.listDomains`

**Query Parameters  -  ``Object``**

| Property   | Type    | Required | Description                                                                                                 |
|------------|---------|----------|-------------------------------------------------------------------------------------------------------------|
| use_cursor | boolean | true      | Flag to enable cursor pagination on the endpoint.                                                           |
| next       | string  | false      | A cursor that indicates your place in the list. It can be used to fetch the next page of the list.         |
| previous   | string  | false      | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an initial next request. |

```js
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);

async function listApplePayDomains(){
  const response = await paystack.applePay.listDomains(queryParams);
  console.log(response)
}
listApplePayDomains()
```
`.unRegisterDomain`

**Parameter  -  ``string``**

```js
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);

async function unRegisterApplePayDomains(){
  const response = await paystack.applePay.unRegisterDomain("example-domain");
  console.log(response)
}
unRegisterApplePayDomains()
```
### Bulk Charges

### Charge

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

```ts
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);
const body = {

};
async function initializeWithMobileMoney(){
  const results = await paystack.transactions.initalizeWithMobileMoney(body);
}
initializeWithMobileMoney()
```

##### Initialize With Credit Card
`.initializeWithCreditCard`


```ts
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);

async function initializeWithCreditCard(){
  const results = await paystack.transactions.initalizeWithCreditCard(payload);
}
initializeWithCreditCard()
```



### Transaction Splits

### Transfer

### Transfer Control

### Transfer Recipients

### Verification
