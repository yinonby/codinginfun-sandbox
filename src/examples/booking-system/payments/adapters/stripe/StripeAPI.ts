import { StripeCreditCard } from "../../../external-api-mocks/stripe/StripeCreditCard";
import StripeMock from "../../../external-api-mocks/stripe/StripeMock";
import Person from "../../../persons/person";
import Payable from "../../Payable";
import { CreditCard, CreditCardDetails } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../ExternalPaymentProcessingAdapter";

// in a real environment, this class would be sending requests
// to the Stripe servers; for this example, we use StripeMock - a class
// that simulates a Stripe environment
export default class StripeAPI implements ExternalPaymentProcessingAdapter {
  private stripeMock: StripeMock = new StripeMock();

  // this method sends a charge command to the external payment provider
  public chargeCard(person: Person, payable: Payable,
    creditCard: CreditCard): string {

    // build the credit card structure expected by Stripe
    const creditCardDetails: CreditCardDetails =
      creditCard.getCreditCardDetails();
    const stripeCreditCard: StripeCreditCard = {
      creditCardNumber: creditCardDetails.creditCardNumber,
      creditCardExpirationDay: creditCardDetails.creditCardExpirationDay,
      creditCardExpirationMonth: creditCardDetails.creditCardExpirationMonth,
      creditCardValidationCode: creditCardDetails.creditCardValidationCode,
    }
    return this.stripeMock.charge(payable.getRate(),
      payable.getCurrencyCode(), stripeCreditCard);
  }

  // this method sends a refund command to the external payment provider
  public refund(paymentId: string): void {
    this.stripeMock.refund(paymentId);
  }
}
