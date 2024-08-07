
import { STRIPE_CARD_NUMBER_INVALID } from "../app/logic/external-api-mocks/stripe/StripeMock";
import { CreditCard, CreditCardDetails } from "../app/logic/payments/PaymentMethod";
import Customer from "../app/logic/persons/Customer";
import Book from "../app/logic/products/Book";

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


const firstName: string = "Harry";
const lastName: string =  "Potter";
const emailAddress: string =  "harrypotter@gmail.com";
export const customer1: Customer =
  new Customer(firstName, lastName, emailAddress);

const bookName1: string = "Harry Potter";
const bookPrice1: number = 11;
const currencyCode1: string = "EUR";
export const book1_eur: Book = new Book(bookName1, bookPrice1, currencyCode1);

const bookName2: string = "Harry Potter 2";
const bookPrice2: number = 12;
const currencyCode2: string = "EUR";
export const book2_eur: Book = new Book(bookName2, bookPrice2, currencyCode2);

const bookName3: string = "Harry Potter 3";
const bookPrice3: number = 13;
const currencyCode3: string = "USD";
export const book3_eur: Book = new Book(bookName3, bookPrice3, currencyCode3);

