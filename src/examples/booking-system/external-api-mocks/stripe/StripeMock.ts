import { StripePaymentMethod } from "./StripePaymentMethod";

type StripePaymentRecord = {
  rate: number,
  currencyCode: string,
  stripePaymentMethod: StripePaymentMethod,
}

export default class StripeMock {
  private paymentHistoryMap: Map<string, StripePaymentRecord> =
    new Map<string, StripePaymentRecord>;

  // the method 'charge()' charges the given payment method with
  // the given rate in the given currency, and returns a unique payment-id
  public charge(rate: number, currencyCode: string,
    stripePaymentMethod: StripePaymentMethod): string {
    const paymentId: string = generateUniqueId();
    const stripePaymentRecord: StripePaymentRecord = {
      rate: rate,
      currencyCode: currencyCode,
      stripePaymentMethod: stripePaymentMethod,
    }

    // here the system should charge the payment method

    this.paymentHistoryMap.set(paymentId, stripePaymentRecord);
    return paymentId;
  }

  // the method 'refund()' uses the given payment-id to search for
  // the payment record and, if found, refunds the amount previously charged
  public refund(paymentId: string): boolean {
    const stripePaymentRecord: StripePaymentRecord | undefined =
      this.paymentHistoryMap.get(paymentId);
    if (! stripePaymentRecord) {
      return false;
    }

    // here the system should make a refund to the payment method on record

    return true;
  }
}

function generateUniqueId(): string {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
