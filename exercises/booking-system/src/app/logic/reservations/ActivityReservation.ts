import Customer from "../persons/Customer";
import FixedDateReservation from "./FixedDateReservation";

export default class ActivityReservation extends FixedDateReservation {
  constructor(
    reservationId: string,
    customer: Customer,
    private readonly activityName: string,
    private readonly activityDate: string,
    private readonly activityRate: number,
    private readonly currencyCode: string) {

    super(reservationId, customer);
  }

  // ********** TASK **********
  // implement public abstract method 'getFixedDate' - return private
  // property 'activityDate'

  // ********** TASK **********
  // implement public abstract method 'getRate' - return private
  // property 'activityRate'

  // ********** TASK **********
  // implement public abstract method 'getCurrencyCode' - return private
  // property 'currencyCode'

  public getActivityName(): string {
    return this.activityName;
  }

  // ********** TASK **********
  // implement public abstract method 'getReservationSummary' - return a string
  // in the following format:
  // "Activity: <<activityName>> on <<activityDate>>"
}
