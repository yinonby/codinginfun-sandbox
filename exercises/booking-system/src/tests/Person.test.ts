
import Person from "../logic/persons/person";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test Person", function () {
    const firstName: string = "Harry";
    const lastName: string =  "Potter";
    const person: Person = new Person(firstName, lastName);

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
