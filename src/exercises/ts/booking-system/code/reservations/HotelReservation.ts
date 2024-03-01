import DateRangeReservation from "./DateRangeReservation";

export default class HotelReservation extends DateRangeReservation {
  constructor(reservationId: string,
    clientEmail: string,
    private startDate: string, private endDate: string,
    private rate: number,
    private currencyCode: string,
    private hotelName: string) {

    super(reservationId, clientEmail);
  }

  public getRate(): number {
    return this.rate;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public getReservationSummary(): string {
    return "Hotel: " + this.hotelName +
      ", check-in: " + this.getStartDate() +
      ", check-out: " + this.getEndDate();
  }
}
