
const COFFEE_TYPE_FILTER: string = "Filter coffee type";
const COFFEE_MELITTA: string = "Melitta coffee";
const COFFEE_RUSSEL_HOBBS: string = "Russel Hobbs coffee";

abstract class CoffeeMaker {
}

abstract class FilterCoffeeMaker {
}

class MelittaFilterCoffeeMaker extends FilterCoffeeMaker {
}

class RusselHobbsFilterCoffeeMaker extends FilterCoffeeMaker {
}

/* do not change anything below this line */
export {
  COFFEE_MELITTA,
  COFFEE_RUSSEL_HOBBS, COFFEE_TYPE_FILTER, CoffeeMaker, FilterCoffeeMaker,
  MelittaFilterCoffeeMaker,
  RusselHobbsFilterCoffeeMaker
};

