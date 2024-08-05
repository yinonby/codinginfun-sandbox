
import BookingSystemFactory from "../logic/BookingSystemFactory";
import { STRIPE_CARD_NUMBER_INVALID } from "../logic/external-api-mocks/stripe/StripeMock";
import Payable from "../logic/payments/Payable";
import { CreditCard, CreditCardDetails, PaymentMethod } from "../logic/payments/PaymentMethod";
import PaymentManager from "../logic/payments/payment-operations/managers/PaymentManager";
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
  describe("Test PaymentManager", function () {

    describe("#makePayment()", function () {
      const paymentManager: PaymentManager =
        BookingSystemFactory.buildPaymentManager();

      it("should make a payment", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = validCC1;
        const paymentId: string = paymentManager.makePayment(customer,
          book, validCC);
        expect(paymentId).to.not.equal("");
      });
    });


    describe("#cancelPayment()", function () {
      const paymentManager: PaymentManager =
        BookingSystemFactory.buildPaymentManager();

      it("should cancel a payment", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const payable: Payable = new Book("Harry Potter", 12, "EUR");
        const paymentMethod: PaymentMethod = validCC1;
        const paymentId: string = paymentManager.makePayment(customer,
          payable, paymentMethod);
        expect(paymentId).to.not.equal("");

        paymentManager.cancelPayment(paymentId);
      });
    });

  });
}
