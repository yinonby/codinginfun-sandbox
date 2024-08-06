
import { test as activityReservationTest } from "./tests/ActivityReservation.test";
import { test as bsTest } from "./tests/BookingSystem.test";
import { test as flightReservationTest } from "./tests/FlightReservation.test";
import { test as hotelReservationTest } from "./tests/HotelReservation.test";

import { test as bookTest } from "./tests/Book.test";

import { test as customerTest } from "./tests/Customer.test";
import { test as personTest } from "./tests/Person.test";

import { test as orderTest } from "./tests/Order.test";

import { test as pmTest } from "./tests/PaymentManager.test";
import { test as reservationTest } from "./tests/Reservation.test";
import { test as stripeApiTest } from "./tests/StripeAPI.test";
//const { mocha } = window;

//mocha.setup("bdd");
//mocha.checkLeaks();

reservationTest();
activityReservationTest();
flightReservationTest();
hotelReservationTest();

bookTest();

personTest();
customerTest();

orderTest();

stripeApiTest();
pmTest();
bsTest();

//mocha.run();
