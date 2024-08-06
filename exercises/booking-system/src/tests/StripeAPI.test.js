
import StripeAPI from "../logic/payments/external-adapters/stripe/StripeAPI";
import Customer from "../logic/persons/Customer";
import Book from "../logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test StripeAPI", function () {

    describe("#charge()", function () {
      const stripeApi = new StripeAPI();

      it("should charge a card", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const stripePaymentId = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("", "chargeCard() should return a non-empty string");
      });

      it("should fail charging an invalid card", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = invalidCC;

        expect(function() {
          stripeApi.chargeCard(customer, book, validCC);
        }).to.throw('Error returned from Stripe!');
      });
    });


    describe("#refund()", function () {
      const stripeApi = new StripeAPI();

      it("should make a refund", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const stripePaymentId = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("", "chargeCard() should return a non-empty string");

        stripeApi.refund(stripePaymentId);
      });
    });

  });
}
