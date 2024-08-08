import Utils from "../utils/Utils";
import Order from "./orders/Order";
import { PaymentMethod } from "./payments/PaymentMethod";
import PaymentOperationsProvider from "./payments/payment-operations/PaymentOperationsProvider";
import Customer from "./persons/Customer";
import { default as Book } from "./products/Book";
import ActivityReservation from "./reservations/ActivityReservation";
import FlightReservation from "./reservations/FlightReservation";
import HotelReservation from "./reservations/HotelReservation";
import Reservation from "./reservations/Reservation";

export class BookingSystemError extends Error {}

export default class BookingSystem {
  private reservations: Reservation[] = [];
  private orders: Order[] = [];

  constructor(private paymentOperationsProvider: PaymentOperationsProvider) {}

  // internal methods to wrap PaymentOperationsProvider methods

  private makeReservationPayment(customer: Customer, reservation: Reservation,
    paymentMethod: PaymentMethod): string {
    // call the payment operations provider
    return this.paymentOperationsProvider.makePayment(customer, reservation,
      paymentMethod);
  }

  private makeOrderPayment(customer: Customer, order: Order,
    paymentMethod: PaymentMethod): string {
    // call the payment operations provider
    return this.paymentOperationsProvider.makePayment(customer, order,
      paymentMethod);
  }

  private cancelPayment(paymentId: string): void {
    // call the payment operations provider
    this.paymentOperationsProvider.cancelPayment(paymentId);
  }

  // API methods

  public addHotelReservation(
    firstName: string,
    lastName: string,
    customerEmail: string,
    hotelName: string, startDate: string, endDate: string,
    rate: number, currencyCode: string,
      paymentMethod: PaymentMethod): string {

    // create customer object
    const customer: Customer = new Customer(firstName, lastName, customerEmail);
    
    // create reservation object
    const reservationId: string = Utils.generateUniqueId();
    const hotelReservation: HotelReservation = new HotelReservation(
      reservationId, customer,
      startDate, endDate, rate, currencyCode, hotelName);
    
    this.addReservation(customer, hotelReservation, paymentMethod);
    return reservationId;
  }

  public addFlightReservation(
    firstName: string,
    lastName: string,
    customerEmail: string,
    originAirportCode: string, destinationAirportCode: string,
    flightDate: string,
    flightRate: number, currencyCode: string,
    paymentMethod: PaymentMethod): string {

    // create customer object
    const customer: Customer = new Customer(firstName, lastName, customerEmail);
    
    // create reservation object
    const reservationId: string = Utils.generateUniqueId();
    const flightReservation: FlightReservation = new FlightReservation(
      reservationId, customer, flightDate,
      originAirportCode, destinationAirportCode, flightRate, currencyCode);
    
    this.addReservation(customer, flightReservation, paymentMethod);
    return reservationId;
  }

  public addActivityReservation(
    firstName: string,
    lastName: string,
    customerEmail: string,
    activityName: string, activityDate: string,
    activityRate: number, currencyCode: string,
    paymentMethod: PaymentMethod): string {

    // create customer object
    const customer: Customer = new Customer(firstName, lastName, customerEmail);
    
    // create reservation object
    const reservationId: string = Utils.generateUniqueId();
    const activityReservation: ActivityReservation = new ActivityReservation(
      reservationId, customer, activityName, activityDate,
      activityRate, currencyCode);
    
    this.addReservation(customer, activityReservation, paymentMethod);
    return reservationId;
  }

  public addTravelBookPurchase(
    firstName: string,
    lastName: string,
    customerEmail: string,
    bookName: string,
    bookPrice: number,
    currencyCode: string,
    paymentMethod: PaymentMethod): string {

    // create customer object
    const customer: Customer = new Customer(firstName, lastName, customerEmail);
    
    // create gift-card object
    const book: Book = new Book(bookName, bookPrice, currencyCode);

    // create order object
    const orderId: string = Utils.generateUniqueId();
    const order: Order = new Order(orderId, customer, [book]);
    
    this.addOrder(customer, order, paymentMethod);
    return orderId;
  }

  public cancelReservation(reservationId: string): void {
    // get the reservation
    const reservation: Reservation | null = this.findReservation(reservationId);

    // if reservation not found, throw error
    if (!reservation) {
      throw new BookingSystemError("Reservation not found: " + reservationId);
    }
    // if reservation is canceled, throw error
    if (reservation.isCanceled()) {
      throw new BookingSystemError("Reservation is already canceled: " + reservationId);
    }

    // refund payment
    this.cancelPayment(reservation.getPaymentId());

    // update status to canceled
    this.updateReservationToCanceled(reservation);
  }

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
