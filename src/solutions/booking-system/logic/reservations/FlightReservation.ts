import Customer from "../persons/Customer";
import FixedDateReservation from "./FixedDateReservation";

export default class FlightReservation extends FixedDateReservation {
  constructor(
    reservationId: string,
    customer: Customer,
    private readonly flightDate: string,
    private readonly originAirportCode: string,
    private readonly destinationAirportCode: string,
    private readonly flightRate: number,
    private readonly currencyCode: string) {

    super(reservationId, customer);
  }

  public getFixedDate(): string {
    return this.flightDate;
  }
  // Note: in a real flight reservation, where more than a single flight
  // segment can be found, we would go over the flight segments,
  // and return the date of the first flight in the sequence

  public getRate(): number {
    return this.flightRate;
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
