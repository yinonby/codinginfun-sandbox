import Utils from "../../../utils/Utils";
import { StripeCreditCard } from "./StripeCreditCard";

export const STRIPE_CARD_NUMBER_INVALID = "0000-0000-0000-0000";

type StripePaymentRecord = {
  rate: number,
  currencyCode: string,
  stripeCreditCard: StripeCreditCard,
}

export enum STRIPE_RESPONSE_STATUS_E {
  STRIPE_RESPONSE_STATUS_OK,
  STRIPE_RESPONSE_STATUS_ERROR,
}

export type StripeResponseCharge = {
  status: STRIPE_RESPONSE_STATUS_E,
  stripePaymentId: string,
}

export type StripeRefundResponse = {
  status: STRIPE_RESPONSE_STATUS_E,
}

export default class StripeMock {
  private paymentHistoryMap: Map<string, StripePaymentRecord> =
    new Map<string, StripePaymentRecord>;

  // the method 'charge()' charges the given payment method with
  // the given rate in the given currency, and returns a unique payment-id
  public charge(rate: number, currencyCode: string,
    stripeCreditCard: StripeCreditCard): StripeResponseCharge {
    const stripePaymentId: string = Utils.generateUniqueId();
    const stripePaymentRecord: StripePaymentRecord = {
      rate: rate,
      currencyCode: currencyCode,
      stripeCreditCard: stripeCreditCard,
    }

    // this special card number is used to simulate errors for testing purposes
    if (stripeCreditCard.creditCardNumber === STRIPE_CARD_NUMBER_INVALID) {
      return {
        status: STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_ERROR,
        stripePaymentId: "",
      }
    }

    // here, a real system would make the actual charge of the payment method
    // and return an error in case charge fails

    this.paymentHistoryMap.set(stripePaymentId, stripePaymentRecord);
    return {
      status: STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK,
      stripePaymentId: stripePaymentId,
    }
  }

  // the method 'refund()' uses the given payment-id to search for
  // the payment record and, if found, refunds the amount previously charged
  public refund(stripePaymentId: string): StripeRefundResponse {
    const stripePaymentRecord: StripePaymentRecord | undefined =
      this.paymentHistoryMap.get(stripePaymentId);
    
    // if not found, return error
    if (! stripePaymentRecord) {
      console.error("payment not found, stripePaymentId: " + stripePaymentId);
      return {
        status: STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_ERROR,
      }
    }

    // here, a real system would make the actual refund to the payment method
    // and return an error in case refund fails

    // return ok
    return {
      status: STRIPE_RESPONSE_STATUS_E.STRIPE_RESPONSE_STATUS_OK,
    }
  }
}
