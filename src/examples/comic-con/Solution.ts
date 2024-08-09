
class CreditCard {
  constructor(private cardNumber: string) {}

  public getLast4Digits(): string {
    return this.cardNumber.slice(-4);
  }
}

class PaymentSystem {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public charge(person: Person,
    amount: number, currencyCode: string, creditCard: CreditCard): void {
    console.log("Charging " + person.getFullName() +
      ", amount: " + amount + currencyCode +
      ", with credit card ending with: " + creditCard.getLast4Digits());
  }
}

class Person {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string) {
  }

  // API methods

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class ComicFan extends Person {
  constructor(
    firstName: string,
    lastName: string,
    private readonly favoriteCharacter: string) {

    super(firstName, lastName);
  }
  // API methods

  public getFavoriteCharacter(): string {
    return this.favoriteCharacter;
  }
}

class ComicCon {
  private participants: ComicFan[] = [];
  private paymentSystem: PaymentSystem = new PaymentSystem();
  private amountUSD: number = 15;

  public register(firstName: string, lastName: string,
    favoriteCharacter: string, creditCard: CreditCard): void {
    const participant: ComicFan = new ComicFan(firstName, lastName,
      favoriteCharacter);
    // charge the participant
    // This is the key point of this exercise: the method 'charge()' accepts
    // a parameter of type 'Person'. We pass the variable 'participant', which
    // is of type 'ComicFan', which whill then take its form as a
    // 'Person', inside the 'charge()' method
    this.paymentSystem.charge(participant, this.amountUSD, "USD", creditCard);

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

comicCon.register("Lisa", "Smith", "Spiderman", SMITH_FAMILY_CREDIT_CARD);
comicCon.register("Bob", "Smith", "Superman", SMITH_FAMILY_CREDIT_CARD);
comicCon.register("Monica", "Hunter", "Batman", HUNTER_FAMILY_CREDIT_CARD);
comicCon.register("Rob", "Hunter", "Superman", HUNTER_FAMILY_CREDIT_CARD);

/* do not change anything below this line */
export { ComicCon, comicCon };
