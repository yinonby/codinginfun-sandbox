import Customer from "../../booking-system/persons/Customer";

export class Reservation {
  private readonly reservationId: string;
  private customer: Customer | null = null;
	
	constructor(builder: Reservation.ReservationBuilder) {
		this.reservationId = builder.getReservationId();
		this.customer = builder.getCustomer();
	}

  public getReservationId(): string {
    return this.reservationId;
  }

	// Builder Class
	static ReservationBuilder = class {
    private reservationId: string = "";
    private customer: Customer | null = null;

		public withReservationId(reservationId: string): Reservation.ReservationBuilder {
			this.reservationId = reservationId;
			return this;
		}

    public getReservationId(): string {
      return this.reservationId;
    }

		public withCustomer(customer: Customer): Reservation.ReservationBuilder {
			this.customer = customer;
			return this;
		}

    public getCustomer(): Customer | null {
      return this.customer;
    }

		public build(): Reservation {
			return new Reservation(this);
		}
	}
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Reservation {
  type ReservationBuilder = typeof Reservation.ReservationBuilder.prototype
}

const reservation: Reservation = new Reservation.ReservationBuilder()
  .withReservationId("1111-2222")
  .build();
console.log(reservation.getReservationId());
