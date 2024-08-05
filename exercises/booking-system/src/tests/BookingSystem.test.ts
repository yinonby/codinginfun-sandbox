
import BookingSystem from "../logic/BookingSystem";
import BookingSystemFactory from "../logic/BookingSystemFactory";
import { STRIPE_CARD_NUMBER_INVALID } from "../logic/external-api-mocks/stripe/StripeMock";
import { CreditCard, CreditCardDetails } from "../logic/payments/PaymentMethod";
const { chai }: any = window;

const expect = chai.expect;

// first customer
const validCCDetails1: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-4444",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const validCCDetails2: CreditCardDetails = {
  creditCardNumber: "1111-2222-3333-5555",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const invalidCCDetails: CreditCardDetails = {
  creditCardNumber: STRIPE_CARD_NUMBER_INVALID,
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}

const validCC1: CreditCard = new CreditCard(validCCDetails1);
const validCC2: CreditCard = new CreditCard(validCCDetails2);
const invalidCC: CreditCard = new CreditCard(invalidCCDetails);

export function test() {
  const bookingSystem: BookingSystem = BookingSystemFactory.buildBookingSystem();

  describe("Test BookingSystem", function () {

    describe("#addHotelReservation()", function () {
      it("should create a hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("");
      });

      it("should create another hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Justin", "Biber",
          "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
          130, "USD", validCC2);
        expect(reservationId).to.not.equal("");
      });

      it("should fail due to invalid card", function () {
        let error: Error | null = null;
        try {
          bookingSystem.addHotelReservation(
            "Justin", "Biber",
            "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
            130, "USD", invalidCC);
        } catch (err: any) {
          error = err;
        }

        expect(error).to.not.be.null;
      });
    });

    describe("#cancelReservation()", function () {
      it("should cancel a hotel reservation", function () {
        const reservationId: string = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("");

        let error: Error | null = null;
        try {
          bookingSystem.cancelReservation(reservationId);
        } catch (err: any) {
          if (err instanceof Error) {
            console.error(err);
            error = err;
          }
        }
        expect(error).to.be.null;
      });
    });
  });
}
