import { StripeCreditCard } from "./StripeCreditCard";

type StripePaymentRecord = {
  rate: number,
  currencyCode: string,
  stripeCreditCard: StripeCreditCard,
}

export default class StripeMock {
  private paymentHistoryMap: Map<string, StripePaymentRecord> =
    new Map<string, StripePaymentRecord>;

  // the method 'charge()' charges the given payment method with
  // the given rate in the given currency, and returns a unique payment-id
  public charge(rate: number, currencyCode: string,
    stripeCreditCard: StripeCreditCard): string {
    const stripePaymentId: string = generateUniqueId();
    const stripePaymentRecord: StripePaymentRecord = {
      rate: rate,
      currencyCode: currencyCode,
      stripeCreditCard: stripeCreditCard,
    }

    // here, a real system would make the actual charge of the payment method
    // and throw an error in case charge fails

    this.paymentHistoryMap.set(stripePaymentId, stripePaymentRecord);
    return stripePaymentId;
  }

  // the method 'refund()' uses the given payment-id to search for
  // the payment record and, if found, refunds the amount previously charged
  public refund(stripePaymentId: string): void {
    const stripePaymentRecord: StripePaymentRecord | undefined =
      this.paymentHistoryMap.get(stripePaymentId);
    if (! stripePaymentRecord) {
      throw new Error("payment not found, stripePaymentId: " + stripePaymentId);
    }

    // here, a real system would make the actual refund to the payment method
    // and throw a failure in case refund fails
  }
}

function generateUniqueId(): string {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
