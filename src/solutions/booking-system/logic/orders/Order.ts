import Payable from "../payments/Payable";
import Customer from "../persons/Customer";
import Product from "../products/Product";

export default class Order implements Payable {
  private paymentId: string = "";

  constructor(
    private readonly orderId: string,
    private readonly customer: Customer,
    private readonly products: Product[]) {

    // make sure there is at least 1 product
    if (! products.length) {
      throw new Error("Must provide at least 1 product");
    }

    // make sure all currencies match
    for (let i = 1; i < products.length; i++) {
      if (products[0].getCurrencyCode() !== products[i].getCurrencyCode()) {
        throw new Error("All currencies must match");
      }
    }
  }

  public getOrderId(): string {
    return this.orderId;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public getRate(): number {
    let totalRate: number = 0;
    for (const product of this.products) {
      totalRate += product.getRate();
    }
    return totalRate;
  }

  public getCurrencyCode(): string {
    return this.products[0].getCurrencyCode();
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

}
