import Product from "../products/Product";

// an order can usually consist of one or more products; however,
// for simplicity of the exercise, our orders will consist of a single product
export default class Order {
  private paymentId: string = "";

  constructor(private orderId: string,
    private clientEmail: string, private product: Product) {
  }

  public getOrderId(): string {
    return this.orderId;
  }

  public getClientEmail(): string {
    return this.clientEmail;
  }

  public getRate(): number {
    return this.product.getRate();
  }

  public getCurrencyCode(): string {
    return this.product.getCurrencyCode();
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }
}
