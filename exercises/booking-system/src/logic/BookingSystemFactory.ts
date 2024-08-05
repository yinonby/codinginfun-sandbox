
import BookingSystem from "./BookingSystem";
import ExternalPaymentProcessingAdapter from "./payments/external-adapters/ExternalPaymentProcessingAdapter";
import StripeAPI from "./payments/external-adapters/stripe/StripeAPI";
import PaymentOperationsProvider from "./payments/payment-operations/PaymentOperationsProvider";
import PaymentManager from "./payments/payment-operations/managers/PaymentManager";

export default class BookingSystemFactory {
  public static buildBookingSystem(): BookingSystem {
    // note that if we want to change the external payment provider (i.e. Stripe),
    // all we have to do is to add a new external payment adapter and assign it
    // to the ExternalPaymentProcessingAdapter
    const stripeApi: StripeAPI = new StripeAPI();
    const primaryExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter =
      stripeApi;
    const externalPaymentProcessingAdapters: ExternalPaymentProcessingAdapter[] =
      [stripeApi];

    const paymentProvider: PaymentOperationsProvider =
      new PaymentManager(primaryExternalPaymentProcessingAdapter,
        externalPaymentProcessingAdapters);
    const bookingSystem: BookingSystem = new BookingSystem(paymentProvider);

    return bookingSystem;
  }
}
