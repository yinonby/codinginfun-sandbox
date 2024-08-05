
import { test as bsTest } from "./tests/BookingSystem.test";
import { test as pmTest } from "./tests/PaymentManager.test";
import { test as stripeApiTest } from "./tests/StripeAPI.test";
const { mocha } = window;

mocha.setup("bdd");

stripeApiTest();
pmTest();
bsTest();

mocha.run();
