import Reservation from "./Reservation";

export default abstract class FixedDateReservation extends Reservation {
  constructor(
    reservationId: string,
    customerEmail: string) {

    super(reservationId, customerEmail);
  }

  public abstract getFixedDate(): string;
}
