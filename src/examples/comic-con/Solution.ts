
class CreditCard {
  constructor(private cardNumber: string) {}
}

class PaymentSystem {
  public charge(creditCard: CreditCard, person: Person): void {
    console.log("Sending payment request");
  }
}

class Person {
  constructor(private firstName: string, private lastName: string) {
  }

  // API methods

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

abstract class ComicFan extends Person {
  // API methods

  public abstract getFavoriteComicBook(): string;
}

class SpidermanFan extends ComicFan {
  public getFavoriteComicBook(): string {
    return "Spiderman";
  }
}

class SupermanFan extends ComicFan {
  public getFavoriteComicBook(): string {
    return "Superman";
  }
}

class BatmanFan extends ComicFan {
  public getFavoriteComicBook(): string {
    return "Batman";
  }
}

class ComicCon {
  private participants: ComicFan[] = [];
  private paymentSystem: PaymentSystem = new PaymentSystem();

  public register(participant: ComicFan, creditCard: CreditCard): void {
    // charge the participant
    // This is the key point of this exercise: the method 'charge()' accepts
    // a parameter of type 'Person'. We pass the variable 'participant', which
    // is of type 'ComicFan', which whill then take its form as a
    // 'Person', inside the 'charge()' method
    this.paymentSystem.charge(creditCard, participant);

    // when charge is completed with no errors, add the participant to the
    // list of participants
    this.participants.push(participant);
  }

  // API methods

  public getParticipants(): ComicFan[] {
    return this.participants;
  }
}

const SMITH_FAMILY_CREDIT_CARD = new CreditCard("1111 1111 1111 1111");
const HUNTER_FAMILY_CREDIT_CARD = new CreditCard("2222 2222 2222 2222");
const comicCon: ComicCon = new ComicCon();

comicCon.register(new SpidermanFan("Lisa", "Smith"), SMITH_FAMILY_CREDIT_CARD);
comicCon.register(new SupermanFan("Bob", "Smith"), SMITH_FAMILY_CREDIT_CARD);
comicCon.register(new BatmanFan("Monica", "Hunter"), HUNTER_FAMILY_CREDIT_CARD);
comicCon.register(new SupermanFan("Rob", "Hunter"), HUNTER_FAMILY_CREDIT_CARD);

/* do not change anything below this line */
export { comicCon };
