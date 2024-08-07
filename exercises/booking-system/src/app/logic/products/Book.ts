import Product from "./Product";

export default class Book extends Product {

  constructor(
    private readonly bookName: string,
    private readonly bookPrice: number,
    private readonly currencyCode: string) {

    super();
  }

  public getBookName(): string {
    return this.bookName;
  }

  public getRate(): number {
    return this.bookPrice;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

}
