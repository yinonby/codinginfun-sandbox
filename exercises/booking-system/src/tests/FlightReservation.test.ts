
import Customer from "../logic/persons/Customer";
import FlightReservation from "../logic/reservations/FlightReservation";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test FlightReservation", function () {
    const reservationId = "fake-id";
    const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const flightDate = "2030-10-10";
    const originAirportCode: string = "AAA";
    const destinationAirportCode: string = "BBB";
    const flightRate = 111;
    const currencyCode = "USD";
    const flightReservation: FlightReservation = new FlightReservation(
      reservationId, customer, flightDate, originAirportCode,
      destinationAirportCode, flightRate, currencyCode);

    describe("#getFixedDate()", function () {
      it("should return flight date", function () {
        expect(flightReservation.getFixedDate()).to.equal(flightDate);
      });
    });

    describe("#getRate()", function () {
      it("should return rate", function () {
        expect(flightReservation.getRate()).to.equal(flightRate);
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should return currency code", function () {
        expect(flightReservation.getCurrencyCode()).to.equal(currencyCode);
      });
    });

    describe("#getOriginAirportCode()", function () {
      it("should return activity name", function () {
        expect(flightReservation.getOriginAirportCode()).to.equal(originAirportCode);
      });
    });

    describe("#getDestinationAirportCode()", function () {
      it("should return activity name", function () {
        expect(flightReservation.getDestinationAirportCode()).to.equal(destinationAirportCode);
      });
    });

    describe("#getReservationSummary()", function () {
      const expectedSummary = "Flight from " + originAirportCode +
      " to " + destinationAirportCode +
      ", on " + flightDate;
      it("should return reservation summary", function () {
        expect(flightReservation.getReservationSummary()).to.equal(expectedSummary);
      });
    });
  });
}
