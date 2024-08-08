import Customer from "../persons/Customer";
import Reservation from "./Reservation";

export default abstract class FixedDateReservation extends Reservation {
  constructor(
    reservationId: string,
    customer: Customer) {

    super(reservationId, customer);
  }

  // ********** TASK **********
  // declare an abstract method 'getFixedDate' with a return-type 'string'
}
