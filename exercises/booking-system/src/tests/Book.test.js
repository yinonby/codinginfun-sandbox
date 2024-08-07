
import Book from "../app/logic/products/Book";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Book", function () {
    const bookName = "Harry Potter";
    const bookPrice = 12;
    const currencyCode = "EUR";
    const book = new Book(bookName, bookPrice, currencyCode);

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
