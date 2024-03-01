
export type CreditCard = {
  creditCardNumber: string,
  creditCardExpirationDay: number,
  creditCardExpirationMonth: number,
  creditCardValidationCode: string,
}

export type BankAccount = {
  ibanNumber: string,
  bankSwiftCode: string,
}

export type PaymentMethod = CreditCard | BankAccount;
