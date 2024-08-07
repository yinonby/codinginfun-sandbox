
import { test as activityReservationTest } from "./tests/ActivityReservation.test.js";
import { test as bsTest } from "./tests/BookingSystem.test.js";
import { test as flightReservationTest } from "./tests/FlightReservation.test.js";
import { test as hotelReservationTest } from "./tests/HotelReservation.test.js";

import { test as bookTest } from "./tests/Book.test.js";

import { test as customerTest } from "./tests/Customer.test.js";
import { test as personTest } from "./tests/Person.test.js";

import { test as orderTest } from "./tests/Order.test.js";

import { test as pmTest } from "./tests/PaymentManager.test.js";
import { test as reservationTest } from "./tests/Reservation.test.js";
import { test as stripeApiTest } from "./tests/StripeAPI.test.js";

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

mocha.run(); // keep mocha.run() here and not in index.html for codesandbox
