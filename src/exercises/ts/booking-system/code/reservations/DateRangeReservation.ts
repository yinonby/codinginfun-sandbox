import Reservation from "./Reservation";

export default abstract class DateRangeReservation extends Reservation {
  constructor(
    reservationId: string,
    customerEmail: string) {

    super(reservationId, customerEmail);
  }

  public abstract getStartDate(): string;
  public abstract getEndDate(): string;
}
