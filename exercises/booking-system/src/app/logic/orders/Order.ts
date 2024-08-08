import Customer from "../persons/Customer";
import Product from "../products/Product";

// ********** TASK **********
// declare class 'Order' as implementing interface 'Payable'
export default class Order {
  private paymentId: string = "";

  constructor(
    private readonly orderId: string,
    private readonly customer: Customer,
    private readonly products: Product[]) {

    // ********** TASK **********
    // verify there is at least 1 product
    // if not, throw an error: "All currencies must match"

    // ********** TASK **********
    // verify that all products have the same currencyCode
    // if not, throw an error: "All currencies must match"
  }

  public getOrderId(): string {
    return this.orderId;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  // ********** TASK **********
  // implement abstract method 'getRate' - return the total rate
  // of all products

  // ********** TASK **********
  // implement abstract method 'getCurrencyCode' - return the
  // currencyCode of the first product

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

}
