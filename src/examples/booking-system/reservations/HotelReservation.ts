import DateRangeReservation from "./DateRangeReservation";

export default class HotelReservation extends DateRangeReservation {
  constructor(reservationId: string,
    clientEmail: string,
    startDate: string, endDate: string,
    private rate: number,
    private currencyCode: string,
    private hotelName: string) {

    super(reservationId, clientEmail, startDate, endDate);
  }

  public getRate(): number {
    return this.rate;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

  public getReservationSummary(): string {
    return "Hotel: " + this.hotelName +
      ", check-in: " + this.getStartDate() +
      ", check-out: " + this.getEndDate();
  }
}
