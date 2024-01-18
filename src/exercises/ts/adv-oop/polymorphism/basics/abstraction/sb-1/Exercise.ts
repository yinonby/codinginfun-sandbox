

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

  // implement a public method named 'register()' with a return-type 'void',
  // accepting a single parameter named 'participant' of type 'ComicFan'
  // the method should add the 'participant' to the member property
  // array 'participants'

  // implement a public method named 'getParticipants()' with a return-type
  // of array of 'ComicFan'
  // the method should return the member property array 'participants'
}

const comicCon: ComicCon = new ComicCon();

// register a new 'SpidermanFan' to the Comic-Con, named "Lisa Smith"
// register a new 'SupermanFan' to the Comic-Con, named "Bob Smith"
// register a new 'BatmanFan' to the Comic-Con, named "Monica Hunter"
// register a new 'SupermanFan' to the Comic-Con, named "Rob Hunter"


/* do not change anything below this line */
export { comicCon };

