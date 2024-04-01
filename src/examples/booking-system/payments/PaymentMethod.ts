
export abstract class PaymentMethod {
}

export class CreditCard extends PaymentMethod {
  constructor(private creditCardDetails: CreditCardDetails) {
    super();
  }

  public getCreditCardDetails(): CreditCardDetails {
    return this.creditCardDetails;
  }
}

export type CreditCardDetails = {
  creditCardNumber: string,
  creditCardExpirationDay: number,
  creditCardExpirationMonth: number,
  creditCardValidationCode: string,
}
