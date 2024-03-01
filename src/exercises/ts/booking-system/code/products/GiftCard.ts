import Product from "./Product";

export default class GiftCard extends Product {
  constructor(private clientEmail: string,
    private cardValue: number, private currencyCode: string) {
    super();
  }

  public getRate(): number {
    return this.cardValue;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

}
