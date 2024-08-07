import Customer from "../persons/Customer";
import Reservation from "./Reservation";

export default abstract class FixedDateReservation extends Reservation {
  constructor(
    reservationId: string,
    customer: Customer) {

    super(reservationId, customer);
  }

  public abstract getFixedDate(): string;
}
