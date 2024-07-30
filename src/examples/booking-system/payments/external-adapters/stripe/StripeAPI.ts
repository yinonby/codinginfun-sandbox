import { StripeCreditCard } from "../../../external-api-mocks/stripe/StripeCreditCard";
import StripeMock, { STRIPE_RESPONSE_STATUS_E, StripeResponseCharge as StripeChargeResponse, StripeRefundResponse } from "../../../external-api-mocks/stripe/StripeMock";
import Person from "../../../persons/person";
import Payable from "../../Payable";
import { CreditCard, CreditCardDetails } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../ExternalPaymentProcessingAdapter";

export class StripeApiError extends Error {}

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
    const stripeChargeResponse: StripeChargeResponse =
      this.stripeMock.charge(payable.getRate(), payable.getCurrencyCode(),
        stripeCreditCard);

    // if Stripe returned an error
    if (stripeChargeResponse.status !== STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK) {
      throw new StripeApiError("Error returned from Stripe!");
    }

    return stripeChargeResponse.stripePaymentId;
  }

  // this method sends a refund command to the external payment provider
  public refund(externalPaymentId: string): void {
    const stripeRefundResponse: StripeRefundResponse =
      this.stripeMock.refund(externalPaymentId);

    // if Stripe returned an error
    if (stripeRefundResponse.status !== STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK) {
      throw new StripeApiError("Error returned from Stripe!");
    }
  }
}
