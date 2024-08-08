
export default interface ExternalPaymentProcessingAdapter {
  getPaymentProcessingServiceName(): string;

  // ********** TASK **********
  /*
    declare an interface method 'chargeCard' with arguments:
    - 'person' whose type is 'Person'
    - 'payable' whose type is 'Payable'
    - 'creditCard' whose type is 'CreditCard'
    and a return-type 'string'
  */

  // ********** TASK **********
  // declare an interface method 'refund' with an argument 'externalPaymentId'
  // whose type is 'string', and return-type 'void'
}
