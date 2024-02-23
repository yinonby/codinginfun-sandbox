import Reservation from "./Reservation";

export default abstract class FixedDateReservation extends Reservation {
  constructor(reservationId: string,
    clientEmail: string,
    private fixedDate: string) {

    super(reservationId, clientEmail);
  }

  public getFixedDate(): string {
    return this.fixedDate;
  }
}
