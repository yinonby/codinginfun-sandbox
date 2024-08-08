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

  // ********** TASK **********
  // implement public abstract method 'getFixedDate' - return private
  // property 'flightDate'

  // Note: in a real flight reservation, where more than a single flight
  // segment can be found, we would go over the flight segments,
  // and return the date of the first flight in the sequence

  // ********** TASK **********
  // implement public abstract method 'getRate' - return private
  // property 'flightRate'

  // ********** TASK **********
  // implement public abstract method 'getCurrencyCode' - return private
  // property 'currencyCode'

  public getOriginAirportCode(): string {
    return this.originAirportCode;
  }

  public getDestinationAirportCode(): string {
    return this.destinationAirportCode;
  }

  // ********** TASK **********
  // implement public abstract method 'getReservationSummary' - return a string
  // in the following format:
  // "Flight from <<originAirportCode>> to <<destinationAirportCode>> on <<flightDate>>"
}
