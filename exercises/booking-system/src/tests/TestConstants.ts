
import { STRIPE_CARD_NUMBER_INVALID } from "../logic/external-api-mocks/stripe/StripeMock";
import { CreditCard, CreditCardDetails } from "../logic/payments/PaymentMethod";

// first customer
export const validCCDetails1: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-4444",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

export const validCCDetails2: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-5555",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

export const invalidCCDetails: CreditCardDetails = {
  creditCardNumber: STRIPE_CARD_NUMBER_INVALID,
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

export const validCC1: CreditCard = new CreditCard(validCCDetails1);
export const validCC2: CreditCard = new CreditCard(validCCDetails2);
export const invalidCC: CreditCard = new CreditCard(invalidCCDetails);
