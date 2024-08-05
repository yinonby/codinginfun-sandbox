
import { STRIPE_CARD_NUMBER_INVALID } from "../logic/external-api-mocks/stripe/StripeMock";
import { CreditCard, CreditCardDetails } from "../logic/payments/PaymentMethod";
import StripeAPI from "../logic/payments/external-adapters/stripe/StripeAPI";
import Customer from "../logic/persons/Customer";
import Book from "../logic/products/Book";
const { chai }: any = window;

const expect = chai.expect;

// first customer
const validCCDetails1: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-4444",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const validCCDetails2: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-5555",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const invalidCCDetails: CreditCardDetails = {
  creditCardNumber: STRIPE_CARD_NUMBER_INVALID,
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const validCC1: CreditCard = new CreditCard(validCCDetails1);
const validCC2: CreditCard = new CreditCard(validCCDetails2);
const invalidCC: CreditCard = new CreditCard(invalidCCDetails);

export function test() {
  describe("Test StripeAPI", function () {

    describe("#charge()", function () {
      const stripeApi: StripeAPI = new StripeAPI();

      it("should charge a card", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = validCC1;
        const stripePaymentId: string = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("");
      });
    });


    describe("#refund()", function () {
      const stripeApi: StripeAPI = new StripeAPI();

      it("should make a refund", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = validCC1;
        const stripePaymentId: string = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("");

        stripeApi.refund(stripePaymentId);
      });
    });

  });
}
