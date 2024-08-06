
import Reservation from "../logic/reservations/Reservation";

export default class SampleReservation extends Reservation {

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
