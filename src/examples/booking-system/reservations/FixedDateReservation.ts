import Reservation from "./Reservation";

export default abstract class FixedDateReservation extends Reservation {
  constructor(
    reservationId: string,
    clientEmail: string) {

    super(reservationId, clientEmail);
  }

  public abstract getFixedDate(): string;
}
