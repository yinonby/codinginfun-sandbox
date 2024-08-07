
import Person from "../app/logic/persons/person";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Person", function () {
    const firstName = "Harry";
    const lastName =  "Potter";
    const person = new Person(firstName, lastName);

    describe("#getFirstName()", function () {
      it("should return first name", function () {
        expect(person.getFirstName()).to.equal(firstName);
      });
    });

    describe("#getLastName()", function () {
      it("should return last name", function () {
        expect(person.getLastName()).to.equal(lastName);
      });
    });

  });
}
