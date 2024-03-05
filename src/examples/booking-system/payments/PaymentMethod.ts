
export type CreditCard = {
  paymentMethodName: "credit-card",
  creditCardDetails: CreditCardDetails,
}

export type CreditCardDetails = {
  creditCardNumber: string,
  creditCardExpirationDay: number,
  creditCardExpirationMonth: number,
  creditCardValidationCode: string,
}

export type PaymentMethod = CreditCard;
