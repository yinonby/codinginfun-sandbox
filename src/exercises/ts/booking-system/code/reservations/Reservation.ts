import Payable from "../payments/Payable";

export default abstract class Reservation implements Payable {
  private paymentId: string = "";

  constructor(private reservationId: string,
    private clientEmail: string) {
  }

  public getReservationId(): string {
    return this.reservationId;
  }

  public getClientEmail(): string {
    return this.clientEmail;
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

  public abstract getRate(): number;
  public abstract getCurrencyCode(): string;
  public abstract getReservationSummary(): string;
}
