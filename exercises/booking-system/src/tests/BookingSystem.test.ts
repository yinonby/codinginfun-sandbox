
import BookingSystem from "../logic/BookingSystem";
import BookingSystemFactory from "../logic/BookingSystemFactory";
import { invalidCC, validCC1, validCC2 } from "./TestConstants";
const { chai }: any = window;

const expect = chai.expect;

export function test() {
  describe("Test BookingSystem", function () {

    describe("#addHotelReservation()", function () {
      const bookingSystem: BookingSystem = BookingSystemFactory.buildBookingSystem();

      it("should create a hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");
      });

      it("should create another hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Justin", "Biber",
          "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
          130, "USD", validCC2);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");
      });

      it("should fail due to invalid card", function () {
        expect(function() {
          bookingSystem.addHotelReservation(
            "Justin", "Biber",
            "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
            130, "USD", invalidCC);
        }).to.throw('Error returned from Stripe!');
      });
    });

    describe("#cancelReservation()", function () {
      const bookingSystem: BookingSystem = BookingSystemFactory.buildBookingSystem();
      
      it("should cancel a hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");

        bookingSystem.cancelReservation(reservationId);
      });
    });
  });
}
