import Person from "./person";

export default class Customer extends Person {
  constructor(firstName: string, lastName: string,
    private emailAddress: string) {
      super(firstName, lastName);
    }

  public getEmailAddress(): string {
    return this.emailAddress;
  }
}