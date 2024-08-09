
import BookingSystem from "./BookingSystem";
import PaymentOperationsProvider from "./payments/payment-operations/PaymentOperationsProvider";
import PaymentManagerFactory from "./payments/payment-operations/managers/PaymentManagerFactory";

export default class BookingSystemFactory {
  public static buildBookingSystem(): BookingSystem {
    const paymentOperationsProvider: PaymentOperationsProvider =
      PaymentManagerFactory.buildPaymentManager();
    const bookingSystem: BookingSystem = new BookingSystem(paymentOperationsProvider);

    return bookingSystem;
  }
}
