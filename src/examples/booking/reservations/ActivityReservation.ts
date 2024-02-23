import FixedDateReservation from "./FixedDateReservation";

export default class ActivityReservation extends FixedDateReservation {
  constructor(reservationId: string, clientEmail: string,
    private activityName: string, activityDate: string,
    private activityRate: number, private currencyCode: string) {

    super(reservationId, clientEmail, activityDate);
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
