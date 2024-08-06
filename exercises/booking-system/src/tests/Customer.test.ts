
import Customer from "../logic/persons/Customer";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test Customer", function () {
    const firstName: string = "Harry";
    const lastName: string =  "Potter";
    const emailAddress: string =  "harrypotter@gmail.com";
    const customer: Customer = new Customer(firstName, lastName, emailAddress);

    describe("#getEmailAddress()", function () {
      it("should return email address", function () {
        expect(customer.getEmailAddress()).to.equal(emailAddress);
      });
    });

  });
}
