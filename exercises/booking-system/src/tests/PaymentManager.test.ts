
import BookingSystemFactory from "../logic/BookingSystemFactory";
import Payable from "../logic/payments/Payable";
import { CreditCard, PaymentMethod } from "../logic/payments/PaymentMethod";
import PaymentManager from "../logic/payments/payment-operations/managers/PaymentManager";
import Customer from "../logic/persons/Customer";
import Book from "../logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai }: any = window;

const expect = chai.expect;

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
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");
      });

      it("should fail making a payment using an invalid payment method", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = invalidCC;

        expect(function() {
          paymentManager.makePayment(customer, book, validCC);
        }).to.throw('Error returned from Stripe!');
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
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");

        paymentManager.cancelPayment(paymentId);
      });
    });

  });
}
