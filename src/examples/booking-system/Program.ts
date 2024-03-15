import BookingSystem from "./BookingSystem";
import { PaymentMethod } from "./payments/PaymentMethod";
import PaymentOperationsProvider from "./payments/PaymentOperationsProvider";
import ExternalPaymentProcessingAdapter from "./payments/adapters/ExternalPaymentProcessingAdapter";
import StripeAPI from "./payments/adapters/stripe/StripeAPI";
import PaymentManager from "./payments/managers/PaymentManager";

// note that if we want to change the external payment provider (i.e. Stripe),
// all we have to do is to add a new external payment adapter and assign it
// to the ExternalPaymentProcessingAdapter
const ExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter =
  new StripeAPI();

const paymentProvider: PaymentOperationsProvider =
  new PaymentManager(ExternalPaymentProcessingAdapter);
const bookingSystem: BookingSystem = new BookingSystem(paymentProvider);

// first customer
const paymentMethod1: PaymentMethod = {
  paymentMethodName: "credit-card",
  creditCardDetails: {
    creditCardNumber: "1111222233334444",
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
    100, "EUR", paymentMethod1);
} catch (err) {
  console.error("Failed making hotel reservation!");
    if (err instanceof Error) {
      console.error(err.message);
    }
}

if (reservationId1) {
  try {
    bookingSystem.cancelReservation(reservationId1);
  } catch (err) {
    console.error("Failed cancelling hotel reservation!");
      if (err instanceof Error) {
        console.error(err.message);
      }
  }

}

// second customer

const paymentMethod2: PaymentMethod = {
  paymentMethodName: "credit-card",
  creditCardDetails: {
    creditCardNumber: "1111222233335555",
    creditCardExpirationDay: 1,
    creditCardExpirationMonth: 1,
    creditCardValidationCode: "000",
  }
}

try {
  bookingSystem.addHotelReservation(
    "Justin", "Biber",
    "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
    130, "USD", paymentMethod2);
} catch (err) {
  console.error("Failed making hotel reservation!");
    if (err instanceof Error) {
      console.error(err.message);
    }
}

try {
  bookingSystem.addTravelBookPurchase(
    "Justin", "Biber",
    "Sites of Paris",
    "justinbiber@yahoo.com",
    100, "USD", paymentMethod2);
} catch (err) {
  console.error("Failed making travel book order!");
    if (err instanceof Error) {
      console.error(err.message);
    }
}

