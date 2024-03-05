import { StripeCreditCard } from "../../../external-api-mocks/stripe/StripeCreditCard";
import StripeMock from "../../../external-api-mocks/stripe/StripeMock";
import Payable from "../../Payable";
import { CreditCard } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../ExternalPaymentProcessingAdapter";

// in a real environment, this class would be sending requests
// to the Stripe servers; for this example, we use StripeMock - a class
// that simulates a Stripe environment
export default class StripeAPI implements ExternalPaymentProcessingAdapter {
  private stripeMock: StripeMock = new StripeMock();

  // this method sends a charge command to the external payment provider
  public charge(payable: Payable, creditCard: CreditCard): string {
    const stripeCreditCard: StripeCreditCard = {
      creditCardNumber: creditCard.creditCardNumber,
      creditCardExpirationDay: creditCard.creditCardExpirationDay,
      creditCardExpirationMonth: creditCard.creditCardExpirationMonth,
      creditCardValidationCode: creditCard.creditCardValidationCode,
    }
    return this.stripeMock.charge(payable.getRate(),
      payable.getCurrencyCode(), stripeCreditCard);
  }

  // this method sends a refund command to the external payment provider
  public refund(paymentId: string): boolean {
    return this.stripeMock.refund(paymentId);
  }
}
