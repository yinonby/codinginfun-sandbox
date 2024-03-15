import Order from "./orders/Order";
import { PaymentMethod } from "./payments/PaymentMethod";
import PaymentOperationsProvider from "./payments/PaymentOperationsProvider";
import Customer from "./persons/Customer";
import { default as Book } from "./products/Book";
import ActivityReservation from "./reservations/ActivityReservation";
import FlightReservation from "./reservations/FlightReservation";
import HotelReservation from "./reservations/HotelReservation";
import Reservation from "./reservations/Reservation";

export default class BookingSystem {
  private reservations: Reservation[] = [];
  private orders: Order[] = [];

  constructor(private PaymentOperationsProvider: PaymentOperationsProvider) {}

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
    const reservationId: string = generateUniqueId();
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
    const reservationId: string = generateUniqueId();
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
    const reservationId: string = generateUniqueId();
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
    const orderId: string = generateUniqueId();
    const order: Order = new Order(orderId, customer, [book]);
    
    if (this.addOrder(customer, order, paymentMethod)) {
      return orderId;
    } else {
      return "";
    }
  }

  public cancelReservation(reservationId: string): boolean {
    // search reservation
    const reservationIdx: number = this.reservations.findIndex(e =>
      e.getReservationId() === reservationId);
    if (reservationIdx === -1) {
      throw new Error("Reservation not found: " + reservationId);
    }
    const reservation: Reservation = this.reservations[reservationIdx];

    // if paid, refund payment
    this.PaymentOperationsProvider.cancelPayment(reservation.getPaymentId());

    // remove from array
    this.reservations.splice(reservationIdx, 1);
    return true;
  }

  // internal methods

  private addReservation(customer: Customer, reservation: Reservation,
    paymentMethod: PaymentMethod): void {
    // charge
    const paymentId: string = this.PaymentOperationsProvider.makePayment(
      customer, reservation, paymentMethod);
    // charge is successful
    reservation.setPaymentId(paymentId);
    this.reservations.push(reservation);
  }

  private addOrder(customer: Customer, order: Order,
    paymentMethod: PaymentMethod): boolean {
    // charge
    const paymentId: string = this.PaymentOperationsProvider.makePayment(
      customer, order, paymentMethod);
    // charge is successful
    this.orders.push(order);
    return true;
  }

}

function generateUniqueId(): string {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
