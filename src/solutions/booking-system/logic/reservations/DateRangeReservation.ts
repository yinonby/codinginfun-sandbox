import Customer from "../persons/Customer";
import Reservation from "./Reservation";

export default abstract class DateRangeReservation extends Reservation {
  constructor(
    reservationId: string,
    customer: Customer) {

    super(reservationId, customer);
  }

  public abstract getStartDate(): string;
  public abstract getEndDate(): string;
}
