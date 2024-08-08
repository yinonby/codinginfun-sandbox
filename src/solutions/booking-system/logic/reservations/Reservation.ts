import Payable from "../payments/Payable";
import Customer from "../persons/Customer";

export default abstract class Reservation implements Payable {
  private paymentId: string = "";
  private _isCanceled: boolean = false;

  constructor(
    private readonly reservationId: string,
    private readonly customer: Customer) {
  }

  public getReservationId(): string {
    return this.reservationId;
  }

  public getcustomer(): Customer {
    return this.customer;
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

  public isCanceled(): boolean {
    return this._isCanceled;
  }

  public cancel(): void {
    this._isCanceled = true;
  }

  public abstract getRate(): number;
  public abstract getCurrencyCode(): string;
  public abstract getReservationSummary(): string;
}
