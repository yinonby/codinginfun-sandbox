
import Customer from "../app/logic/persons/Customer";
import ActivityReservation from "../app/logic/reservations/ActivityReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test ActivityReservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const activityName = "Ritz";
    const activityDate = "2030-10-10";
    const activityRate = 111;
    const currencyCode = "USD";
    const activityReservation = new ActivityReservation(
      reservationId, customer, activityName, activityDate, activityRate, currencyCode);

    describe("#getStartDate()", function () {
      it("should return activity date", function () {
        expect(activityReservation.getFixedDate()).to.equal(activityDate);
      });
    });

    describe("#getRate()", function () {
      it("should return rate", function () {
        expect(activityReservation.getRate()).to.equal(activityRate);
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should return currency code", function () {
        expect(activityReservation.getCurrencyCode()).to.equal(currencyCode);
      });
    });

    describe("#getActivityName()", function () {
      it("should return activity name", function () {
        expect(activityReservation.getActivityName()).to.equal(activityName);
      });
    });

    describe("#getReservationSummary()", function () {
      const expectedSummary = "Activity: " + activityName +
      " on " + activityDate;
      it("should return reservation summary", function () {
        expect(activityReservation.getReservationSummary()).to.equal(expectedSummary);
      });
    });
  });
}
