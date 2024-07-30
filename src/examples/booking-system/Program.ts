import BookingSystem from "./BookingSystem";
import { STRIPE_CARD_NUMBER_INVALID } from "./external-api-mocks/stripe/StripeMock";
import { PaymentMethod } from "./payments/PaymentMethod";
import ExternalPaymentProcessingAdapter from "./payments/external-adapters/ExternalPaymentProcessingAdapter";
import StripeAPI, { StripeApiError } from "./payments/external-adapters/stripe/StripeAPI";
import PaymentOperationsProvider from "./payments/payment-operations/PaymentOperationsProvider";
import PaymentManager from "./payments/payment-operations/managers/PaymentManager";

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

// first customer
const validPaymentMethod1: PaymentMethod = {
  paymentMethodName: "credit-card",
  creditCardDetails: {
    creditCardNumber: "1111-2222-3333-4444",
    creditCardExpirationDay: 1,
    creditCardExpirationMonth: 1,
    creditCardValidationCode: "000",
  }
}

let reservationId1: string = "";
try {
  reservationId1 = bookingSystem.addHotelReservation(
    "Lady", "Gaga",
    "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
    100, "EUR", validPaymentMethod1);
  console.log("Made reservation with id: " + reservationId1);
} catch (err) {
  console.error("Failed making hotel reservation!");
  if (err instanceof Error) {
    console.error(err.message);
  }
}

if (reservationId1) {
  try {
    bookingSystem.cancelReservation(reservationId1);
    console.log("Cancelled reservation with id: " + reservationId1);
} catch (err) {
    console.error("Failed cancelling hotel reservation!");
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

// second customer

const validPaymentMethod2: PaymentMethod = {
  paymentMethodName: "credit-card",
  creditCardDetails: {
    creditCardNumber: "1111-2222-3333-5555",
    creditCardExpirationDay: 1,
    creditCardExpirationMonth: 1,
    creditCardValidationCode: "000",
  }
}

let reservationId2: string = "";
try {
  reservationId2 = bookingSystem.addHotelReservation(
    "Justin", "Biber",
    "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
    130, "USD", validPaymentMethod2);
  console.log("Made reservation with id: " + reservationId2);
} catch (err) {
  console.error("Failed making hotel reservation!");
  if (err instanceof Error) {
    console.error(err.message);
  }
}

// invalid payment method

const invalidPaymentMethod1: PaymentMethod = {
  paymentMethodName: "credit-card",
  creditCardDetails: {
    creditCardNumber: STRIPE_CARD_NUMBER_INVALID,
    creditCardExpirationDay: 1,
    creditCardExpirationMonth: 1,
    creditCardValidationCode: "000",
  }
}

let error: Error | null = null;
try {
  bookingSystem.addHotelReservation(
    "Justin", "Biber",
    "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
    130, "USD", invalidPaymentMethod1);
} catch (err: any) {
  error = err;
}

if (error === null) {
  console.error("Expected error due to invalid card number, but got none");
}
if (! (error instanceof StripeApiError)) {
  console.error("Expected StripeApiError due to invalid card numbe, but got noner");
}
