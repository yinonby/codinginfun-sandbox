import Order from "./orders/Order";
import { PaymentMethod } from "./payments/PaymentMethod";
import PaymentOperationsProvider from "./payments/payment-operations/PaymentOperationsProvider";
import Customer from "./persons/Customer";
import Reservation from "./reservations/Reservation";

export class BookingSystemError extends Error {}

export default class BookingSystem {
  private reservations: Reservation[] = [];
  private orders: Order[] = [];

  constructor(private paymentOperationsProvider: PaymentOperationsProvider) {}

  // internal methods to wrap PaymentOperationsProvider methods

  private makeReservationPayment(customer: Customer, reservation: Reservation,
    paymentMethod: PaymentMethod): string {
    let paymentId: string = "";

    // ********** TASK **********
    // call 'this.paymentOperationsProvider.makePayment()'
    // with the same arguments, and store the result in 'paymentId'

    return paymentId;
  }

  private makeOrderPayment(customer: Customer, order: Order,
    paymentMethod: PaymentMethod): string {
      let paymentId: string = "";
  
      // ********** TASK **********
      // call 'this.paymentOperationsProvider.makePayment()'
      // with the same arguments, and store the result in 'paymentId'
  
      return paymentId;
  }

  private cancelPayment(paymentId: string): void {
    // ********** TASK **********
    // call 'this.paymentOperationsProvider.cancelPayment()', passing the
    // payment id
  }

  // API methods

  // ********** TASK **********
  /*
    implement a public method 'addHotelReservation()'
    - the method should accept arguments:
      > firstName: string
      > lastName: string
      > customerEmail: string
      > hotelName: string, startDate: string, endDate: string
      > rate: number, currencyCode: string
      > paymentMethod: PaymentMethod
    - the method return-type should be 'string'
    - the method should construct a new object whose type is 'Customer'
    - the method should generate a new reservation id, using the internal
      method 'generateUniqueId'
    - the method should construct a new object whose type is 'HotelReservation'
    - the method should call the internal 'addReservation()' method, using
      the appropriate arguments
    - the method should return the reservation id
  */

  // ********** TASK **********
  /*
    implement a public method 'addFlightReservation()'
    - the method should accept arguments:
      > firstName: string
      > lastName: string
      > customerEmail: string
      > originAirportCode: string
      > destinationAirportCode: string
      > flightDate: string
      > flightRate: number
      > currencyCode: string
      > paymentMethod: PaymentMethod
    - the method return-type should be 'string'
    - the method should construct a new object whose type is 'Customer'
    - the method should generate a new reservation id, using the internal
      method 'generateUniqueId'
    - the method should construct a new object whose type is 'FlightReservation'
    - the method should call the internal 'addReservation()' method, using
      the appropriate arguments
    - the method should return the reservation id
  */

  // ********** TASK **********
  /*
    implement a public method 'addActivityReservation()'
    - the method should accept arguments:
      > firstName: string
      > lastName: string
      > customerEmail: string
      > activityName: string
      > activityDate: string
      > activityRate: number
      > currencyCode: string
      > paymentMethod: PaymentMethod
    - the method return-type should be 'string'
    - the method should construct a new object whose type is 'Customer'
    - the method should generate a new reservation id, using the internal
      method 'generateUniqueId'
    - the method should construct a new object whose type is 'ActivityReservation'
    - the method should call the internal 'addReservation()' method, using
      the appropriate arguments
    - the method should return the reservation id
  */

  // ********** TASK **********
  /*
    implement a public method 'addTravelBookPurchase()'
    - the method should accept arguments:
      > firstName: string
      > lastName: string
      > customerEmail: string
      > bookName: string
      > bookPrice: number
      > currencyCode: string
      > paymentMethod: PaymentMethod
    - the method return-type should be 'string'
    - the method should construct a new object whose type is 'Customer'
    - the method should construct a new object whose type is 'Book'
    - the method should generate a new order id, using the internal
      method 'generateUniqueId'
    - the method should construct a new object whose type is 'Order'
    - the method should call the internal 'addOrder()' method, using
      the appropriate arguments
    - the method should return the order id
  */

  // ********** TASK **********
  /*
    implement a public method 'cancelReservation()' with an argument
    'reservationId' of type 'string', and return-type 'void'
    - the method should call the internal method 'findReservation()', and
      store the result in a variable 'reservation' whose type is union
      'Reservation | null'
    - if a reservation with the given id is not found, the method should
      throw an error with message: "Reservation not found: " + reservationId
    - if the reservation has already been canceled, the method should throw
      an error with message: "Reservation is already canceled: " + reservationId
    - method should call 'this.PaymentOperationsProvider.cancelPayment()'
      with the payment id
    - method should update the reservation status, using the internal
      method 'updateReservationToCanceled()'
  */

  // internal methods

  private addReservation(customer: Customer, reservation: Reservation,
    paymentMethod: PaymentMethod): void {
    // charge
    const paymentId: string = this.makeReservationPayment(customer, reservation,
      paymentMethod);
    // charge is successful
    reservation.setPaymentId(paymentId);
    this.reservations.push(reservation);
  }

  private findReservation(reservationId: string): Reservation | null {
    // search reservation
    const reservationIdx: number = this.reservations.findIndex(e =>
      e.getReservationId() === reservationId);

    // if reservation not found, throw error
    if (reservationIdx === -1) {
      return null;
    }

    // get the reservation
    return this.reservations[reservationIdx];
  }

  private updateReservationToCanceled(reservation: Reservation): void {
    reservation.cancel();
  }

  private addOrder(customer: Customer, order: Order,
    paymentMethod: PaymentMethod) {
      
    // charge
    this.makeOrderPayment(customer, order, paymentMethod);
    
    // charge is successful
    this.orders.push(order);
  }

}
