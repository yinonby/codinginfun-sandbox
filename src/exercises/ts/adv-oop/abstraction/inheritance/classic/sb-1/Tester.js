/* eslint-disable no-prototype-builtins */

import TestError from "../../../../../../../infra/test/TestError";
import {
  COFFEE_DELONGHI,
  COFFEE_NESPRESSO,
  DeLonghiCoffeeMaker,
  NespressoCoffeeMaker,
} from "./Exercise";

export class Tester {

  run() {
    this.testCoffeeMaker();
    this.testNespressoCoffeeMaker();
    this.testDeLonghiCoffeeMaker();
  }

  testCoffeeMaker() {
    // find way to test if class is abstract
    // find way to test if abstract class has declared abstract method
  }

  testNespressoCoffeeMaker() {
    // test non-abstract
    const nespressoCoffeeMaker = new NespressoCoffeeMaker();

    // test getCoffee
    if (! NespressoCoffeeMaker.prototype.hasOwnProperty("getCoffee")) {
      throw new TestError(
        "NespressoCoffeeMaker must implement getCoffee()");
    }
    if (nespressoCoffeeMaker.getCoffee() !== COFFEE_NESPRESSO) {
      throw new TestError(
        "NespressoCoffeeMaker.getCoffee() should return \"" +
        COFFEE_NESPRESSO + "\"");
    }
  }

  testDeLonghiCoffeeMaker() {
    // test non-abstract
    const deLonghiCoffeeMaker = new DeLonghiCoffeeMaker();

    // test getCoffee
    if (! DeLonghiCoffeeMaker.prototype.hasOwnProperty("getCoffee")) {
      throw new TestError(
        "DeLonghiCoffeeMaker must implement getCoffee()");
    }
    if (deLonghiCoffeeMaker.getCoffee() !== COFFEE_DELONGHI) {
      throw new TestError(
        "DeLonghiCoffeeMaker.getCoffee() should return \"" +
        COFFEE_DELONGHI + "\"");
    }
  }

}
