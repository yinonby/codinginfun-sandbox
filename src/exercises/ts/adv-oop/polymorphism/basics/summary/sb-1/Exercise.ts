/* eslint-disable @typescript-eslint/no-unused-vars */

class CreditCard {
  constructor(private cardNumber: string) {}

  public getLast4Digits(): string {
    return this.cardNumber.slice(-4);
  }
}

class PaymentSystem {
  // implement a public method named 'charge()' with a return-type 'void'
  // - the method should accept 4 parameters:
  //   - parameter named 'person' of type 'Person'.
  //   - parameter named 'amount' of type 'number'.
  //   - parameter named 'currencyCode' of type 'string'.
  //   - parameter named 'creditCard' of type 'CreditCard'.
  // - the method should print to the output information about the charge
}

class Person {
  // implement a constructor with 2 private readonly parameter properties:
  // 'firstName' and 'lastName'

  // implement a public method named 'getFullName()' with a return-type string
  // the method should return a string consisting of the values of
  // firstName and lastName, separated by a single space
}

class ComicFan extends Person {
  // implement a constructor with 3 parameters:
  // 'firstName' of type string
  // 'lastName' of type string
  // private readonly property 'favoriteCharacter' of type 'string

  // implement a public getter method named 'getFavoriteCharacter()', which
  // returns the value of the property 'favoriteCharacter'
}

class ComicCon {
  // declare a private property named 'participants', of type 'ComicFan'
  // array, and initialize it with an empty array

  // declare a private property named 'paymentSystem' of type
  // 'PaymentSystem', and initialize it with a new instance of
  // the 'PaymentSystem' class

  private amountUSD: number = 15;

  // implement a public method named 'register()' with a return-type 'void'
  // - the method should accept 4 parameters:
  //   - parameter named 'firstName' of type 'string'.
  //   - parameter named 'lastName' of type 'string'.
  //   - parameter named 'favoriteCharacter' of type 'string'.
  //   - parameter named 'creditCard' of type 'CreditCard'.
  // - the method should construct a new ComicFan object and assign it to
  //   a variable named 'participant'
  // - the method should call the payment system's 'charge()' method
  //   with the correct parameters
  //   This is the key point of this exercise: the method 'charge()' accepts
  //   a parameter of type 'Person'. We pass the variable 'participant' of type
  //   'ComicFan', which will then take its form as a
  //   'Person', inside the 'charge()' method
  // - when the charge is successfully completed, the method should
  //   add the 'participant' to the member property array 'participants'

  // implement a public method named 'getParticipants()' with a return-type
  // of array of 'ComicFan'
  // - the method should return the member property array 'participants'
}

const SMITH_FAMILY_CREDIT_CARD = new CreditCard("1111 1111 1111 1111");
const HUNTER_FAMILY_CREDIT_CARD = new CreditCard("2222 2222 2222 2222");
const comicCon: ComicCon = new ComicCon();

// register a new 'Spiderman' fan to the Comic-Con, named "Lisa Smith",
// using the Smith family credit card

// register a new 'Superman' fan to the Comic-Con, named "Bob Smith"
// using the Smith family credit card

// register a new 'Batman' fan to the Comic-Con, named "Monica Hunter"
// using the Hunter family credit card

// register a new 'Superman' fan to the Comic-Con, named "Rob Hunter"
// using the Hunter family credit card

/* do not change anything below this line */
export { ComicCon, comicCon };

