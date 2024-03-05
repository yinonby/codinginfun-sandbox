import GiftCard from "../products/Book";
import Product from "../products/Product";

// an order can usually consist of one or more products; however,
// for simplicity of the exercise, our orders will consist of a single product
export default class Order {
  private paymentId: string = "";

  constructor(
    private readonly orderId: string,
    private readonly clientEmail: string,
    private readonly product: Product) {
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

  // API methods

  public isGiftCardMatch(giftCardId: string): boolean {
    return this.product instanceof GiftCard &&
      this.product.getCardId() === giftCardId;
  }

  public getGiftCard(giftCardId: string): GiftCard | null {
    return this.product instanceof GiftCard &&
      this.product.getCardId() === giftCardId ? this.product : null;
  }
}
