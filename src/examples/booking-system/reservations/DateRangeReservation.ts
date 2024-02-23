import Reservation from "./Reservation";

export default abstract class DateRangeReservation extends Reservation {
  constructor(reservationId: string,
    clientEmail: string,
    private startDate: string, private endDate: string) {

    super(reservationId, clientEmail);
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }
}
