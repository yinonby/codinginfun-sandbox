
import {
  COFFEE_DELONGHI,
  COFFEE_NESPRESSO,
  CoffeeMaker,
  DelonghiCoffeeMaker,
  NespressoCoffeeMaker,
} from "./Exercise";

export class Tester {

  run() {
    this.testCoffeeMaker();
    this.nespressoCoffeeMaker();
  }

  testCoffeeMaker() {
    let isErr = false;

    // test abstract
    try {
      const coffeeMaker = new CoffeeMaker();
    } catch (e) {
      isErr = true;
    }
    if (! isErr) {
      throw new TestError(
        "class CoffeeMaker should be abstract");
    }

    // test abstract method ?
  }

  testNespressoCoffeeMaker() {
    // test non-abstract
    const nespressoCoffeeMaker = new NespressoCoffeeMaker();

    // test getCoffee
    if (! NespressoCoffeeMaker.prototype.getCoffee) {
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
    if (! DelonghiCoffeeMaker.prototype.getCoffee) {
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
