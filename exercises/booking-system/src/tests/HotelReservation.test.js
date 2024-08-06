
import Customer from "../logic/persons/Customer";
import HotelReservation from "../logic/reservations/HotelReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test HotelReservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const startDate = "2030-10-10";
    const endDate = "2030-10-13";
    const rate = 111;
    const currencyCode = "USD";
    const hotelName = "Ritz";
    const hotelReservation = new HotelReservation(
      reservationId, customer, startDate, endDate, rate, currencyCode,
      hotelName);

    describe("#getRate()", function () {
      it("should return rate", function () {
        expect(hotelReservation.getRate()).to.equal(rate);
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should return currency code", function () {
        expect(hotelReservation.getCurrencyCode()).to.equal(currencyCode);
      });
    });

    describe("#getStartDate()", function () {
      it("should return start date", function () {
        expect(hotelReservation.getStartDate()).to.equal(startDate);
      });
    });

    describe("#getEndDate()", function () {
      it("should return end date", function () {
        expect(hotelReservation.getEndDate()).to.equal(endDate);
      });
    });

    describe("#getHotelName()", function () {
      it("should return hotel name", function () {
        expect(hotelReservation.getHotelName()).to.equal(hotelName);
      });
    });

    describe("#getReservationSummary()", function () {
      const expectedSummary = "Hotel: " + hotelName +
        ", check-in: " + startDate +
        ", check-out: " + endDate;
      it("should return reservation summary", function () {
        expect(hotelReservation.getReservationSummary()).to.equal(expectedSummary);
      });
    });
  });
}
