import { test as reservationTest } from "./tests/BookingSystem.test";
const { mocha } = window;

mocha.setup("bdd");

reservationTest();

mocha.run();
