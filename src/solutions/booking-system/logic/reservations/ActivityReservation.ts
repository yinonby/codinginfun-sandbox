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

  public getFixedDate(): string {
    return this.activityDate;
  }

  public getRate(): number {
    return this.activityRate;
  }

  public getCurrencyCode(): string {
    return this.currencyCode;
  }

  public getActivityName(): string {
    return this.activityName;
  }

  public getReservationSummary(): string {
    return "Activity: " + this.getActivityName() +
      " on " + this.getFixedDate();
  }
}
