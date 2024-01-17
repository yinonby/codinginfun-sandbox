
import TestError from "../../../../../../../infra/test/TestError";
import {
  COFFEE_DELONGHI,
  COFFEE_NESPRESSO,
  DelonghiCoffeeMaker,
  NespressoCoffeeMaker
} from "./Exercise";

export class Tester {

  run() {
    this.testCoffeeMaker();
    this.testNespressoCoffeeMaker();
    this.testDelonghiCoffeeMaker();
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

  testDelonghiCoffeeMaker() {
    // test non-abstract
    const delonghiCoffeeMaker = new DelonghiCoffeeMaker();

    // test getCoffee
    if (! DelonghiCoffeeMaker.prototype.hasOwnProperty("getCoffee")) {
      throw new TestError(
        "DelonghiCoffeeMaker must implement getCoffee()");
    }
    if (delonghiCoffeeMaker.getCoffee() !== COFFEE_DELONGHI) {
      throw new TestError(
        "DelonghiCoffeeMaker.getCoffee() should return \"" +
        COFFEE_DELONGHI + "\"");
    }
  }

}
