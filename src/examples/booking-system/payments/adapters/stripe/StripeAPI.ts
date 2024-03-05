import StripeMock from "../../../external-api-mocks/stripe/StripeMock";
import Payable from "../../Payable";
import { PaymentMethod } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../ExternalPaymentProcessingAdapter";

// in a real environment, this class would be sending requests
// to the Stripe servers; for this example, we use StripeMock - a class
// that simulates a Stripe environment
export default class StripeAPI implements ExternalPaymentProcessingAdapter {
  private stripeMock: StripeMock = new StripeMock();

  // this method sends a charge command to the external payment provider
  public charge(payable: Payable, paymentMethod: PaymentMethod): string {
    return this.stripeMock.charge(payable.getRate(),
      payable.getCurrencyCode(), paymentMethod);
  }

  // this method sends a refund command to the external payment provider
  public refund(paymentId: string): boolean {
    return this.stripeMock.refund(paymentId);
  }
}
