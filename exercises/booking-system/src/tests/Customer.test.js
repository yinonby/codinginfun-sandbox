
import Customer from "../logic/persons/Customer";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Customer", function () {
    const firstName = "Harry";
    const lastName =  "Potter";
    const emailAddress =  "harrypotter@gmail.com";
    const customer = new Customer(firstName, lastName, emailAddress);

    describe("#getEmailAddress()", function () {
      it("should return email address", function () {
        expect(customer.getEmailAddress()).to.equal(emailAddress);
      });
    });

  });
}
