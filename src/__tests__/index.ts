import { describe, it } from "mocha";
import { expect } from "chai";
import { PayStack } from "../Paystack";

describe("Paystack class", () => {
  const paystack = new PayStack();
  it("should return true if Paystack is a class", () => {
    expect(paystack).to.be.an.instanceof(PayStack);
  });

  it("should have property transaction", ()=>{
    expect(paystack).to.have.property("transaction")
  })

  it("should have property transfer", ()=>{
    expect(paystack).to.have.property("transfer")
  })

  it("should have property charges", ()=>{
    expect(paystack).to.have.property("charges")
  })

  it("should have property bulkCharges", ()=>{
    expect(paystack).to.have.property("bulkCharges")
  })

  it("should have property refund", ()=>{
    expect(paystack).to.have.property("refund")
  })

  it("should have property applePay", ()=>{
    expect(paystack).to.have.property("applePay")
  })

  it("should have property transactionSplit", ()=>{
    expect(paystack).to.have.property("transactionSplit")
  })

  it("should have property subAccount", ()=>{
    expect(paystack).to.have.property("subAccount")
  })

  it("should have property integration", ()=>{
    expect(paystack).to.have.property("integration")
  })
});
