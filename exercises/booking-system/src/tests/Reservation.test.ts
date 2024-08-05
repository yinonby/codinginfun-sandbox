
import Customer from "../logic/persons/Customer";
import Reservation from "../logic/reservations/Reservation";
const { chai }: any = window;

const expect = chai.expect;

class SampleReservation extends Reservation {

  public getRate(): number {
    return 0;
  }

  public getCurrencyCode(): string {
    return "";
  }

  public getReservationSummary(): string {
    return "";
  }
}

export function test() {
  describe("Test Reservation", function () {
    const reservationId = "fake-id";
    const customer: Customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const paymentId = "fake-payment-id";
    const sampleReservation: SampleReservation = new SampleReservation(
      reservationId, customer);

    describe("#getReservationId()", function () {
      it("should return reservation id", function () {
        expect(sampleReservation.getReservationId()).to.equal(reservationId);
      });
    });

    describe("#getCustomer()", function () {
      it("should return customer", function () {
        expect(sampleReservation.getcustomer()).to.equal(customer);
      });
    });

    describe("#getPaymentId()", function () {
      it("should return payment id", function () {
        expect(sampleReservation.getPaymentId()).to.equal("");
      });
    });

    describe("#setPaymentId()", function () {
      it("should set payment id", function () {
        sampleReservation.setPaymentId(paymentId);
        expect(sampleReservation.getPaymentId()).to.equal(paymentId);
      });
    });
  });
}
