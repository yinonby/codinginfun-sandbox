
import { CreditCard } from "../logic/payments/PaymentMethod";
import StripeAPI from "../logic/payments/external-adapters/stripe/StripeAPI";
import Customer from "../logic/persons/Customer";
import Book from "../logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test StripeAPI", function () {

    describe("#charge()", function () {
      const stripeApi: StripeAPI = new StripeAPI();

      it("should charge a card", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = validCC1;
        const stripePaymentId: string = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("", "chargeCard() should return a non-empty string");
      });

      it("should fail charging an invalid card", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = invalidCC;

        expect(function() {
          stripeApi.chargeCard(customer, book, validCC);
        }).to.throw('Error returned from Stripe!');
      });
    });


    describe("#refund()", function () {
      const stripeApi: StripeAPI = new StripeAPI();

      it("should make a refund", function () {
        const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book: Book = new Book("Harry Potter", 12, "EUR");
        const validCC: CreditCard = validCC1;
        const stripePaymentId: string = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("", "chargeCard() should return a non-empty string");

        stripeApi.refund(stripePaymentId);
      });
    });

  });
}
