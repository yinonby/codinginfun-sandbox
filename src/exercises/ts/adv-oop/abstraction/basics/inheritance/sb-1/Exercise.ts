
const COFFEE_NESPRESSO: string = "Nespresso coffee";
const COFFEE_DELONGHI: string = "DeLonghi coffee";

abstract class CoffeeMaker {
}

class NespressoCoffeeMaker extends CoffeeMaker {
}

class DeLonghiCoffeeMaker extends CoffeeMaker {
}

/* do not change anything below this line */
export {
  COFFEE_DELONGHI, COFFEE_NESPRESSO,
  CoffeeMaker, DeLonghiCoffeeMaker, NespressoCoffeeMaker
};

