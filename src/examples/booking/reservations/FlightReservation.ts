import FixedDateReservation from "./FixedDateReservation";

export default class FlightReservation extends FixedDateReservation {
  constructor(reservationId: string, clientEmail: string,
    flightDate: string,
    private originAirportCode: string, private destinationAirportCode: string,
    private flightSegmentRate: number, private currencyCode: string) {

    super(reservationId, clientEmail, flightDate);
  }

  public getRate(): number {
    return this.flightSegmentRate;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

  public getOriginAirportCode(): string {
    return this.originAirportCode;
  }

  public getDestinationAirportCode(): string {
    return this.destinationAirportCode;
  }

  public getReservationSummary(): string {
    return "Flight from " + this.getOriginAirportCode() +
      " to " + this.getDestinationAirportCode() +
      ", on " + this.getFixedDate();
  }
}
