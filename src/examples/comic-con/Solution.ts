
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

  public register(participant: ComicFan): void {
    this.participants.push(participant);
  }

  // API methods

  public getParticipants(): ComicFan[] {
    return this.participants;
  }
}

const comicCon: ComicCon = new ComicCon();

comicCon.register(new SpidermanFan("Lisa", "Smith"));
comicCon.register(new SupermanFan("Bob", "Smith"));
comicCon.register(new BatmanFan("Monica", "Hunter"));
comicCon.register(new SupermanFan("Rob", "Hunter"));
