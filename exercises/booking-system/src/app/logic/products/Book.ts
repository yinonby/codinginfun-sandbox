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

  // ********** TASK **********
  // implement public abstract method 'getRate' - return private
  // property 'bookPrice'

  // ********** TASK **********
  // implement public abstract method 'getCurrencyCode' - return private
  // property 'currencyCode'

}
