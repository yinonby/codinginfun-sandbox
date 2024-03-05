import Order from "./orders/Order";
import { PaymentMethod } from "./payments/PaymentMethod";
import PaymentOperationsProvider from "./payments/PaymentOperationsProvider";
import GiftCard from "./products/GiftCard";
import ActivityReservation from "./reservations/ActivityReservation";
import FlightReservation from "./reservations/FlightReservation";
import HotelReservation from "./reservations/HotelReservation";
import Reservation from "./reservations/Reservation";

export default class BookingSystem {
  private reservations: Reservation[] = [];
  private orders: Order[] = [];

  constructor(private PaymentOperationsProvider: PaymentOperationsProvider) {}

  // API methods

  public addHotelReservation(clientEmail: string,
    hotelName: string, startDate: string, endDate: string,
    rate: number, currencyCode: string,
      paymentMethod: PaymentMethod): string {
    
    // create reservation object
    const reservationId: string = generateUniqueId();
    const hotelReservation: HotelReservation = new HotelReservation(
      reservationId, clientEmail,
      startDate, endDate, rate, currencyCode, hotelName);
    
    if (this.addReservation(hotelReservation, paymentMethod)) {
      return reservationId;
    } else {
      return "";
    }
  }

  public addFlightReservation(clientEmail: string,
    originAirportCode: string, destinationAirportCode: string,
    flightDate: string,
    flightRate: number, currencyCode: string,
    paymentMethod: PaymentMethod): string {
    
    // create reservation object
    const reservationId: string = generateUniqueId();
    const flightReservation: FlightReservation = new FlightReservation(
      reservationId, clientEmail, flightDate,
      originAirportCode, destinationAirportCode, flightRate, currencyCode);
    
    if (this.addReservation(flightReservation, paymentMethod)) {
      return reservationId;
    } else {
      return "";
    }
  }

  public addActivityReservation(clientEmail: string,
    activityName: string, activityDate: string,
    activityRate: number, currencyCode: string,
    paymentMethod: PaymentMethod): string {
    
    // create reservation object
    const reservationId: string = generateUniqueId();
    const activityReservation: ActivityReservation = new ActivityReservation(
      reservationId, clientEmail, activityName, activityDate,
      activityRate, currencyCode);
    
    if (this.addReservation(activityReservation, paymentMethod)) {
      return reservationId;
    } else {
      return "";
    }
  }

  public addGiftCardPurchase(clientEmail: string,
    cardValue: number, currencyCode: string,
      paymentMethod: PaymentMethod): string {
    
    // create gift-card object
    const giftCard: GiftCard = new GiftCard(clientEmail, cardValue,
      currencyCode);

    // create order object
    const orderId: string = generateUniqueId();
    const order: Order = new Order(orderId, clientEmail,
      giftCard);
    
    if (this.addOrder(order, paymentMethod)) {
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
      // reservation not found
      console.log("reservation not found: " + reservationId);
      return false;
    }
    const reservation: Reservation = this.reservations[reservationIdx];

    // if paid, refund payment
    if (! this.PaymentOperationsProvider.cancelPayment(
      reservation.getPaymentId())) {
      // if cannot refund, exit and return false
      console.log("refund failed: " + reservationId);
      return false;
    }

    // remove from array
    this.reservations.splice(reservationIdx, 1);
    return true;
  }

  // internal methods

  private addReservation(reservation: Reservation,
    paymentMethod: PaymentMethod): boolean {
    // charge
    const paymentId: string = this.PaymentOperationsProvider.makePayment(
      reservation, paymentMethod);
    if (! paymentId) {
      // if charge is not successful
      console.log("charge failed");
      return false;
    }
    reservation.setPaymentId(paymentId);
    this.reservations.push(reservation);
    return true;
  }

  private addOrder(order: Order, paymentMethod: PaymentMethod): boolean {
    // charge
    if (this.PaymentOperationsProvider.makePayment(order, paymentMethod)) {
      // if charge is successful
      this.orders.push(order);
      return true;
    } else {
      // if charge is not successful
      console.log("charge failed");
      return false;
    }
  }
}

function generateUniqueId(): string {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
