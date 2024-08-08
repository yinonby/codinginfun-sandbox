import { StripeCreditCard } from "../../../external-api-mocks/stripe/StripeCreditCard";
import StripeMock from "../../../external-api-mocks/stripe/StripeMock";
import { CreditCard, CreditCardDetails } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../ExternalPaymentProcessingAdapter";

export const PAYMENT_PROCESSING_SERVICE_NAME_STRIPE = "pps-stripe";
export class StripeApiError extends Error {}

// in a real environment, this class would be sending requests
// to the Stripe servers; for this example, we use StripeMock - a class
// that simulates a Stripe environment

export default class StripeAPI implements ExternalPaymentProcessingAdapter {
  private stripeMock: StripeMock = new StripeMock();

  public getPaymentProcessingServiceName(): string {
    return PAYMENT_PROCESSING_SERVICE_NAME_STRIPE;
  }
  
  // ********** TASK **********
  /*
    implement interface method 'ExternalPaymentProcessingAdapter.chargeCard()'
    - the method should be 'public'
    - the method should create a variable 'stripeCreditCard' whose type
      is 'StripeCreditCard' and initialize it using the internal
      method 'buildStripeCreditCard()'
    - the method should call 'this.stripeMock.charge()' method, and store
      the result in a variable 'stripeChargeResponse' whose type is
      'StripeChargeResponse'
    - in case 'stripeChargeResponse.status' is not equal to
      'STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK', the method
      should throw an error with message: "Error returned from Stripe!"
    - the method should return 'stripeChargeResponse.stripePaymentId
  */

  // ********** TASK **********
  /*
    implement interface method 'ExternalPaymentProcessingAdapter.refund()'
    - the method should be 'public'
    - the method should call 'this.stripeMock.charge()' method, and store
      the result in a variable 'stripeRefundResponse' whose type
      is 'StripeRefundResponse'
    - in case 'stripeRefundResponse.status' is not equal to
      'STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK', the method
      should throw an error with message: "Error returned from Stripe!"
  */

  // internal methods
  
  private buildStripeCreditCard(creditCard: CreditCard): StripeCreditCard {
    const creditCardDetails: CreditCardDetails =
      creditCard.getCreditCardDetails();
    const stripeCreditCard: StripeCreditCard = {
      creditCardNumber: creditCardDetails.creditCardNumber,
      creditCardExpirationDay: creditCardDetails.creditCardExpirationDay,
      creditCardExpirationMonth: creditCardDetails.creditCardExpirationMonth,
      creditCardValidationCode: creditCardDetails.creditCardValidationCode,
    }
    return stripeCreditCard;
  }
}
