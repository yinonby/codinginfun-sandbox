
export type StripeCreditCard = {
  creditCardNumber: string,
  creditCardExpirationDay: number,
  creditCardExpirationMonth: number,
  creditCardValidationCode: string,
}

export type StripeBankAccount = {
  ibanNumber: string,
  bankSwiftCode: string,
}

export type StripePaymentMethod = StripeCreditCard | StripeBankAccount;
