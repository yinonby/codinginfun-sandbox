
class CreditCard {
  constructor(private cardNumber: string) {}
}

class PaymentSystem {
  // implement a public method named 'charge()' with a return-type 'void'
  // - the method should accept 2 parameters:
  //   2. parameter named 'creditCard' of type 'CreditCard'.
  //   1. parameter named 'person' of type 'Person'.
  // - the method should print to the output "Payment completed!"
}

class Person {
  // implement a constructor with 2 private parameter properties:
  // 'firstName' and 'lastName'

  // implement a public method named 'getFullName()' with a return-type string
  // the method should return a string consisting of the values of
  // firstName and lastName, separated by a single space
}

abstract class ComicFan extends Person {
  // declare a public abstract method named 'getFavoriteComicBook()' with
  // a return-type 'string'
}

class SpidermanFan extends ComicFan {
  // implement abstract method 'getFavoriteComicBook()' so that it
  // returns the string "Spiderman"
}

class SupermanFan extends ComicFan {
  // implement abstract method 'getFavoriteComicBook()' so that it
  // returns the string "Superman"
}

class BatmanFan extends ComicFan {
  // implement abstract method 'getFavoriteComicBook()' so that it
  // returns the string "Batman"
}

class ComicCon {
  // declare a private property named 'participants', of type 'ComicFan'
  // array, and initialize it with an empty array

  // declare a private property named 'paymentSystem' of type
  // 'PaymentSystem', and initialize it with a new instance of
  // the 'PaymentSystem' class

  // implement a public method named 'register()' with a return-type 'void'
  // - the method should accept 2 parameters:
  //   1. parameter named 'participant' of type 'ComicFan'.
  //   2. parameter named 'creditCard' of type 'CreditCard'.
  // - the method should call the payment system's 'charge()' method
  //   with the participant and credit card
  //   This is the key point of this exercise: the method 'charge()' accepts
  //   a parameter of type 'Person'. We pass the variable 'participant', which
  //   is of type 'ComicFan', which whill then take its form as a
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

// register a new 'SpidermanFan' to the Comic-Con, named "Lisa Smith"
// register a new 'SupermanFan' to the Comic-Con, named "Bob Smith"
// register a new 'BatmanFan' to the Comic-Con, named "Monica Hunter"
// register a new 'SupermanFan' to the Comic-Con, named "Rob Hunter"

/* do not change anything below this line */
export { comicCon };

