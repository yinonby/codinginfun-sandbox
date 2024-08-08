import Customer from "../persons/Customer";

// ********** TASK **********
// declare class 'Reservation' as implementing interface 'Payable'
export default abstract class Reservation {
  private paymentId: string = "";
  private _isCanceled: boolean = false;

  constructor(
    private readonly reservationId: string,
    private readonly customer: Customer) {
  }

  // ********** TASK **********
  // implement public getter getReservationId() 

  // ********** TASK **********
  // implement public getter getcustomer() 

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

  // ********** TASK **********
  // declare the Payable.getRate() method as public and abstract

  // ********** TASK **********
  // declare the Payable.getCurrencyCode() method as public and abstract

  // ********** TASK **********
  // declare an abstract method 'getReservationSummary' with a return-type
  // 'string'
}
