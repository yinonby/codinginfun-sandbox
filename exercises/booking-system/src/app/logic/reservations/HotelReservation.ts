import Customer from "../persons/Customer";
import DateRangeReservation from "./DateRangeReservation";

export default class HotelReservation extends DateRangeReservation {
  constructor(
    reservationId: string,
    customer: Customer,
    private readonly startDate: string,
    private readonly endDate: string,
    private readonly totalRate: number,
    private readonly currencyCode: string,
    private readonly hotelName: string) {

    super(reservationId, customer);
  }

  // ********** TASK **********
  // implement public abstract method 'getRate' - return private
  // property 'totalRate'

  // ********** TASK **********
  // implement public abstract method 'getCurrencyCode' - return private
  // property 'currencyCode'

  // ********** TASK **********
  // implement public abstract method 'getStartDate' - return private
  // property 'startDate'

  // ********** TASK **********
  // implement public abstract method 'getEndDate' - return private
  // property 'endDate'

  public getHotelName(): string {
    return this.hotelName;
  }

  // ********** TASK **********
  // implement public abstract method 'getReservationSummary' - return a string
  // in the following format:
  // "Hotel: <<hotelName>>, check-in: <<startDate>>, check-out: <<endDate>>"
}
