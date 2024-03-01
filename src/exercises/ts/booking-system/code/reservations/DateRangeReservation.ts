import Reservation from "./Reservation";

export default abstract class DateRangeReservation extends Reservation {
  constructor(reservationId: string,
    clientEmail: string) {

    super(reservationId, clientEmail);
  }

  public abstract getStartDate(): string;
  public abstract getEndDate(): string;
}
