import BookingSystem from "./BookingSystem";
import { BankAccount, CreditCard } from "./payments/PaymentMethod";
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

const creditCard: CreditCard = {
  creditCardNumber: "1111222233334444",
  creditCardExpirationDay: 1,
  creditCardExpirationMonth: 1,
  creditCardValidationCode: "000",
}
const reservationId1: string = bookingSystem.addHotelReservation(
  "client-1@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
  100, "EUR", creditCard);

const bankAccount: BankAccount = {
  ibanNumber: "ES11000011110000111111",
  bankSwiftCode: "BBBAAAXXX",
}
bookingSystem.addHotelReservation(
  "client-2@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
  130, "USD", bankAccount);
bookingSystem.addGiftCardPurchase(
  "client-2@yahoo.com",
  100, "USD", bankAccount);

bookingSystem.cancelReservation(reservationId1);
