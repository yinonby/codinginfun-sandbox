import Customer from "../persons/Customer";
import Reservation from "./Reservation";

export default abstract class DateRangeReservation extends Reservation {
  constructor(
    reservationId: string,
    customer: Customer) {

    super(reservationId, customer);
  }

  // ********** TASK **********
  // declare an abstract method 'getStartDate' with a return-type 'string'

  // ********** TASK **********
  // declare an abstract method 'getEndDate' with a return-type 'string'
}
