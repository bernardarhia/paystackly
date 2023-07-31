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
  - [Transactions](#transactions)
    - [Initialize With Mobile Money](#intializewithmobilemoney)
    - [Initialize With Credit Card](#intializewithcreditcard)
    - [Verify](#verify)
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

### Transactions

Access the Transactions class the on Paystack Class.

#### intialize

Initialize the transaction by calling the initialize method on the transactions object.

```ts
import { Paystack } from "paystackly";
const paystack = new PayStack(SECRET_KEY);
const body = {};
const results = paystack.transactions.initalize(body);
result
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```
