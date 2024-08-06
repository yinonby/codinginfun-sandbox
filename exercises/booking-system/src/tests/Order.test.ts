
import Order from "../logic/orders/Order";
import Product from "../logic/products/Product";
import { book1_eur, book2_eur, book3_eur as book3_usd, customer1 } from "./TestConstants";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test Order", function () {
    const orderId = "fake-order-id";

    describe("#constructor() - no products", function () {
      const products: Product[] = [];
      it("should throw error", function () {
        expect(function() {
          new Order(orderId, customer1, products)
        }).to.throw('Must provide at least 1 product');
      });
    });

    describe("#constructor() - mismatch currencies", function () {
      const products: Product[] = [book1_eur, book3_usd];
      it("should throw error", function () {
        expect(function() {
          new Order(orderId, customer1, products)
        }).to.throw('All currencies must match');
      });
    });

    const products: Product[] = [book1_eur, book2_eur];
    const order: Order = new Order(orderId, customer1, products);

    describe("#getOrderId()", function () {
      it("should return order id", function () {
        expect(order.getOrderId()).to.equal(orderId);
      });
    });

    describe("#getCustomer()", function () {
      it("should return customer", function () {
        expect(order.getCustomer()).to.equal(customer1);
      });
    });

    describe("#getRate()", function () {
      it("should return total rate", function () {
        expect(order.getRate()).to.equal(book1_eur.getRate() + book2_eur.getRate());
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should return currency code", function () {
        expect(order.getCurrencyCode()).to.equal(book1_eur.getCurrencyCode());
      });
    });

    describe("#getPaymentId()", function () {
      it("should return payment id", function () {
        expect(order.getPaymentId()).to.equal("");
      });
    });

    describe("#setPaymentId()", function () {
      it("should set payment id", function () {
        const paymentId = "fake-payment-id";
        order.setPaymentId(paymentId);
        expect(order.getPaymentId()).to.equal(paymentId);
      });
    });
  });
}
