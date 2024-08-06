
import Book from "../logic/products/Book";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test Book", function () {
    const bookName: string = "Harry Potter";
    const bookPrice: number = 12;
    const currencyCode: string = "EUR";
    const book: Book = new Book(bookName, bookPrice, currencyCode);

    describe("#getBookName()", function () {
      it("should return book name", function () {
        expect(book.getBookName()).to.equal(bookName);
      });
    });

    describe("#getRate()", function () {
      it("should return price", function () {
        expect(book.getRate()).to.equal(bookPrice);
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should return currency code", function () {
        expect(book.getCurrencyCode()).to.equal(currencyCode);
      });
    });

  });
}
