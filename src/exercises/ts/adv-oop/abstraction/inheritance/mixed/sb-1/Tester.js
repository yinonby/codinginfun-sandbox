/* eslint-disable no-prototype-builtins */

import TestError from "../../../../../../../infra/test/TestError";
import {
  COFFEE_MELITTA,
  COFFEE_RUSSEL_HOBBS, COFFEE_TYPE_FILTER,
  FilterCoffeeMaker,
  MelittaFilterCoffeeMaker,
  RusselHobbsFilterCoffeeMaker
} from "./Exercise";

export class Tester {

  run() {
    this.testCoffeeMaker();
    this.testFilterCoffeeMaker();
    this.testMelittaFilterCoffeeMaker();
    this.testRusselHobbsFilterCoffeeMaker();
  }

  testCoffeeMaker() {
    // find way to test if class is abstract
    // find way to test if abstract class has declared abstract method
  }

  testFilterCoffeeMaker() {
    const melittaFilterCoffeeMaker = new MelittaFilterCoffeeMaker();

    // find way to test if class is abstract

    // test getCoffeeType
    if (! FilterCoffeeMaker.prototype.hasOwnProperty("getCoffeeType")) {
      throw new TestError(
        "FilterCoffeeMaker must implement getCoffeeType()");
    }
    if (melittaFilterCoffeeMaker.getCoffeeType() !== COFFEE_TYPE_FILTER) {
      throw new TestError(
        "FilterCoffeeMaker.getCoffeeType() should return \"" +
        COFFEE_TYPE_FILTER + "\"");
    }
  }

  testMelittaFilterCoffeeMaker() {
    // test non-abstract
    const melittaFilterCoffeeMaker = new MelittaFilterCoffeeMaker();

    // test getCoffee
    if (! MelittaFilterCoffeeMaker.prototype.hasOwnProperty("getCoffee")) {
      throw new TestError(
        "MelittaFilterCoffeeMaker must implement getCoffee()");
    }
    if (melittaFilterCoffeeMaker.getCoffee() !== COFFEE_MELITTA) {
      throw new TestError(
        "MelittaFilterCoffeeMaker.getCoffee() should return \"" +
        COFFEE_MELITTA + "\"");
    }
  }

  testRusselHobbsFilterCoffeeMaker() {
    // test non-abstract
    const russelHobbsFilterCoffeeMaker = new RusselHobbsFilterCoffeeMaker();

    // test getCoffee
    if (! RusselHobbsFilterCoffeeMaker.prototype.hasOwnProperty("getCoffee")) {
      throw new TestError(
        "RusselHobbsFilterCoffeeMaker must implement getCoffee()");
    }
    if (russelHobbsFilterCoffeeMaker.getCoffee() !== COFFEE_RUSSEL_HOBBS) {
      throw new TestError(
        "RusselHobbsFilterCoffeeMaker.getCoffee() should return \"" +
        COFFEE_RUSSEL_HOBBS + "\"");
    }
  }

}
