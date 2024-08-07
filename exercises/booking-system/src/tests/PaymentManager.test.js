
import BookingSystemFactory from "../app/logic/BookingSystemFactory";
import Customer from "../app/logic/persons/Customer";
import Book from "../app/logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test PaymentManager", function () {

    describe("#makePayment()", function () {
      const paymentManager =
        BookingSystemFactory.buildPaymentManager();

      it("should make a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          book, validCC);
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");
      });

      it("should fail making a payment using an invalid payment method", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = invalidCC;

        expect(function() {
          paymentManager.makePayment(customer, book, validCC);
        }).to.throw('Error returned from Stripe!');
      });
    });


    describe("#cancelPayment()", function () {
      const paymentManager =
        BookingSystemFactory.buildPaymentManager();

      it("should cancel a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const payable = new Book("Harry Potter", 12, "EUR");
        const paymentMethod = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          payable, paymentMethod);
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");

        paymentManager.cancelPayment(paymentId);
      });
    });

  });
}
